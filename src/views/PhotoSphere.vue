<template>
  <div id="viewer" style="position:absolute;top:8%; left:2%; width:100%; height: 80%;"></div>
  <img src="../assets/image/doctor.png" style="position:absolute;top:72%; left:2%; width:10%; height: 12%;">
  <div class="trapezoid" style="position:absolute;top:11%;left:2%;"><h2 style="color: white; text-align: center;">{{ this.text }}</h2></div>
  <router-link to="/HospitalGuide">
  <div class="trapezoid" style="position:absolute;top:11%;right:3%;"><h2 style="color: white; text-align: center;">退出</h2></div>
  </router-link>

</template>
<script>
    import {Viewer} from 'photo-sphere-viewer'
    import MarkersPlugin from 'photo-sphere-viewer/dist/plugins/markers'
    import 'photo-sphere-viewer/dist/photo-sphere-viewer.css'
    import 'photo-sphere-viewer/dist/plugins/markers.css';
    export default {
        data(){
            return{
                viewer:'',
                markersPlugin: '',
                text:'',
                image: require('../assets/image/arrow.png'),
                txts: ["免疫室", "化验室", "档案室","诊室","处置室","手术室","病例剖检室","药房","手术准备室","专科检查室","影像室","注射室","前台","住院部"],
                imageArr: [
                  {
                    img: require('../assets/image/1.jpg'),
                  },
                  {
                    img: require('../assets/image/2.jpg'),
                  },
                  {
                    img: require('../assets/image/3.jpg'),
                  },
                  {
                    img: require('../assets/image/4.jpg'),
                  },
                  {
                    img: require('../assets/image/5.jpg'),
                  },
                  {
                    img: require('../assets/image/6.jpg'),
                  },
                  {
                    img: require('../assets/image/7.jpg'),
                  },
                  {
                    img: require('../assets/image/8.jpg'),
                  },
                  {
                    img: require('../assets/image/9.jpg'),
                  },
                  {
                    img: require('../assets/image/10.jpg'),
                  },
                  {
                    img: require('../assets/image/11.jpg'),
                  },
                  {
                    img: require('../assets/image/12.jpg'),
                  },
                  {
                    img: require('../assets/image/13.jpg'),
                  },
                  {
                    img: require('../assets/image/14.jpg'),
                  },

                ],
                index: this.$route.query.index - 1,
                dataList: [
                    {
                        //1
                        markers: [
                            {   
                                id:'circle1',
                                tooltip:'circle1',
                                // html: '<div class="arrow">Hover over me</div>',
                                // circle:30,
                                // svgStyle : {
                                //     fill:'rgba(255,255,0,0.3)',
                                //     stroke:'yellow',
                                //     strokeWidth:'2px',
                                // },
                                // width: 64,
                                // height: 64,
                                html: '<div><img src="https://aupup-mall-pub.oss-cn-shenzhen.aliyuncs.com/public/b254e741-96d5-40d9-aabd-853c5a2e332f.png" style="width:50%;height:50%;transform:rotate(-5deg)"></img></div>',
                                longitude: 2.4,
                                latitude: -0.31179146502439625,
                                anchor: 'center right',
                                jump: true,
                                target: 2,
                                angle: -45,  
                            },
                            {
                                id:'circle2',
                                tooltip:'circle2',
                                // circle:30,
                                // svgStyle : {
                                //     fill:'rgba(255,255,0,0.3)',
                                //     stroke:'red',
                                //     strokeWidth:'2px',
                                // },
                                html: '<div class="bubble">Hello, world!</div>',
                                longitude: -2.5,
                                latitude: -0.28,
                                anchor: 'center right',
                                jump: false   
                            }
                        ],
                    },
                    {
                        //2
                        markers: [
                            {
                                id:'circle3',
                                tooltip:'circle3',
                                circle:30,
                                svgStyle : {
                                    fill:'rgba(255,255,0,0.3)',
                                    stroke:'yellow',
                                    strokeWidth:'2px',
                                },
                                longitude: -1.5,
                                latitude: -0.28,
                                anchor: 'center right',
                                jump: true,
                                target: 2,
                                angle: -45,   
                            },
                            {
                                id:'circle4',
                                tooltip:'circle4',
                                circle:30,
                                svgStyle : {
                                    fill:'rgba(255,255,0,0.3)',
                                    stroke:'red',
                                    strokeWidth:'2px',
                                },
                                longitude: -2.5,
                                latitude: -0.28,
                                anchor: 'center right',
                                jump: false   
                            }
                        ],
                    },
                    {
                        //3
                        markers: [
                            {
                                id:'circle5',
                                tooltip:'circle5',
                                circle:30,
                                svgStyle : {
                                    fill:'rgba(255,255,0,0.3)',
                                    stroke:'yellow',
                                    strokeWidth:'2px',
                                },
                                longitude: -1.5,
                                latitude: -0.28,
                                anchor: 'center right',
                                jump: true,
                                target: 2,
                                angle: -45,   
                            },
                            {
                                id:'circle6',
                                tooltip:'circle6',
                                circle:30,
                                svgStyle : {
                                    fill:'rgba(255,255,0,0.3)',
                                    stroke:'red',
                                    strokeWidth:'2px',
                                },
                                longitude: -2.5,
                                latitude: -0.28,
                                anchor: 'center right',
                                jump: false   
                            }
                        ],
                    },
                    {
                        //4
                        markers: [
                            {   
                                id:'circle1',
                                tooltip:'circle1',
                                circle:30,
                                svgStyle : {
                                    fill:'rgba(255,255,0,0.3)',
                                    stroke:'yellow',
                                    strokeWidth:'2px',
                                },
                                longitude: -1.5,
                                latitude: -0.28,
                                anchor: 'center right',
                                jump: true,
                                target: 2,
                                angle: -45,   
                            },
                            {
                                id:'circle2',
                                tooltip:'circle2',
                                circle:30,
                                svgStyle : {
                                    fill:'rgba(255,255,0,0.3)',
                                    stroke:'red',
                                    strokeWidth:'2px',
                                },
                                longitude: -2.5,
                                latitude: -0.28,
                                anchor: 'center right',
                                jump: false   
                            }
                        ],
                    },
                ],
            }
        },
        methods: {
            setViewer(panorama){
                if (this.viewer) try {
                this.viewer.destroy()
                } catch (e) {
                console.log(e)
                const viewer = document.querySelector('#viewer')
                viewer.removeChild(viewer.childNodes[0])
                }
                this.viewer = new Viewer({
                container:document.querySelector('#viewer'),
                // panorama: require(`@/assets/${this.index}.jpg`),
                panorama,
                size:{
                    width: '95%',
                    height: '80%',
                },
                plugins: [
                    [MarkersPlugin, 
                        this.dataList[this.index]
                    ],
                ],
                });

                this.markersPlugin = this.viewer.getPlugin(MarkersPlugin)
                
                this.viewer.on('click', (e, data) => {
                     console.log(`${data.rightclick?'right ':''}clicked at longitude: ${data.longitude} latitude: ${data.latitude}`);
                });


                this.markersPlugin.on('select-marker', (e, marker) => {
                this.viewer.animate({
                    longitude: marker.config.longitude,
                    latitude: marker.config.latitude,
                    zoom: 100,
                    speed: '-2rpm',
                }).then(() =>
                    {if(marker.config.jump){
                        this.index = marker.config.target
                        this.setViewer(this.imageArr[this.index].img)
                    }
                  }
                )
            });
            },
            
        },

        mounted(){
            this.setViewer(this.imageArr[this.index].img);
            this.text = this.txts[this.index];
        }
    }
//     function changeColor(element) {
//   element.classList.toggle('clicked');
// }

</script>

<style>
.bubble {
  position: relative;
  display: inline-block;
  padding: 10px;
  border-radius: 10px;
  background-color: gray;
  color: white;
}

.bubble::before {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 10px 10px 0 10px;
  border-color: gray transparent transparent transparent;
  bottom: -10px;
  left: calc(50% - 10px);
}


.bubble:hover {
  background-color: orange;
  cursor: pointer;
}
.bubble:hover::before {
    content: "";
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 10px 10px 0 10px;
  border-color: orange transparent transparent transparent;
  bottom: -10px;
  left: calc(50% - 10px);
}

.trapezoid {
		  /* height: 100px; 设置高度 */
		  /* width: auto; 设置宽度 */
      /* left: 2px; */
      /* background-size: 100% auto; */
      display: inline-block;
      padding: 3px 15px;
      /* margin: 5px; */
		  background-color: black; /* 背景颜色为黑色 */
		  opacity: 0.6; /* 设置透明度为50% */
		  position: relative; /* 设置定位为相对定位 */
		}
		/* .trapezoid p {
		  color: white; /* 设置文字颜色为白色 */
		  /* position: absolute; 设置绝对定位 */
		  /* top: 2px; 设置文字距离顶部的距离 */
		  /* left: 2px; 设置文字距离左侧的距离 */
      /* size: 5px; */
		  /* z-index: 1; 将文字置于上层 */
		/* } */ 



</style>

