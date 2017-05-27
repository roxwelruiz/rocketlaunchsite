# Channel server-side

class RoomChannel < ApplicationCable::Channel

	# called the moment a user subscribes to the channel
  def subscribed
    #stream_from "room_channel"
  end

  # called as soon as a user leaves the channel (e.g. by closing the browser window)
  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def listen(data)
  	# default method provided by ActionCable to stop all previous streams
  	stop_all_streams

  	stream_for data["room_id"]
    #User.update(current_user.id, room_id: data["room_id"])
  end
end
