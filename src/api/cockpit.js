import {reqGet, reqPost} from '@/api/request/api-request';

// 事件归档
export const getToken = data => {
  return reqPost('/tempTokenToToken', data)
}


// 事件归档
export const getArchives = data => {
  return reqGet('/cockpit/alarm/archives', data)
}

// 异常情况
export const getAlarmNum = data => {
  return reqGet('/cockpit/alarm/num', data)
}

// 协同处置
export const getSolve = data => {
  return reqGet('/cockpit/alarm/solve', data)
}

// 设备概况统计
export const getDeviceNum = data => {
  return reqGet('/cockpit/device/num', data)
}

// 企业概况-数量统计
export const getEntNum = data => {
  return reqGet('/cockpit/ent/num', data)
}

// 企业概况-数量统计
export const getEntCodeNum = data => {
  return reqGet('/cockpit/ent/codeNum', data)
}

// 智能感知
export const getIntellisense = data => {
  return reqGet('/cockpit/intellisenseAll', data)
}

// 巡检维护统计
export const getPatrolNum = data => {
  return reqGet('/cockpit/patrol/num', data)
}
// 巡检维护统计
export const getPatrolTotalNum = data => {
  return reqGet('/cockpit/patrol/totalNum', data)
}

// 点位详情
export const getPatrolInfo = data => {
  return reqGet('/cockpit/patrol/info', data)
}

// 点位列表
export const getPatrolList = data => {
  return reqGet('/cockpit/point/list', data)
}

// 点位详情
export const getWaterLevel = data => {
  return reqGet('/cockpit/water/level', data)
}

// 点位详情
export const getAlarmAlarmNum = data => {
  return reqGet('/cockpit/alarm/alarmNum', data)
}

// 上报
export const getProblemReport = data => {
  return reqGet('/biz/eventCenter/problemReport/list', data)
}

// 告警
export const getAlarmUserHandle = data => {
  return reqGet('/eventCenter/alarmUserHandle/list', data)
}


