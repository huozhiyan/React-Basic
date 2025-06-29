function Item({ name, isPacked }) {
  let itemContent = name;
  if (isPacked) {
    itemContent = <del>{name + " ✅"}</del>;
  }
  return <li className="item">{itemContent}</li>;
}

export default function PackingList() {
  return (
    <section>
      <h1>前端杂货铺的行李清单</h1>
      <ul>
        <Item isPacked={true} name="Mac电脑" />
        <Item isPacked={true} name="React从入门到放弃" />
        <Item isPacked={false} name="大耳朵图图贴纸" />
      </ul>
    </section>
  );
}
