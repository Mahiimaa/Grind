import React from 'react'

function Notification() {
  return (
    <div className="text-blue-500 font-medium bg-slate-300">Notification
     <div className="bg-slate-800 rounded-md"> 
        
     </div>
     {notificationPopUp && (
          <>
            <div
              ref={dropdownRef}
              className="absolute border-[1px] border-neutral-300 rounded-md top-16 right-24 w-1/4 h-1/2 bg-white z-20 overflow-y-scroll custom-scrollbar"
              style={{ overflowY: "scroll" }}
            >
              <div className="flex px-4 py-3 text-xl gap-2 items-center justify-between bg-white ">
                <h2>Notification</h2>
                <button
                  className="text-sm text-blue-600 cursor-default "
                  onClick={handleState}
                >
                  Mark all as read
                </button>
              </div>
              <div className="w-full m-auto bg-background h-0.5"></div>
              {notification.length === 0 ? (
                <div className="flex items-center justify-center p-4">
                  <img
                    src={empty}
                    alt="No notifications"
                    className="w-56 h-56"
                  />
                  {/* <p className="text-center text-gray-500">
                    No notifications available
                  </p> */}
                </div>
              ) : (
                notification
                  .slice()
                  .reverse()
                  .map((notification) => (
                    <div
                      key={notification.notification_id}
                      className={`border-b border-neutral-300 px-6 py-3  ${
                        notification.state
                          ? "bg-white"
                          : "bg-purple-100 cursor-default"
                      }`}
                    >
                      <div
                        onClick={() =>
                          handleSingleState(notification.notification_id)
                        }
                      >
                        <h3 className="text-sml font-medium">
                          {notification.message}
                        </h3>

                        <p className="text-[0.8rem] py-1 text-neutral-500">
                          {formatDate(notification?.created_at)}
                        </p>
                      </div>
                    </div>
                  ))
              )}
            </div>
          </>
        )}
    </div>
  )
}

export default Notification