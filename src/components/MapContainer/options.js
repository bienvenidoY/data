const EmissionTypeEnum = [
  {label: '废气废水', value: 1},
  {label: '废水', value: 2},
  {label: '废气', value: 3},
]

const PipeTypeEnum = [
  {label: '雨水管网', value: 1},
  {label: '污水管网', value: 2},
  {label: '废气', value: 3},
]

const DrainTypeEnum = [
  {label: '雨水排口', value: 1},
  {label: '污水排口', value: 2},
]

export const OPTIONS = {
  1000: {
    title: '企业详情',
    key: 'companyVo',
    options: [
      {
        label: '企业名称',
        prop: 'companyName',
      },{
        label: '通讯地址',
        prop: 'companyAddress',
      },
      {
        label: '联系方式',
        prop: 'companyPhone',
      },
      {
        label: '法人代表',
        prop: 'legalPerson',
      },
      {
        label: '行业类别',
        prop: 'industryType',
      },
      {
        label: '排放类型',
        prop: 'emissionType',
        type: 'select',
        options: EmissionTypeEnum
      },      {
        label: '注册资本',
        prop: 'registeredCapital',
      },     {
        label: '厂区面积',
        prop: 'companyArea',
      },

    ]
  },
  2001: {
    title: '档案-管网-雨水管网',
    key: 'drainPipeNetworkArchivesVo',
    options: [
      {
        label: '管网名称',
        prop: 'locationName',
      },{
        label: '管段编号',
        prop: 'pipeName',
      },
      {
        label: '管网类型',
        prop: 'pipeType',
        type: 'select',
        options: PipeTypeEnum
      },
      {
        label: '管径（DN ）',
        prop: 'pipeDiameter',
      },
      {
        label: '管段长度（m）',
        prop: 'pipeLength',
      },
      {
        label: '管材',
        prop: 'pipeMaterial',
      },
      {
        label: '标高',
        prop: 'elevation',
      },
      {
        label: 'CCTV检测信息',
        prop: 'cctvDetectionInformation',
      },

    ]
  },
  2002: {
    title: '档案-管网-污水管网',
    key: 'drainPipeNetworkArchivesVo',
    options: [
      {
        label: '管网名称',
        prop: 'locationName',
      },{
        label: '管段编号',
        prop: 'pipeName',
      },
      {
        label: '管网类型',
        prop: 'pipeType',
        type: 'select',
        options: PipeTypeEnum
      },
      {
        label: '管径（DN ）',
        prop: 'pipeDiameter',
      },
      {
        label: '管段长度（m）',
        prop: 'pipeLength',
      },
      {
        label: '管材',
        prop: 'pipeMaterial',
      },
      {
        label: '标高',
        prop: 'elevation',
      },
      {
        label: 'CCTV检测信息',
        prop: 'cctvDetectionInformation',
      },

    ]
  },
  2100: {
    title: '档案-入河排口',
    key: 'drainIntoRiverArchivesVo',
    options: [
      {
        label: '排放企业',
        prop: 'drainCompany',
      },{
        label: '排口类型',
        prop: 'drainType',
        type: 'select',
        options: DrainTypeEnum
      },
      {
        label: '排口位置',
        prop: 'drainLocation',
      },
      {
        label: '排入体名称',
        prop: 'drainRiverName',
      },
      {
        label: '排放方式',
        prop: 'drainEmissionType',
      },
      {
        label: '河道河长',
        prop: 'riverLength',
      },
      {
        label: '河长联系方式',
        prop: 'riverManagerPhone',
      },
      {
        label: '入河方式',
        prop: 'intoRiverType',
      },
      {
        label: '监控状况',
        prop: 'monitorType',
      },
      {
        label: '排口照片',
        prop: 'drainPhoto',
      },
    ]
  },
  2200: {
    title: '档案-雨污井',
    key: 'drainRainSewageWellArchivesVo',
    options: [
      {
        label: '窨井名称',
        prop: 'wellName',
      },
      {
        label: '窨井类别',
        prop: 'wellType',
      },{
        label: '窨井位置',
        prop: 'locationName',
      },
      {
        label: '窨井标高',
        prop: 'drainLocation',
      },
      {
        label: '窨井材质',
        prop: 'wellMaterial',
      },
    ]
  },
  2300: {
    title: '档案-泵站',
    key: 'drainPumpStationArchivesVo',
    options: [
      {
        label: '泵站名称',
        prop: 'pumpStationName',
      },
      {
        label: '泵站类别',
        prop: 'pumpStationType',
      },{
        label: '泵站位置',
        prop: 'locationName',
      },
      {
        label: '水泵数量',
        prop: 'waterPumpType',
      },
      {
        label: '水泵型号',
        prop: 'waterPumpType',
      },
    ]
  },
}
