import React from 'react'
import { List, message, Spin } from 'antd';
import classNames from 'classnames'
/**
 * 列表组件
 */
class InfiniteListScroller extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: props.dataSource ? props.dataSource : [],
            count: props.count ? props.count : 0,
            care: props.care,
            loading: false,
            hasMore: true,
        }
    }
    componentDidMount() {
    }
    render() {
        return (
            <div className="mk-listScroller">
                {
                    this.state.care ? <div><span style={{ height: '30px', float: 'left', color: '#ff6000' }}>{this.state.care}</span></div>
                        : ''
                }
                <div className="infinite-container">
                    <List
                        dataSource={this.state.data}
                        renderItem={item => (
                            <List.Item key={item.id}>
                                <div>{item.content}</div>
                            </List.Item>
                        )}
                    >
                        {this.state.loading && this.state.hasMore && (
                            <div className="loading-container">
                                <Spin />
                            </div>
                        )}
                    </List>
                </div>
            </div>
        )
    }
}
export default InfiniteListScroller