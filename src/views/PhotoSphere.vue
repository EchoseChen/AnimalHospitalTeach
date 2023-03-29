<template>
  <div id="viewer" style="position:absolute;top:8%; left:2%; width:100%; height: 80%;"></div>
  <img src="../assets/image/doctor.png" style="position:absolute;top:72%; left:2%; width:10%; height: 12%;">
  <div style = "z-index:10;position:absolute;top:80%;left:12.5%;"><h2 style="color: white">{{ this. doctor}}</h2></div>
  <div class="trapezoid" style="position:absolute;top:11%;left:2%;"><h2 style="color: white; text-align: center;">{{ this.room }}</h2></div>
  <router-link to="/HospitalGuide">
  <div class="trapezoid" style="position:absolute;top:11%;right:3%;z-index:5555"><h3 style="color: white; text-align: center;">退出</h3></div>
  </router-link>
  <div id = "show">
    <div class="itemfunc" style="position:absolute;top:71%;left:53.25%;z-index: 10;"><h3 style="color: white; text-align: center;">{{ this.item }}</h3></div>
    <div style="background-color: rgba(255, 150, 0, 0.8); width: 43.72%; height: 9%;position:absolute;top:75%;right:3%;z-index: 10;"></div>
    <div class="box" style="position:absolute;top:77.5%;left:55%;z-index: 10;" v-on:click="toggleFunc()"><h3 style="color: white; text-align: center;" >功能说明</h3></div>
    <div class="box" style="position:absolute;top:77.5%;left:70%;z-index: 10;" v-on:click="toggleOperator()"><h3 style="color: white; text-align: center;">操作流程</h3></div>
    <div class="box" style="position:absolute;top:77.5%;left:85%;z-index: 10;" ><h3 style="color: white; text-align: center;" v-on:click="toggleVideo()">演示动画</h3></div>
  </div>
  <div id = "show-video" style="display: inline-block;  position:absolute;left:60%; top:30%;z-index: 5555; width:50%">
  <video controls >
    <source src="https://www.w3school.com.cn/example/html5/mov_bbb.mp4" type="video/mp4" >
    Your browser does not support the video tag.image.png
  </video>
  
  <!-- <div id = "show-operator" class="showfunc">
    <h2>操作流程:</h2>
 <h3>{{ this.func }}</h3> -->
  <!-- <h3>bbb</h3> -->
  <!-- </div> --> 

 </div>

 <div id = "show-func" class="showfunc" style="z-index:55; position:absolute;left:60%; top:30%;">
  <h2>功能说明:</h2>
  <!-- <h3>{{ this.func }}</h3> -->
<p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
  </div>

  <div id = "show-operator" class="showfunc" style="z-index:55; position:absolute;left:60%; top:30%;">
  <h2>操作流程:</h2>
  <!-- <h3>{{ this.func }}</h3> -->
<p>bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb</p>
  </div>




  



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
                room:'',
                doctor:'',
                item:'手术操作台',
                image: require('../assets/image/arrow.png'),
                rooms: ["免疫室", "化验室", "档案室","诊室","处置室","手术室","病例剖检室","药房","手术准备室","专科检查室","影像室","注射室","前台","住院部"],
                doctors: ["助理 兽医", "助理 兽医", "前台","兽医","助理 兽医","兽医","兽医","助理 兽医","助理 兽医","兽医","助理 兽医","助理 兽医","前台","住院兽医或助理兽医"],
                show:'',
                showVideo:'',
                showFunc:'',
                showOperator:'',
                func:"bbb",
                operator:"aaa",
                video:"https://www.w3school.com.cn/example/html5/mov_bbb.mp4",
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
                                // tooltip:'circle1',
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
                                id:'手术操作台222',
                                // tooltip:'circle2',
                                // circle:30,
                                // svgStyle : {
                                //     fill:'rgba(255,255,0,0.3)',
                                //     stroke:'red',
                                //     strokeWidth:'2px',
                                // },
                                html: '<div class="bubble">手术操作台222</div>',
                                longitude: -2.5,
                                latitude: -0.28,
                                anchor: 'center right',
                                jump: false,
                                video: 'https://www.w3school.com.cn/example/html5/mov_bbb.mp4',
                                func:'aaaaaaa',
                                operator: 'bbbbbbbb',
                            },
                            {
                                id:'手术操作台333',
                                // tooltip:'circle2',
                                // circle:30,
                                // svgStyle : {
                                //     fill:'rgba(255,255,0,0.3)',
                                //     stroke:'red',
                                //     strokeWidth:'2px',
                                // },
                                html: '<div class="bubble">手术操作台333!</div>',
                                longitude: -2.5,
                                latitude: -1.0,
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

                this.markersPlugin = this.viewer.getPlugin(MarkersPlugin);
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
                    }else{
                      this.item = marker.config.id;
                      this.show.style.display = "block";
                      this.showVideo.style.display = "none";
                      this.showFunc.style.display = "none";
                      this.showOperator.style.display= "none";
                    }
                  }
                )
            });
            this.markersPlugin.on('unselect-marker', (e, marker) => {
                this.show.style.display = "none";
                this.showVideo.style.display = "none";
                this.showFunc.style.display = "none";
                this.showOperator.style.display= "none";
                console.log(`unClicked on marker ${marker.config.id}`);
            });
            },

            toggleVideo(){
              this.showVideo.style.display = "block";
              this.showFunc.style.display = "none";
              this.showOperator.style.display = "none";
              console.log('video');
            },

            toggleFunc(){
              this.showVideo.style.display = "none";
              this.showFunc.style.display = "block";
              this.showOperator.style.display = "none";
              console.log('func');
            },

            toggleOperator(){
              this.showVideo.style.display = "none";
              this.showFunc.style.display = "none";
              this.showOperator.style.display = "block";
              console.log('operator');
            },
        },
            
        mounted(){
            this.show = document.getElementById("show"),
            this.showVideo = document.getElementById("show-video"),
            this.showFunc = document.getElementById("show-func"),
            this.showOperator = document.getElementById("show-operator"),
            this.show.style.display = "none";
            this.showVideo.style.display = "none";
            this.showFunc.style.display = "none";
            this.showOperator.style.display= "none";
            this.setViewer(this.imageArr[this.index].img);
            this.room = this.rooms[this.index];
            this.doctor = this.doctors[this.index];   
        },

        
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
.itemfunc{
  display: inline-block;
  padding: 3px 30px;
  background-color: rgb(255, 149, 0);
  opacity: 0.86;
  position: relative;
}    

.box {
			border: 3px solid white; /* 设置2像素宽的白色边框 */
			border-radius: 10px; /* 设置圆角为10像素 */
			padding: 3px 15px; /* 设置内边距为10像素，使文本离边框有一定的间隙 */
			display: inline-block;
}

.showfunc{
  position: absolute;
  width: 15%; 
  height: 10%; 
  word-wrap: break-word;
  background-color: white;
  border-radius: 10px; 
	padding: 3px 15px; 
  overflow-x: hidden;
  overflow-y: scroll;
  max-height:10%; 

}


</style>

