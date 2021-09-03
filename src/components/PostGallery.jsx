import { useState } from "react";
import SortControls from "./SortControls";
import Image from "next/image";
import Pagination from "@material-ui/lab/Pagination";

const PostGallery = () => {
  const [sort, setSort] = useState(items[0]);
  const handleSort = (e) => {
    setSort(e.target.name);
  };
  return (
    <div className="posts">
      <SortControls items={items} sortBy={sort} handleSort={handleSort} />
      <div className="gallery">
        {posts.map((post, index) => (
          <div className="card" key={index}>
            <Image
              src={post?.image}
              layout="fill"
              objectFit="cover"
              alt={post?.title}
            />
            <div className="card-info">
              <div className="card-info-group">
                <div className="card-info-group-item">
                  <span>{post?.title}</span>
                </div>
                <div className="card-info-group-item">
                  <div className="avatar">
                    <Image
                      src={post?.author?.avatar}
                      objectFit="cover"
                      layout="fill"
                      alt={post?.author?.username}
                    />
                  </div>
                  <span>{post?.author?.username}</span>
                </div>
              </div>
              <div className="card-info-group">
                <div className="card-info-group-item">
                  <span>{post?.likes?.toLocaleString()}</span>
                  <i className="fas fa-thumbs-up" aria-hidden></i>
                </div>
                <div className="card-info-group-item">
                  <span>{post?.views?.toLocaleString()}</span>
                  <i className="fas fa-eye" aria-hidden></i>
                </div>
                <div className="card-info-group-item">
                  <span>{post?.comments?.toLocaleString()}</span>
                  <i className="fas fa-comment-alt" aria-hidden></i>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Pagination
        count={10}
        color="primary"
        style={{ display: "flex", justifyContent: "center" }}
      />
    </div>
  );
};

export default PostGallery;

const items = [
  "NEW TODAY",
  "NEW THIS WEEK",
  "POPULAR (14 DAYS)",
  "POPULAR (ALL TIME)",
];

const posts = [
  {
    author: {
      avatar:
        "https://lh3.googleusercontent.com/Rhkbs8Ix0zlhtmZZcir4yEPOudAXGDpNBGZhXdS0zREbADt_gn3oNFL8CjWuG94t2pv1cNo_NaEngPQNoqbNQsmwUICLHbhJSXJJ4bYkoVGpRI1rfCyZmapcre645zHK7bJAnRi5P-iKT9LqmL2Cllnr9qjXkrERCfltgeXe42Ul0pnKIRdykLPvWiY7hGuN0fWeqY5po9lpN9nTnC7RyqM_1929XU-5JKWVJP0RDlHvAkD6CCe12xx35Es0H4eSftpLEVg2T9mXiq2C3W57rld9B_xXgAeIc0Hw4Qs2hM48WLnbB8ifivGN_Cq3cAtwF78WvLW_mwqvBFBGtwRbR5S6pPVIpy-f9G_-0R11nREVh7j8rl33V0FoErpKFFscwC7ttZAUpYHRD0FB5XiMyXVgfXVdyYd2mVg6SlLfhSIpFfSTECyCJsYw14ntUa-T8TNQvQ5AMXiZMMpFG3gFfn9CayPaYUrUM_rqbucVKhG4u_5wTMkBeHxMfNzCZHwYqu6OEjKO9T9w1_wvEFJSV95f136IE56_3AH3DR1Pd6UbiAnpJq92qq2BdsCioi4wHfFpqfqO8-xxIxjGF1KgGajbUaOMoWgO9JfHVFnomxwA2iJAvG-tYUXU_mssv-B6eAwMogg_6Z5r9e1JPALefaRukZd7dqwfuyKI_d62uNNd61uaZGs04xYodZ_9nMNEOH6A6RCH_biGrM2Yb4DCkTM=s600-no?authuser=0",
      username: "sosig69",
    },
    likes: 69,
    views: 1000000,
    comments: 420,
    title: "Cyberpunk 2069 - Kirk Sawyer",
    image:
      "https://lh3.googleusercontent.com/XQ_WApWYRxFzIk3x-JVLPfSzfUBPjBxX-fCO9YAErl2lIhBY3zoInMbnhk3XjCEIMot3u_l85nGxzJcdAp9Hf1GLCixw5Vb0iIu53QiNMqXXZuUkly2J5qlKhE4-ayZ9VP_FquxoS6G4zjKBAnJQiBC8UgeJikH0UJA59LCBYB8sg9gsXk6ysTtyPtz-V9l3PutXBuapCS0mnD4NDEo9Y-RBvA8SldfTTZIQza3031zvvWXiQS4c46K7l93QlGiE6P5_M3Jbzk9V2hPpFcBXdTb04hWozx2J1gE0Q62VIwirl0J9QsMSnwJx2PYXTX0n6uW7bzzVZcGEWoqE6_P6rPLCiJm53laNotPjOW8L8LQ9GAmfnIQ_Z8k8IGxXnXNETcq50akvZ4z3jwonUYcDoIO-n7ou4a1tHM9sCcmKU0TZxLqrcndLaoiSY39nSBde91ngc7wtWih5OKVVN7HBffr3cqABvP2n7okSdWDtiXY-qqrF8lEqn9FhtU9K-Jne685U5K3saODhfdy9-fS73Z4fT6tv2xQYKdaiw1uOH0Bmxg322shW32EqUi-y5KDZlIC3Rg8rEAQIZhtYdTB2vBxWG7TA_qVvLH3HWMtnDIMbKt8-kiny0sHYm6l_MhDafX8_iHb5uNT9idm1QGx1aGgH2WZGvzAozR-hSD94oDEqMqKl-74mcSrhnQVUoNS32nowEFmbptm20cVCESWDMis=w1625-h914-no?authuser=0",
  },
  {
    author: {
      avatar:
        "https://lh3.googleusercontent.com/Rhkbs8Ix0zlhtmZZcir4yEPOudAXGDpNBGZhXdS0zREbADt_gn3oNFL8CjWuG94t2pv1cNo_NaEngPQNoqbNQsmwUICLHbhJSXJJ4bYkoVGpRI1rfCyZmapcre645zHK7bJAnRi5P-iKT9LqmL2Cllnr9qjXkrERCfltgeXe42Ul0pnKIRdykLPvWiY7hGuN0fWeqY5po9lpN9nTnC7RyqM_1929XU-5JKWVJP0RDlHvAkD6CCe12xx35Es0H4eSftpLEVg2T9mXiq2C3W57rld9B_xXgAeIc0Hw4Qs2hM48WLnbB8ifivGN_Cq3cAtwF78WvLW_mwqvBFBGtwRbR5S6pPVIpy-f9G_-0R11nREVh7j8rl33V0FoErpKFFscwC7ttZAUpYHRD0FB5XiMyXVgfXVdyYd2mVg6SlLfhSIpFfSTECyCJsYw14ntUa-T8TNQvQ5AMXiZMMpFG3gFfn9CayPaYUrUM_rqbucVKhG4u_5wTMkBeHxMfNzCZHwYqu6OEjKO9T9w1_wvEFJSV95f136IE56_3AH3DR1Pd6UbiAnpJq92qq2BdsCioi4wHfFpqfqO8-xxIxjGF1KgGajbUaOMoWgO9JfHVFnomxwA2iJAvG-tYUXU_mssv-B6eAwMogg_6Z5r9e1JPALefaRukZd7dqwfuyKI_d62uNNd61uaZGs04xYodZ_9nMNEOH6A6RCH_biGrM2Yb4DCkTM=s600-no?authuser=0",
      username: "sosig69",
    },
    likes: 69,
    views: 1000000,
    comments: 420,
    title: "Cyberpunk 2069 - Cloud Girl",
    image:
      "https://lh3.googleusercontent.com/h1XBvJ9c-C2d4jauE7lBDBtU0FyUqWFsZ33Es970ZL_eeDBiKHMy9e74YLG2l-eQxazdpzbjhgmnFGqMZMpAWHA9ZrB1d9uGQRVwgnu4-J3Y6zEVu_fNQM6B-5MA9AboNoQjlZpynlnCcpdFaz0ev0wYiBExfoPwosb0ExQ04uFwmCZo_hv-G_pYvOfUMzIzqr6rv7fM0orbmo2UGmnQqUL3_XhBWRSfffCVU6k0nYDvsFN7CWyq54AUMet5xSQA5miE_TjgHBw6iuysGFUCwnKR8Y-BBYpw8-vYHos-iD5eM7AlofJRqXTV7ixlQZnhaNlGHXQa2m2Ct_U9I6hDGHTutluzneAHZHtiCNywTm_VEWK3xYKnkvauMHWPrqV738c9qPE0Mzao6zAD_BHISbpSenFKjfvVu4zcehqrAD74bALY25o_Kbh3wWCmTLA9HTRcuxcOurYstL4q6ZpzcnYrxqDn1FebA3W8Ru4gaLdzAE0Y1dWVWiqKuCJWDrYRbkLNmO6Gqh7k6P3NLJckYDZpWIGPgkVu72Ii6rth5M6njT-qdH2cLqtYduth2AIyBn6-BCcVCuo1_PKAejdF5UZsQdWNJNfq65-g9hTYv1CL0PRa88-MWABQkvFRLmojfDQ2EgSFI4-AoxEBw0OmzXizjtCd8XVA0TiTR8CCzpwuRGx3niOgaavhy_LfXrRh0JqkYyInV641ZO_Lyiunajk=w1625-h914-no?authuser=0",
  },
  {
    author: {
      avatar:
        "https://lh3.googleusercontent.com/Rhkbs8Ix0zlhtmZZcir4yEPOudAXGDpNBGZhXdS0zREbADt_gn3oNFL8CjWuG94t2pv1cNo_NaEngPQNoqbNQsmwUICLHbhJSXJJ4bYkoVGpRI1rfCyZmapcre645zHK7bJAnRi5P-iKT9LqmL2Cllnr9qjXkrERCfltgeXe42Ul0pnKIRdykLPvWiY7hGuN0fWeqY5po9lpN9nTnC7RyqM_1929XU-5JKWVJP0RDlHvAkD6CCe12xx35Es0H4eSftpLEVg2T9mXiq2C3W57rld9B_xXgAeIc0Hw4Qs2hM48WLnbB8ifivGN_Cq3cAtwF78WvLW_mwqvBFBGtwRbR5S6pPVIpy-f9G_-0R11nREVh7j8rl33V0FoErpKFFscwC7ttZAUpYHRD0FB5XiMyXVgfXVdyYd2mVg6SlLfhSIpFfSTECyCJsYw14ntUa-T8TNQvQ5AMXiZMMpFG3gFfn9CayPaYUrUM_rqbucVKhG4u_5wTMkBeHxMfNzCZHwYqu6OEjKO9T9w1_wvEFJSV95f136IE56_3AH3DR1Pd6UbiAnpJq92qq2BdsCioi4wHfFpqfqO8-xxIxjGF1KgGajbUaOMoWgO9JfHVFnomxwA2iJAvG-tYUXU_mssv-B6eAwMogg_6Z5r9e1JPALefaRukZd7dqwfuyKI_d62uNNd61uaZGs04xYodZ_9nMNEOH6A6RCH_biGrM2Yb4DCkTM=s600-no?authuser=0",
      username: "sosig69",
    },
    likes: 69,
    views: 1000000,
    comments: 420,
    title: "Cyberpunk 2069 - Kerry Eurodyne",
    image:
      "https://lh3.googleusercontent.com/FV5hBBbfi6B-zHOpwe0EikmpvisdWHo582U1Du4bVme2O5JWwQFM08BY-1nLCsJtGhwRWxa87Q8lirBweWwn7o60Ecvgjt3VDtbdLSq7IdKYZIuQawIh1si4f7lZYWyVknluX_NbeU9B-MGTw_aI0AwhyKrdFBezWbE46LNd-G_DZ9xa9YDBRYlYV3mXPX2NmDTdYLLHy06Zc3HsetvMbr1A7IzArXkx050CCYcRkG2athsxNqMfyNe2VtUPryg_elnE5Hpde5qZWFxA1lzaMAX1ow3KfxdoBPkJfuodaTNS6oBJg89pqfSEqz8E1T3i6-LFvPKEv4_KwCr6QjygaW96e6Sb27bJFZCAQxKQh4SqfunKK6xm6lfCBl2Cw_o_BCNhLY4AtAHr0kOAyQgDqkTpg4uQhqIc1pi0ltU2CMAWXAe5E4IQnmL7qfzIWWlQ81YoInV6ud6hGd_UT194_9OdZdaa5gA5U4RLWQK-usWhh0WAMbr0yQKRtETogSLmhpRq9oweQiBet75t-brlBFtDwbk1Cj3xxSECCsiEDojiSgLSwWUMyOxHv7WW-4ifh-RxlZUubC2OiED2XOX1hk7E2vX19GSYgl2DokAUB20A14KNLk36eueVBaJDaO1OOy6PywojdvDsfb4FyK3d-6ZFirlZGjXCagF_k9hZkzE9JMrGSaaZ4BZXghzUeFXajy6cxLkZDRkuzoMebyU_15Q=w1625-h914-no?authuser=0",
  },
];
