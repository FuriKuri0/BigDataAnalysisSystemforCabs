import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import { message } from 'antd'
<<<<<<< HEAD

const key = 'updatable';

export default class Map3 extends Component {
=======
import { withRouter } from 'react-router-dom';

const key = 'updatable';

export default class Map extends Component {
>>>>>>> 909892b1b180361ac26c62fe532772ff25415da9


    componentDidMount() {
        this.token = PubSub.subscribe('setCar', (_, stateObj) => {
<<<<<<< HEAD
            // console.log(stateObj);
            if (stateObj.finding) {
                // console.log('有人在查');
                // console.log(this.state);
                message.loading({content:'正在查询车辆路径',key})
                this.setCar(stateObj.carName,stateObj.pathDate);
            }
            if (stateObj.delete) {
                // console.log('要删除东西了');
=======
            if (stateObj.finding) {
                message.loading({content:'正在查询车辆路径',key,duration:20})
                PubSub.publish('inputAble',{isFinding:true})
                this.setCar(stateObj.carName,stateObj.pathDate);
            }
            if (stateObj.delete) {
>>>>>>> 909892b1b180361ac26c62fe532772ff25415da9
                this.deleteCar(stateObj.deleteIndex);
            }

        })

        var map = new window.AMap.Map(this.refs.container, {
            zoom: 12,
            mapStyle: 'amap://styles/whitesmoke',
            center:[113.2583, 23.1232]
        });
<<<<<<< HEAD

        var colors = [
            "#3366cc", "#dc3912", "#ff9900", "#109618", "#990099", "#0099c6", "#dd4477", "#66aa00",
            "#b82e2e", "#316395", "#994499", "#22aa99", "#aaaa11", "#6633cc", "#e67300", "#8b0707",
            "#651067", "#329262", "#5574a6", "#3b3eac"
        ];

        window.AMapUI.load(['ui/misc/PathSimplifier', 'lib/$'], function (PathSimplifier, $) {

=======
        window.AMapUI.loadUI(['geo/DistrictExplorer'], function(DistrictExplorer) {
            var currentAreaNode = null;
            //创建一个实例
            var districtExplorer = new DistrictExplorer({
                eventSupport: true,
                map: map
            });
        
             //绘制某个区域的边界
             function renderAreaPolygons(areaNode) {
              //更新地图视野
              map.setBounds(areaNode.getBounds(), null, null, true);
          
              //清除已有的绘制内容
              districtExplorer.clearFeaturePolygons();
          
              //绘制子区域
              districtExplorer.renderSubFeatures(areaNode, function(feature, i) {
          
      
          
                  return {
                      cursor: 'default',
                      bubble: true,
                      strokeColor: '#03DAC5', //线颜色
                      strokeOpacity: 1, //线透明度
                      strokeWeight: 1, //线宽
                
                      fillOpacity: 0, //填充透明度
                  };
              });
          
              //绘制父区域
              districtExplorer.renderParentFeature(areaNode, {
                cursor: 'default',
                bubble: true,
                strokeColor: '#03DAC5', //线颜色
                strokeOpacity: 1, //线透明度
                strokeWeight: 1, //线宽
                
                fillOpacity: 0, //填充透明度
              });
          }
          
          //切换区域后刷新显示内容
          function refreshAreaNode(areaNode) {
          
              districtExplorer.setHoverFeature(null);
          
              renderAreaPolygons(areaNode);
          
           
          }
          
          //切换区域
          function switch2AreaNode(adcode, callback) {
          
              if (currentAreaNode && ('' + currentAreaNode.getAdcode() === '' + adcode)) {
                  return;
              }
          
              loadAreaNode(adcode, function(error, areaNode) {
          
                  if (error) {
          
                      if (callback) {
                          callback(error);
                      }
          
                      return;
                  }
          
                  currentAreaNode = window.currentAreaNode = areaNode;
          
                  //设置当前使用的定位用节点
                  districtExplorer.setAreaNodesForLocating([currentAreaNode]);
          
                  refreshAreaNode(areaNode);
          
                  if (callback) {
                      callback(null, areaNode);
                  }
              });
          }
          
          //加载区域
          function loadAreaNode(adcode, callback) {
          
              districtExplorer.loadAreaNode(adcode, function(error, areaNode) {
          
                  if (error) {
          
                      if (callback) {
                          callback(error);
                      }
          
                      console.error(error);
          
                      return;
                  }
          
                
          
                  if (callback) {
                      callback(null, areaNode);
                  }
              });
          }
          switch2AreaNode(440100);
          });
        var colors = [
            "#4e72e2", "#1ec78a", "#eec055", "#e3843c", "#e6556f", "#0099c6", "#dd4477", "#66aa00",
            "#b82e2e", "#316395", "#994499", "#22aa99",
        ];

        window.AMapUI.load(['ui/misc/PathSimplifier', 'lib/$'], function (PathSimplifier, $) {
            window.PathSimplifier = PathSimplifier;
>>>>>>> 909892b1b180361ac26c62fe532772ff25415da9
            if (!PathSimplifier.supportCanvas) {
                alert('当前环境不支持 Canvas！');
                return;
            }

            var pathSimplifierIns = new PathSimplifier({
                zIndex: 100,
                //autoSetFitView:false,
                map: map, //所属的地图实例

                getPath: function (pathData, pathIndex) {
                    // console.log(pathIndex);
                    return pathData.path;
                },
<<<<<<< HEAD
                getHoverTitle: function (pathData, pathIndex, pointIndex) {

                    // if (pointIndex >= 0) {
                    //     //point 
                    //     return pathData.name + '，点：' + pointIndex + '/' + pathData.path.length;
                    // }

=======
                getHoverTitle: function (pathData, pathIndex, pointIndex) {  
>>>>>>> 909892b1b180361ac26c62fe532772ff25415da9
                    return pathData.name /* + '，点数量' + pathData.path.length */;
                },
                renderOptions: {
                    pathLineStyle: { //路径的样式
                        dirArrowStyle: true//轨迹上的箭头
                    },
                    getPathStyle: function (pathItem, zoom) {
<<<<<<< HEAD

                        var color = colors[pathItem.pathIndex] //以此取颜色
                        // lineWidth = Math.round(4 * Math.pow(1.1, zoom - 3));    //线宽随zoom增大
                        // console.log(pathItem.pathIndex);
=======
                        var color = colors[pathItem.pathIndex] //以此取颜色
>>>>>>> 909892b1b180361ac26c62fe532772ff25415da9
                        return {
                            pathLineHoverStyle: {
                                strokeStyle: color,
                            },
                            pathLineStyle: { //轨迹线的样式
                                strokeStyle: color,
<<<<<<< HEAD
                                lineWidth: 8
=======
                                lineWidth: 8,
>>>>>>> 909892b1b180361ac26c62fe532772ff25415da9
                            },
                            pathLineSelectedStyle: {    //轨迹线处于选中状态的样式
                                strokeStyle: color,
                                lineWidth: 12
                            },
                            pathNavigatorStyle: {//轨迹巡航器(那个箭头一样的东西)样式
                                fillStyle: color,
                                // content: PathSimplifier.Render.Canvas.getImageContent(''),

                            },
                            startPointStyle:{
<<<<<<< HEAD
                                fillStyle: '#03dac5',
=======
                                fillStyle: '#BB86FC',
>>>>>>> 909892b1b180361ac26c62fe532772ff25415da9
                                radius: 7,
                                strokeStyle:'white'
                            },
                            endPointStyle: {
<<<<<<< HEAD
                                fillStyle: '#03dac5',
                                radius: 7,
                                strokeStyle:'white'
                            }
=======
                                fillStyle: '#BB86FC',
                                radius: 7,
                                strokeStyle:'white'
                            },
>>>>>>> 909892b1b180361ac26c62fe532772ff25415da9
                        };
                    }
                }
            });

            window.pathSimplifierIns = pathSimplifierIns;
        });
    }

    setCar = async(carName,pathDate) => {
        let carPath = []
        let allPath = []
        if(window.pathSimplifierIns._data !== undefined){
            allPath = window.pathSimplifierIns._data.source;
        }
        //获取到车牌号，将车牌号传入后台，获取数据将路径存入路径总数组种
        if(carName === undefined || carName === ''){
            message.warning({content:'请输入车牌号！',key ,duration:1.5})
<<<<<<< HEAD
            return ;
        }else if(carName.length < 5){
            message.warning({content:'请输入正确的车牌号！',key ,duration:1.5})
=======
            PubSub.publish('existCar',{isFinding:false})
            return ;
        }else if(carName.length < 5){
            message.warning({content:'请输入正确的车牌号！',key ,duration:1.5})
            PubSub.publish('existCar',{isFinding:false})
>>>>>>> 909892b1b180361ac26c62fe532772ff25415da9
            return ;
        }
        let sendCarName = '粤A' + carName
        if(pathDate === undefined || pathDate === ''){
            message.warning({content:'请输入查询时间！',key ,duration:1.5})
<<<<<<< HEAD
=======
            PubSub.publish('existCar',{isFinding:false})
>>>>>>> 909892b1b180361ac26c62fe532772ff25415da9
            return ;
        }
        let sendDate = pathDate.slice(5,7)+pathDate.slice(8,10);

        const response = await fetch(`http://39.98.41.126:31100/getTrace/${sendCarName}/${sendDate}`)
        const data = await response.json()
        if(data.path !== null){
            message.success({content:'查询成功！',key ,duration:1.5})
<<<<<<< HEAD
            PubSub.publish('existCar',{exist:true})
        }else {
            console.log(2);
            message.warning({content:'未查询到该出租车',key ,duration:1.5});
            PubSub.publish('existCar',{exist:false})
=======
            PubSub.publish('existCar',{exist:true,isFinding:false})
        }else {
            console.log(2);
            message.warning({content:'未查询到该出租车',key ,duration:1.5});
            PubSub.publish('existCar',{exist:false,isFinding:false})
>>>>>>> 909892b1b180361ac26c62fe532772ff25415da9
            return ;
        }
        // data.path = gaodeMap;
        carPath = data;

<<<<<<< HEAD
        // if (this.state.num === 1) {
        //     carPath = { name: "粤A-88888", path: [[116.42289, 39.904987], [116.406265, 39.905015], [116.406441, 39.905018], [116.406647, 39.905018], [116.406647, 39.905018], [116.40667, 39.904457], [116.4067, 39.903893], [116.4067, 39.903473], [116.4067, 39.902996], [116.406731, 39.902462], [116.406731, 39.901714], [116.406731, 39.901463], [116.406731, 39.901031], [116.406738, 39.901001], [116.406746, 39.900829], [116.406746, 39.900829], [116.405731, 39.90081], [116.404793, 39.900787], [116.403557, 39.900745], [116.403076, 39.90073], [116.402534, 39.900673], [116.401474, 39.900539], [116.399826, 39.900299], [116.399635, 39.900291], [116.398956, 39.900257], [116.396423, 39.900181], [116.396111, 39.900188], [116.396019, 39.900192], [116.395035, 39.900261], [116.393898, 39.900356], [116.393372, 39.900391], [116.393089, 39.900398], [116.392677, 39.90041], [116.3918, 39.900387], [116.390381, 39.900356], [116.389412, 39.900326], [116.388039, 39.900288], [116.386444, 39.900227], [116.385536, 39.900208], [116.384285, 39.900158], [116.384132, 39.90015], [116.382462, 39.900108], [116.381516, 39.900082], [116.381226, 39.900074], [116.380417, 39.90004], [116.378304, 39.899963], [116.377563, 39.89994], [116.377243, 39.899929], [116.377014, 39.899918], [116.374428, 39.899857], [116.374237, 39.899849], [116.373009, 39.899792], [116.37278, 39.89978], [116.371475, 39.899742], [116.371162, 39.899731], [116.368927, 39.899662], [116.368629, 39.899647], [116.367584, 39.899612], [116.366348, 39.899574], [116.36554, 39.899548], [116.365135, 39.89954], [116.364464, 39.899509], [116.363419, 39.899483], [116.363297, 39.899479], [116.363197, 39.899475], [116.360748, 39.899395], [116.359116, 39.899349], [116.358742, 39.899326], [116.358383, 39.899292], [116.358025, 39.899254], [116.357719, 39.899197], [116.357445, 39.899136], [116.356979, 39.899002], [116.356781, 39.898941], [116.356277, 39.898754], [116.355415, 39.898373], [116.355415, 39.898373], [116.355072, 39.898262], [116.354843, 39.898209], [116.354355, 39.898121], [116.354149, 39.898094], [116.352913, 39.898006], [116.35038, 39.897816], [116.350136, 39.8978], [116.349876, 39.897789], [116.349632, 39.897781], [116.34951, 39.897778], [116.349182, 39.897797], [116.348473, 39.89785], [116.347588, 39.897907], [116.346939, 39.897926], [116.345535, 39.897877], [116.343033, 39.897736], [116.339699, 39.89756], [116.338036, 39.897495], [116.337288, 39.897453], [116.336502, 39.897411], [116.334221, 39.897285], [116.332024, 39.897182], [116.331474, 39.897171], [116.330559, 39.897148], [116.329056, 39.897144], [116.328125, 39.897125], [116.32653, 39.897133], [116.325813, 39.897133], [116.324028, 39.897137], [116.324028, 39.897137], [116.318367, 39.897121], [116.31456, 39.89711], [116.314148, 39.89711], [116.313644, 39.897102], [116.312103, 39.897106], [116.311752, 39.897106], [116.31073, 39.897102], [116.309914, 39.897095], [116.309914, 39.897095], [116.309669, 39.897141], [116.309601, 39.897171], [116.309502, 39.89724], [116.309479, 39.89727], [116.309456, 39.897308], [116.309425, 39.897385]] };
        //     this.setState({ num: 2 })
        // } else if (this.state.num === 2) {
        //     carPath = { name: '粤A-66666', path: [[116.305289, 39.904987], [116.406265, 39.905015], [116.406441, 39.905018], [116.406647, 39.905018], [116.406647, 39.905018], [116.40667, 39.904457], [116.4067, 39.903893], [116.4067, 39.903473], [116.4067, 39.902996], [116.406731, 39.902462], [116.406731, 39.901714], [116.406731, 39.901463], [116.406731, 39.901031], [116.406738, 39.901001], [116.406746, 39.900829], [116.406746, 39.900829], [116.405731, 39.90081], [116.404793, 39.900787], [116.403557, 39.900745], [116.403076, 39.90073], [116.402534, 39.900673], [116.401474, 39.900539], [116.399826, 39.900299], [116.399635, 39.900291], [116.398956, 39.900257], [116.396423, 39.900181], [116.396111, 39.900188], [116.396019, 39.900192], [116.395035, 39.900261], [116.393898, 39.900356], [116.393372, 39.900391], [116.393089, 39.900398], [116.392677, 39.90041], [116.3918, 39.900387], [116.390381, 39.900356], [116.389412, 39.900326], [116.388039, 39.900288], [116.386444, 39.900227], [116.385536, 39.900208], [116.384285, 39.900158], [116.384132, 39.90015], [116.382462, 39.900108], [116.381516, 39.900082], [116.381226, 39.900074], [116.380417, 39.90004], [116.378304, 39.899963], [116.377563, 39.89994], [116.377243, 39.899929], [116.377014, 39.899918], [116.374428, 39.899857], [116.374237, 39.899849], [116.373009, 39.899792], [116.37278, 39.89978], [116.371475, 39.899742], [116.371162, 39.899731], [116.368927, 39.899662], [116.368629, 39.899647], [116.367584, 39.899612], [116.366348, 39.899574], [116.36554, 39.899548], [116.365135, 39.89954], [116.364464, 39.899509], [116.363419, 39.899483], [116.363297, 39.899479], [116.363197, 39.899475], [116.360748, 39.899395], [116.359116, 39.899349], [116.358742, 39.899326], [116.358383, 39.899292], [116.358025, 39.899254], [116.357719, 39.899197], [116.357445, 39.899136], [116.356979, 39.899002], [116.356781, 39.898941], [116.356277, 39.898754], [116.355415, 39.898373], [116.355415, 39.898373], [116.355072, 39.898262], [116.354843, 39.898209], [116.354355, 39.898121], [116.354149, 39.898094], [116.352913, 39.898006], [116.35038, 39.897816], [116.350136, 39.8978], [116.349876, 39.897789], [116.349632, 39.897781], [116.34951, 39.897778], [116.349182, 39.897797], [116.348473, 39.89785], [116.347588, 39.897907], [116.346939, 39.897926], [116.345535, 39.897877], [116.343033, 39.897736], [116.339699, 39.89756], [116.338036, 39.897495], [116.337288, 39.897453], [116.336502, 39.897411], [116.334221, 39.897285], [116.332024, 39.897182], [116.331474, 39.897171], [116.330559, 39.897148], [116.329056, 39.897144], [116.328125, 39.897125], [116.32653, 39.897133], [116.325813, 39.897133], [116.324028, 39.897137], [116.324028, 39.897137], [116.318367, 39.897121], [116.31456, 39.89711], [116.314148, 39.89711], [116.313644, 39.897102], [116.312103, 39.897106], [116.311752, 39.897106], [116.31073, 39.897102], [116.309914, 39.897095], [116.309914, 39.897095], [116.309669, 39.897141], [116.309601, 39.897171], [116.309502, 39.89724], [116.309479, 39.89727], [116.309456, 39.897308], [116.309425, 39.897385]] };
        //     allPath = window.pathSimplifierIns._data.source;
        // }
=======
>>>>>>> 909892b1b180361ac26c62fe532772ff25415da9

        allPath.push(carPath);
        //设置数据
        window.pathSimplifierIns.setData(allPath);

        //巡航器
        for (let i = 0; i < allPath.length; i++) {
            this.newNavg(i)
        }

    }

    newNavg = (index) => {
        var navg = window.pathSimplifierIns.createPathNavigator(index, {
            loop: true, //循环播放
            speed: 1000, //巡航速度，单位千米/小时
            pathNavigatorStyle: {
                pathLinePassedStyle: null,
                fillStyle: 'red',                                
                width: 30,
                height: 30,
<<<<<<< HEAD
=======
                content: window.PathSimplifier.Render.Canvas.getImageContent('../../car2.png'),
>>>>>>> 909892b1b180361ac26c62fe532772ff25415da9
            }
        });
        navg.start();
    }

    deleteCar = (dIndex) => {
<<<<<<< HEAD
        console.log(dIndex);
=======
>>>>>>> 909892b1b180361ac26c62fe532772ff25415da9
        if(window.pathSimplifierIns._data !== undefined){
            let allPath = window.pathSimplifierIns._data.source;
            allPath.splice(dIndex, 1);
            window.pathSimplifierIns.setData(allPath);
<<<<<<< HEAD
            // console.log(allPath);
=======
>>>>>>> 909892b1b180361ac26c62fe532772ff25415da9
            for (let i = 0; i < allPath.length; i++) {
                this.newNavg(i)
            }
        }else{
            message.warning('已经没有路径可供删除了')
        }

        
    }

    componentWillUnmount() {
        PubSub.unsubscribe(this.token)
    }

    render() {
        return (
            <div ref="container" style={{ width: "80%", height: "100%" }}></div>
        )
    }
}