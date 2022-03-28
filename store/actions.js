import {
    FETCH_RESUME,
    GET_RECRUIT,
    GET_RECRUIT_MAIN,
    SET_SEARCHDATA,
    FETCH_APPLY,
    GET_ENTINFO,
    GET_RESUMELIST,
    GET_FILELIST,
    GET_APPLICATION_HISTORY,
    GET_COMM,
    GET_TAGLIST
} from './mutation-types'

import axios from 'axios'
import AuthHeader from '../api/AuthHeader'
import { baseUrl, baseAuthUrl } from '../utils/Config'
import { initTranslate, translate, getText, translateApi } from '../utils/Translate.js'

export default{
    async fetchResume({ commit }, resume_id) {
        if(typeof resume_id == "object"){
            resume_id = resume_id.resume_id
        }
        return axios.get(`${baseUrl}/security/${resume_id}`,{
            headers: AuthHeader()
        })
        .then(response => {
            commit(FETCH_RESUME, response.data.data.resume)
        })

    },
    async searchData({ commit }, payload) {
        return axios.get(`${baseUrl}/security/${payload.pageNum}/security/${payload.JobSearch}`)
        .then(res => {
            commit(SET_SEARCHDATA, res.data.data)
        })
    },



    async getRecruit({ commit }, recruit_id) {
        return axios.get(`${baseUrl}/security/${recruit_id}`)
        .then( res => {
            commit(GET_RECRUIT, res.data.data)
            commit(GET_RECRUIT_MAIN, res.data.data)
        })
    },


    async fetchApply({ commit }, apply_id) {
        return axios.get(`${baseUrl}/security/${apply_id}`, {
            headers : AuthHeader() 
        })
        .then( res => {
            for(let i=0;i<res.data.data.length;i++){
                res.data.data[i].resume = JSON.parse(res.data.data[i].resume);
            }
            commit(FETCH_APPLY, res.data.data.resume)
        })
    },
    async getAccountInformation({ commit }) {
        return axios.get(`${baseAuthUrl}/security`, {
            headers : AuthHeader() 
        })
        .then( res => {
            commit('GET_ENTINFO', res.data.data)
        })
    },
    async getResumeList({ commit }, state) {
        return axios.get(`${baseUrl}/security/${state}`, {
            headers : AuthHeader()
        })
        .then( res => {
            commit('GET_RESUMELIST', res.data.data)
        })
    },
    async getFileList({ commit }) {
        return axios.get(`${baseUrl}/security`, {
            headers : AuthHeader()
        })
        .then( res => {
            commit('GET_FILELIST', res.data.data)
        })
    },
    async getApplycationHistory({ commit }) {
        return axios.get(`${baseUrl}/security`, {
            headers : AuthHeader()
        })
        .then( res => {
            for(let i=0;i<res.data.data.length;i++){
                res.data.data[i].resume = JSON.parse(res.data.data[i].resume_data);
            }
            commit('GET_APPLICATION_HISTORY', res.data.data)
        })
    },
    async getComm({ commit }) {
        return axios.get(`${baseUrl}/security`, {
            headers : AuthHeader()
        })
        .then( res => {
            commit(GET_COMM, res.data.data)
        })
    },
    async getTagList({ commit }) {
        return axios.get(`${baseUrl}/security`,{
            headers: AuthHeader()
        })
        .then( res => {
            commit(GET_TAGLIST, res.data.data)
        })
    },
}


