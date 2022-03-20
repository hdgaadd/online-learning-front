<template>
    <div>
        <iframe src="http://localhost:5601/app/kibana#/dashboard/4e53ee70-a831-11ec-81c3-29af3263eac8?_g=(filters:!())&_a=(description:'',filters:!(),fullScreenMode:!t,options:(hidePanelTitles:!f,useMargins:!t),panels:!((embeddableConfig:(),gridData:(h:19,i:'1',w:48,x:0,y:15),id:'9f443ec0-a82c-11ec-81c3-29af3263eac8',panelIndex:'1',type:visualization,version:'7.3.2'),(embeddableConfig:(),gridData:(h:15,i:'2',w:24,x:24,y:0),id:'1ed93ce0-a831-11ec-81c3-29af3263eac8',panelIndex:'2',type:visualization,version:'7.3.2'),(embeddableConfig:(),gridData:(h:15,i:'3',w:24,x:0,y:0),id:c9a3e220-a830-11ec-81c3-29af3263eac8,panelIndex:'3',type:visualization,version:'7.3.2')),query:(language:kuery,query:''),timeRestore:!f,title:%E7%94%A8%E6%88%B7%E8%A1%8C%E4%B8%BA%E7%BB%9F%E8%AE%A1%E5%88%86%E6%9E%90,viewMode:view)/" id="mobsf" scrolling="no" frameborder="0" style="position:absolute;top:0px;left: 0px;right:0px;bottom:150px;"></iframe>
    </div>
</template>
 
 
<script>
    export default {
        data () {
            return {
            }
        },
        mounted(){
            /**
            * iframe-宽高自适应显示   
            */
            function changeMobsfIframe(){
                const mobsf = document.getElementById('mobsf');
                const deviceWidth = document.body.clientWidth;
                const deviceHeight = document.body.clientHeight;
                mobsf.style.width = (Number(deviceWidth)-240) + 'px'; //数字是页面布局宽度差值
                mobsf.style.height = (Number(deviceHeight)-64) + 'px'; //数字是页面布局高度差
            }

            changeMobsfIframe()

            window.onresize = function(){
                changeMobsfIframe()
            }
        }
    }
</script>
