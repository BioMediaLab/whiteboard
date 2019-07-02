import React, { useState } from 'react'
import { Toast } from 'components'
const Notifications = ({ notifications }) => {
  const [_notifications, setNotifications] = useState([])
  const removeNotification = notificationIndex => {
    setNotifications(
      _notifications.filter((notification, index) => {
        return index !== notificationIndex
      })
    )
  }
  return _notifications.map((notification, index) => {
    return (
      <Toast
        key={`notification-${index}`}
        {...notification}
        onDismiss={() => {
          removeNotification(index)
        }}
      />
    )
  })
}

export default Notifications
