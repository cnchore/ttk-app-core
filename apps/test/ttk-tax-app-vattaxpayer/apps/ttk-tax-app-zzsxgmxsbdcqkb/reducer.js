import { Map, fromJS } from 'immutable'
import { reducer as MetaReducer } from 'edf-meta-engine'
import config from './config'
import { getInitState } from './data'
import { number } from 'edf-utils'

//初步设想数据格式
const voucherList = [
    {
        name: 'a',
        detail: [
            {
                abstract: 'a1234423424243232423',
                subject: 'a1',
                direction: 'a2',
                amount: '1.00',
                distributionProject: 'a4',
                flow: 'a5',
                distributionAmount: '444.00',
                type: true
            },{
                abstract: 'a2',
                subject: 'b1',
                direction: 'b2',
                amount: '2.00',
                distributionProject: 'b4',
                flow: 'b5',
                distributionAmount: '555.00',
                // type: true
            },{
                abstract: 'a3',
                subject: 'c1',
                direction: 'c2',
                amount: '3.00',
                distributionProject: 'c4',
                flow: 'c5',
                distributionAmount: '666.00',
                type: true
            }
        ]
    },{
        name: 'b',
        detail: [
            {
                abstract: 'b1',
                subject: 'a1',
                direction: 'a2',
                amount: '4.00',
                distributionProject: 'a4',
                flow: 'a5',
                distributionAmount: '444.00',
                type: true
            },{
                abstract: 'b2',
                subject: 'b1',
                direction: 'b2',
                amount: '5.00',
                distributionProject: 'b4',
                flow: 'b5',
                distributionAmount: '555.00',
                type: true
            },{
                abstract: 'b3',
                subject: 'c1',
                direction: 'c2',
                amount: '6.00',
                distributionProject: 'c4',
                flow: 'c5',
                distributionAmount: '666.00',
                // type: true
            },{
                abstract: 'b4',
                subject: 'c1',
                direction: 'c2',
                amount: '7.00',
                distributionProject: 'c4',
                flow: 'c5',
                distributionAmount: '666.00',
                type: true
            }
        ]
    }
]
const flzlList = [
    "nsrsbh",
    "nsrmc",
    /***填表日期*/
    "tbrq",
    /**收到日期*/
    "sdrq",
    /**接收人*/
    "jsr",
    /**销售不动产不含税销售额*/
    "xsbdcbhsxse",
    /**税务机关代开的增值税专用发票不含税销售额*/
    "swjgdkdzzszyfpbhsxse",
    /**所属期起*/
    "ssqq",
    /**所属期止*/
    "ssqz",
] 

class reducer {
    constructor(option) {
        this.metaReducer = option.metaReducer
        this.config = config.current
    }

    init = (state, option) => {//初始化
        let initState = getInitState(),
            zzsxgmxsbdcqkb = option.initData.zzsxgmxsbdcqkb  ? option.initData.zzsxgmxsbdcqkb :{} 

        zzsxgmxsbdcqkb = this.getZzsxgmxsbdcqkb( zzsxgmxsbdcqkb )
        initState.data.periodData = option.periodData
        initState.data.zzsxgmxsbdcqkb = zzsxgmxsbdcqkb 
        initState.data.checkData = option.initData.checkData
        initState.data.sbbhead = option.initData.sbbhead
        initState.data.isDeclare = option.initData.isDeclare
        initState.data.isCanModify = option.initData.isCanModify
        initState.data.cellComponentsMap = this.setCellComponentsMap( initState.data.cellComponentsMap , option.initData.isInit, option.initData.isCanModify )
        return this.metaReducer.init(state, initState)
    }

    setCellComponentsMap = ( cellComponentsMap , isInit, isCanModify ) => {
        // if( isCanModify ) {
            cellComponentsMap.xsbdcbhsxse = 'Input'
            cellComponentsMap.swjgdkdzzszyfpbhsxse = 'Input'
            cellComponentsMap.sdrq = 'DatePicker'
            cellComponentsMap.jsr = "InputStr"
            cellComponentsMap.zgswjggz = "InputStr"
            
        // } else {
        //     cellComponentsMap.xsbdcbhsxse = 'Text'
        //     cellComponentsMap.swjgdkdzzszyfpbhsxse = 'Text'
        //     cellComponentsMap.sdrq = 'Text'
        //     cellComponentsMap.jsr = "Text"
        //     cellComponentsMap.zgswjggz = "Text"
        //     // cellComponentsMap.xsbdcbhsxse = 'Input'
        //     // cellComponentsMap.swjgdkdzzszyfpbhsxse = 'Input'
        //     // cellComponentsMap.sdrq = 'DatePicker'
        //     // cellComponentsMap.jsr = "InputStr"
        //     // cellComponentsMap.zgswjggz = "InputStr"
            
        // }
        return cellComponentsMap
    }

    getZzsxgmxsbdcqkb( zzsxgmxsbdcqkb ) {
        flzlList.map( item => {
            if( zzsxgmxsbdcqkb[ item ] ===undefined ) {
                zzsxgmxsbdcqkb[ item ] = null
            }
        })
        return zzsxgmxsbdcqkb
    }

    load = (state, value) => {//初始数据加载 caseFlowItems cashFlowDetails
        
        let tableList = this.getTableList( value.cashFlowDetails ),
            datas ={
                'data.list' : fromJS( tableList ),
                'data.dataSource' : fromJS( value.caseFlowItems )
            }
        state = this.metaReducer.sfs(state, datas )
    	return state
    }

    update = ( state , initData ) => {
        let data = this.metaReducer.gf(state, 'data').toJS(),
            zzsxgmxsbdcqkb = (initData.zzsxgmxsbdcqkb && initData.zzsxgmxsbdcqkb) ? initData.zzsxgmxsbdcqkb :{} 
            zzsxgmxsbdcqkb = this.getZzsxgmxsbdcqkb( zzsxgmxsbdcqkb )
        data.zzsxgmxsbdcqkb = zzsxgmxsbdcqkb 
        data.checkData = initData.checkData
        data.isDeclare = initData.isDeclare
        data.isCanModify = initData.isCanModify
        data.sbbhead = initData.sbbhead
        data.cellComponentsMap = this.setCellComponentsMap( data.cellComponentsMap  , initData.isInit, initData.isCanModify  )
        
        state = this.metaReducer.sf(state, 'data', fromJS(data))
        return state
    }

    getTableList = ( voucherList ) => {
        let tableList = []
        
        voucherList.map( item => {
            tableList.push( {
                summary: `凭证号：${item.docCode} 日期：${item.voucherDate.split(' ')[0]}`,
                docCode: item.docCode,
                voucherDate: item.voucherDate,
                orgId: item.orgId,
                docId: item.docId,
                isNameRow: true
            })

            item.details = item.details.map( row => {
                row.docAmount = row.docAmount? number.format( row.docAmount, 2 ) : '0.00'
                row.allotAmount = row.allotAmount? number.format( row.allotAmount, 2 ) : '0.00'
                return row
            })
            tableList = tableList.concat( item.details )
        })

        return tableList
    }
    
    tableLoading = (state, loading) => {
        return this.metaReducer.sf(state, 'data.loading', loading)
    }
}

export default function creator(option) {
    const metaReducer = new MetaReducer(option),
        o = new reducer({ ...option, metaReducer })
    return { ...metaReducer, ...o }
}