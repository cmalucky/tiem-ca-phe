module.exports ={
  name: "xoa",
  code: `$deleteIn[1s]
 Thành Công Xoá $message[1] Tin Nhắn
 $wait[1s]
 $clear[$message[1];$authorID;$channelID]
 $onlyIf[$message[1]>=0;Không Thể Xoá 0 Tin Nhắn]
 $onlyIf[$message[1]<=100;Không Thể Xoá Hơn 100 Tin Nhắn]
 $onlyIf[$isNumber[$message[1]]==true;Hãy Điền Một Con Số Từ 1 Đến 100]
 
 $suppressErrors`
}
