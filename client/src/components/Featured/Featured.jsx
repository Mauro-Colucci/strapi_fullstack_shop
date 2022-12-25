import { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./featured.scss";
import useFetch from "../../hooks/useFetch";

const Featured = ({ type }) => {
  /* const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/794062/pexels-photo-794062.jpeg",
      img2: "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "descriptive title",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/794062/pexels-photo-794062.jpeg",
      img2: "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "descriptive title",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/794062/pexels-photo-794062.jpeg",
      img2: "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "descriptive title",
      isNew: false,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/794062/pexels-photo-794062.jpeg",
      img2: "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "descriptive title",
      isNew: false,
      oldPrice: 19,
      price: 12,
    },
  ]; */

  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
          blanditiis, natus et odit veritatis facere voluptas ducimus hic,
          reprehenderit exercitationem ut debitis? Ducimus, quis cupiditate
          soluta corrupti iste nulla ab et quas repellendus architecto
          voluptate, reprehenderit veritatis deserunt eos corporis?
        </p>
      </div>
      <div className="bottom">
        {error
          ? "something went wrong"
          : loading
          ? "loading"
          : data?.map((item) => <Card key={item.id} item={item} />)}
      </div>
    </div>
  );
};

export default Featured;
