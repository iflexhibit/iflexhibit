import Button from "./Button";
import TextField from "./TextField";
import CheckList from "./CheckList";
import { useState } from "react";
import { useEffect } from "react";

const FilterPanel = () => {
  const [text, setText] = useState("");
  const [tags, setTags] = useState({});
  useEffect(() => {
    setTags(
      list.reduce((obj, cur, i) => {
        return { ...obj, [cur]: false };
      }, {})
    );
  }, []);
  const handleChange = (e) => {
    setTags({ ...tags, [e.target.name]: e.target.checked });
  };
  const handleInput = (e) => {
    setText(e.target.value);
  };
  return (
    <div className="filters">
      <Button
        variant="contained fill"
        icon="fas fa-check"
        label="APPLY FILTERS"
      />
      <TextField
        handleInput={handleInput}
        placeholder="Search tags..."
        //add 'fas fa-search' icon
        icon=""
        id="tag"
        name="tag"
        value={text}
      />
      <CheckList list={list} items={tags} handleChange={handleChange} />
    </div>
  );
};

export default FilterPanel;

const list = [
  "Anime and Manga",
  "Comics",
  "Cosplay",
  "Digital Art",
  "Drawings",
  "Fan Art",
  "Fantasy",
  "Game Art",
  "Horror",
  "Literature",
  "Photo Manipulation",
  "Pixel Art",
  "Street Art",
  "Street Photography",
  "Traditional Art",
  "Wallpaper",
  "Video",
];
