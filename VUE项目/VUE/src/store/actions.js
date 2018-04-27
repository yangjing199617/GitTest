import state from "./state";


import Vue from 'vue';

export default {
  show_bHead:({commit,state})=>{
    commit('show_bHead')
  },
  hide_bHead:({commit,state})=>{
    commit('hide_bHead')
  },
  show_bFoot:({commit,state})=>{
    commit('show_bFoot')
  },
  hide_bFoot:({commit,state})=>{
    commit('hide_bFoot')
  }
}
