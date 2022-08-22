import React, { useState, useEffect } from 'react'
import { Tabs } from 'antd'
import _ from 'lodash'
import {TabStyle} from './TabStyle'
const { TabPane } = Tabs

function TabCard(props) {
  const { defaultActiveKey: defaultKey, activeKey } = props
  const [defaultActiveKey, setDefaultActiveKey] = useState()

  const size = props.cardSize || 'default'
  const propsTabs = props.tab || []

  useEffect(() => {
    if (props.tab) {
      if (activeKey) {
        setDefaultActiveKey(activeKey)
      } else if (!defaultKey && !defaultActiveKey) {
        if (_.head(propsTabs)) {
          setDefaultActiveKey(_.head(propsTabs).key)
        }
      } else if (defaultKey) {
        const at = _.find(propsTabs, (item) => String(item.key) === String(defaultKey))
        if (at) {
          setDefaultActiveKey(at.key)
        }
      }
    }
  }, [props.tab])

  const onChange = (key) => {
    const at = _.find(propsTabs, (item) => String(item.key) === String(key))
    if (at && at.onClick) {
      at.onClick()
    }
    setDefaultActiveKey(key)
  }

  return (
    <TabStyle>
    <Tabs
        {...props}
        activeKey={String(defaultActiveKey)}
        defaultActiveKey={String(defaultActiveKey)}
        size={size}
        onChange={onChange}
      >
        {!_.isEmpty(propsTabs) &&
          propsTabs.map((item) => {
            return (
              <TabPane
                tab={
                  item.iconTab ? (
                    <span>
                      <item.iconTab /> {item.name}
                    </span>
                  ) : (
                    item.name
                  )
                }
                disabled={item.disabled ? true : false}
                key={item.key}
              >
                {String(item.key) === String(defaultActiveKey) ? <item.content /> : null}
              </TabPane>
            )
          })}
      </Tabs>
      </TabStyle>
  )
}

export default TabCard