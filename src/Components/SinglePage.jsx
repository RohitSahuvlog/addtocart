import { Box, Button, Image } from "@chakra-ui/react";
import React from "react";
import { CartState } from "../Context/Context";

const SinglePage = (prod) => {
  prod = prod.elem;
  const {
    state: { cart },
    dispatch,
  } = CartState();
//   console.log(cart)

  return (
    <div className="products">
      <Box>
        <Box
          border={"1px solid black"}
          display="flex"
          flexDirection={"column"}
          textAlign="center"
          padding={5}
        >
          <Image src={`${prod.avatar}`} />
          <Box>{prod.productName}</Box>
          <Box>Price:${prod.price}</Box>
          <Box>rating:{prod.rating.length}</Box>
          <Box display={"flex"} justifyContent="space-between">
            {/* {cart.filter((p) =>
              p.uuid !== prod.uuid ? ( */}
                <button
                  colorScheme="blue"
                  border="none"
                  padding="5px"
                  onClick={() => {
                    dispatch({
                      type: "Remove_From_Card",
                      payload: prod,
                    });
                    console.log(cart);
                  }}
                >
                  Remove the cart
                </button>
              {/* ) : ( */}
                <button
                  onClick={() => {
                    console.log(cart);
                    dispatch({
                      type: "Add_to_Card",
                      payload: prod,
                    });
                  }}
                  border="none"
                  padding="5px"
                >
                  {prod.inStock.length ? "out of Stock" : "Add to card"}
                </button>
              {/* )
            )} */}

            <Box></Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default SinglePage;
