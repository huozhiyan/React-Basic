import { useState } from "react";
import { sculptureList } from "./data2.js";

export default function Gallery() {
  // 设置index状态变量，初始值为0
  const [index, setIndex] = useState(0);
  // 设置showMore状态变量，初始值为false
  const [showMore, setShowMore] = useState(false);
  // 是否有下一张图片
  const hasNext = index < sculptureList.length - 1;

  // 设置下一张图片的索引
  function handleNextClick() {
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  // 是否显示详情
  function handleMoreClick() {
    setShowMore(!showMore);
  }

  const sculpture = sculptureList[index];
  return (
    <>
      {/*下一张按钮 */}
      <button onClick={handleNextClick}>Next</button>
      {/* 作品名字 by 艺术家 */}
      <h2>
        <i>{sculpture.name}</i> by {sculpture.artist}
      </h2>
      {/* 当前的页数 of 总页数 */}
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      {/* 隐藏/显示详细信息 */}
      <button onClick={handleMoreClick}>
        {showMore ? "Hide" : "Show"} details
      </button>
      {/* 显示详情时，显示详情描述 */}
      {showMore && <p>{sculpture.description}</p>}
      {/* 显示图片 */}
      <img src={sculpture.url} alt={sculpture.alt} />
    </>
  );
}
