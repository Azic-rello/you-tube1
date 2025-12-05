import { Stack } from "@mui/material";
import { category } from "../../constants/Category";
import { colors } from "../../constants/colors";

const Category = ({ selectedCategoryHandle, selectedCategory }) => {
  return (
    <Stack direction={"row"} sx={{ overflowX: "scroll" }}>
      {category.map((item) => (
        <button
          style={{
            background: item.name === selectedCategory && colors.color,
            color: item.name === selectedCategory && "#fff",
          }}
          onClick={() => selectedCategoryHandle(item.name)}
          key={item.name}
          className="category_btn"
        >
          <span
            style={{
              color: item.name === selectedCategory ? "#fff" : colors.color,
              marginRight: "15px",
            }}
          >
            <item.icon />
          </span>
          <span style={{ opacity: "1" }}>{item.name}</span>
        </button>
      ))}
    </Stack>
  );
};

export default Category;
