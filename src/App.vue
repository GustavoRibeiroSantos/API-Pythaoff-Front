<template>
  <div id="app">
    <div class="fixed-top" id="navbar"> 
 <b-navbar  type="dark" variant="dark">
   <b-nav-item href="#">
         <img id="logo" alt="Vue logo" src="./assets/logo.png">
    </b-nav-item>
      <b-navbar-nav>
        <b-nav-item href="#">Home</b-nav-item>
     </b-navbar-nav>

      <b-navbar-nav id="user">
        <b-nav-item >Usuario</b-nav-item>
     </b-navbar-nav>

  </b-navbar>
  </div>
   <div class="toolbar">
        <button id="one_month">
      1M
    </button>

        <button id="six_months">
      6M
    </button>

        <button id="one_year" class="active">
      1Y
    </button>

        <button id="ytd">
      YTD
    </button>

        <button id="all">
      ALL
    </button>
    </div>


  <div id="chart-timeline"></div>

     <mdb-footer color="stylish-color-dark" class="page-footer font-small pt-4 mt-4">
    <mdb-container class="text-left">
      
    </mdb-container>

    <div class="footer">
      <mdb-container fluid>
      <a id="copyright">  &copy; 2020 Copyright: pythaoff </a>
      </mdb-container>
    </div>
  </mdb-footer>
  </div>
</template>

<script>
import acessos from './Service/acessos'

export default {
  data(){
    return {list:undefined}
  },
  mounted(){
    acessos.listar().then(resposta=>{
      this.list = resposta.data
      console.log(resposta.data)
    })
  },
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

button{
  margin-right: 10px !important;
}

#user{
float: right !important;
}

#chart-timeline{
  max-width: 90%;
  margin-right: auto;
  margin-left: auto;
}

.toolbar{
  margin-top: 100px;
  margin-right: 750px;
}

#logo{
  padding: 0px !important;
  width: 40px;
  height: 40px;
  position: fixed;
  top: 5px;
  left: 1px;
}

#navbar {
  z-index: 9999;
  position: fixed;
  top: 0;
  width: 100% !important;
  margin-bottom: 200px;
}

.footer{
  margin-top: 50px;
  padding-top: 13px;
  border-top:1px solid #8c8c8c;
  background-color: #d9d9d9 ;
  position: fixed;
  bottom: 0;
  width: 100% !important;
  height: 50px;
}
</style>
