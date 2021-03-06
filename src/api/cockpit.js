import {reqGet, reqPost} from '@/api/request/api-request';

// 获取token
export const getToken = data => {
  return reqPost('/tempTokenToToken', data)
}


// 事件归档
export const getArchives = data => {
  return reqGet('/cockpit/alarm/archives', data)
}

// 设备告警&问题上报
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

// 企业概况-近一周各状态码数量
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
// 巡检维护统计-累计巡检
export const getPatrolTotalNum = data => {
  return reqGet('/cockpit/patrol/totalNum', data)
}

// 点位列表
export const getPatrolList = data => {
  return reqGet('/cockpit/point/list', data)
}

// 水质监测
export const getWaterLevel = data => {
  return reqGet('/cockpit/water/level', data)
}

// 异常概况
export const getAlarmAlarmNum = data => {
  return reqGet('/cockpit/alarm/alarmNum', data)
}

// 上报 查询问题上报用户处理数据列表
export const getProblemReport = data => {
  return reqGet('/biz/eventCenter/problemReport/list', data)
}

// 告警 查询告警信息用户处理数据列表
export const getAlarmUserHandle = data => {
  return reqGet('/eventCenter/alarmUserHandle/list', data)
}

// 告警 获取告警信息用户处理数据详细信息
export const getAlarmUserHandleInfo = id => {
  return reqGet(`/eventCenter/alarmUserHandle/${id}`)
}
// 数据收集
export const getDataCollection = data => {
  return reqGet('/cockpit/dataCollection', data)
}

// 水量统计
export const getWaterStat = data => {
  return reqGet('/cockpit/water/waterStat', data)
}

// 点位详情
export const getPointInfo = data => {
  return reqGet('/cockpit/point/info', data)
}

// 设备上报平均值
export const getReportRecordMeanGroup = data => {
  return reqGet('/cockpit/device/reportRecordMeanGroup', data)
}

// 设备上报记录
export const getReportRecord = data => {
  return reqGet('/cockpit/device/reportRecord', data)
}

// 视频
export const getVideoInfo = id => {
  return reqGet(`/cockpit/device/video/${id}`)
}


