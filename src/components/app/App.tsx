import { Table } from 'antd';
import 'leaflet/dist/leaflet.css';
import { Marker } from 'react-leaflet';
import { useAppDispatch, useAppSelection as useAppSelector } from '../../hooks/redux';
import { UseCustomFetch } from '../../hooks/useCustomFetch';
import { RouteResponse } from '../../models/routesResponse';
import { WayPoint } from '../../models/wayPoint';
import { Map } from '../../shared/map/map';
import { MapSlice } from '../../store/reducers/mapSlice';
import { Urls } from '../../tools/http/urls';
import { Line } from '../leaflet/line';
import './App.css';


function App() {
    const { waypoints, currentWayId } = useAppSelector(state => state.mapSlice);
    const { setCurrentWayId } = MapSlice.actions;
    const dispatch = useAppDispatch();

    const getPoints = () => waypoints
        .find(w => w.id === currentWayId)?.points
        .map((value, index, array) => value.toString(index !== array.length - 1))
        .join('')

    const { data, loading, error, reFetch } = UseCustomFetch(Urls.getOsrmUrl(getPoints()));

    const getRowClassName = (record: WayPoint) => record.id === currentWayId ? "selectionRow" : "";

    function onRowClick(record: WayPoint) {
        dispatch(setCurrentWayId(record.id))
        reFetch();
    }

    return (
        <div className="App">
            {!!error && 'Произошла ошибка при получении данных'}
            {
                loading
                    ?
                    'loading...'
                    :
                    <div className="flex_container">

                        <Table<WayPoint>
                            pagination={false}
                            rowClassName={getRowClassName}
                            rowKey={record => record.id}
                            style={{ flex: 1 }}
                            dataSource={waypoints}
                            onRow={record => {
                                return {
                                    onClick: () => onRowClick(record)
                                };
                            }}
                        >
                            <Table.Column<WayPoint>
                                title="Маршрут"
                                dataIndex="points"
                                key="routes"
                                className='route'
                                render={(points, record) => `Маршрут №${waypoints.indexOf(record) + 1}`}
                            />
                            <Table.Column<WayPoint>
                                title="Точки"
                                dataIndex="points"
                                key="points"
                                render={
                                    (points) => (points as any[]).map((p, index, array) => p.toString(index !== array.length - 1).replace(";", " => "))
                                }
                            />
                        </Table>

                        <Map>
                            <Line routes={RouteResponse.mapTo(data).coordinates!.map(c => c.toArray())} />

                            {
                                waypoints.find(w => w.id === currentWayId)?.points.map(p =>
                                    <Marker position={[p.latitude, p.longitude]} />
                                )
                            }
                        </Map>
                    </div>
            }
        </div>
    );
}

export default App;

