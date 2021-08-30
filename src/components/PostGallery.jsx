import { useState } from "react";
import SortControls from "./SortControls";

const PostGallery = () => {
  const [sort, setSort] = useState(items[0]);
  const handleSort = (e) => {
    setSort(e.target.name);
  };
  return (
    <div className="posts">
      <SortControls items={items} sortBy={sort} handleSort={handleSort} />
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
        "https://lh3.googleusercontent.com/TyvGbyD8IDIfnG-2Q8J7NU91xbqnEGAJIzyKvn_7WcFFdQBKtuWwjbf_HUUz32wNMcamGO-DAZvsTk7d3nHHhlBu7j0pWutyhwLmwe_UIn3nETOLwt_NNY2wr5yFDF6FMegF918rVKv6OIYe3h0OLerGr3cD9AccUcAEpl44AmuKzgPt-g9oYYsn5OkhXalvpb_y9xjDGKQvSe4S3pehXH_dF1gZluJEx3eqn2QiDdus1CkA6tPFZZ6WsB7ENTPH5ZHPJXBvwQeKfqL_eZuNg7h2XLZv1t7aUlFldBtSWGJUWxeYgYHMtH8m7c5hXtgsYng-25lO0-5MewdlqcjnWsM_GEHflqsa7jmMRaeVMmdQYXu6f26EtlR3Tet-tDgiSVfZTweXbBjIBt6yNnQmth8lKRQEjypeMIvthCxNdqYDB_s1AtF-Cnk8QupOeN_zzWu1dA2V0dhdfZBbDHKFNF3mQmj0WJ_iw56cB5gBWnQzvlfut1UyoPpy0fj4N3AUqsAjr4zakzPmLxhAGYC51FYCLiBJQfIa7R8Rj74MHFDKFfBj3tAhtfEukOQ3Kds2b9znpfKaBrKuRl_BfrYt8veTLZPUaJGAbvhgs6ZEGb3aGlmgcnvrdZuqx0njxYzmG12oyP8jEuKlYAdunl6KdYIeK6xO6tIQKGqhjClqwrg7xr2aqh8dWQuhFRYmEykR-g8R2n_JOoR7HKuNE-jYJTk=s600-no?authuser=0",
      username: "sosig69",
    },
    likes: 69,
    views: 1000000,
    comments: 420,
    title: "Cyberpunk 2069 - Kirk Sawyer",
    image:
      "https://lh3.googleusercontent.com/3dtQbslZ6jioJJbSfB3kCEv75bT_KSAkem60diQsiIU2Q-zdLtSxIdt2Th6lf4jfv9P_e2av3M2-e5uOM3Ms2N_N87tpzI0WQDIt5ns0EFmWrASnqG-tE4cTdsRyE4dpPedBh4addL8ZNkwmUbcbLShf6kN2FpjFIcw4L57X152oGUetC73e_9SxF3A-dhUnSCpDWCviqKRYwM7T4aoy-9ox3LSk9aPxv4HrImQ_epOA2Wn2S93SmCV9KyXsq_b7--1SMITn5iE3B0kyWec27LtbmsMsZz9oulvDEhyCY9bN7HS5EvHidyqd-2AdsMVtR7Dwoh1nW5zHV5AVL1eY4EJibytuZjXfgW1mDueM7GTWbPNTET0Vf8xKam5J1iK_zgcy_3JIjzVwHJGYifsH_6M8eoqZuW-p2E0xocU0gErql0oQ_a5V9qbgrwsQlPbpsUbx9NZDssw84W1t8OTZO3G-ULry2wl0tl4orB53Y3U5ONnV3u89MydilZ2lI1WKlt2-Gy_umuDdX2x93BIQP1PFfqpxQoquq2zRukhiRYh1-J8ATvjN9Ec66Bgi0Klf1WI0q0P3WUYWGZiPjfavDy2HBfH6meq8oSKRM-DgIzpF9UroiyP6cCPATjrZL5Z9B5VQ6vi4de7N6Z20DU0Zxfu6pBnqFfucT6ZSU7K9Ni3dsw6nPtoQfVbllxDFdeOPjeNLIjH9gOXQ5MHVW92b5oE=w1625-h914-no?authuser=0",
  },
  {
    author: {
      avatar:
        "https://lh3.googleusercontent.com/TyvGbyD8IDIfnG-2Q8J7NU91xbqnEGAJIzyKvn_7WcFFdQBKtuWwjbf_HUUz32wNMcamGO-DAZvsTk7d3nHHhlBu7j0pWutyhwLmwe_UIn3nETOLwt_NNY2wr5yFDF6FMegF918rVKv6OIYe3h0OLerGr3cD9AccUcAEpl44AmuKzgPt-g9oYYsn5OkhXalvpb_y9xjDGKQvSe4S3pehXH_dF1gZluJEx3eqn2QiDdus1CkA6tPFZZ6WsB7ENTPH5ZHPJXBvwQeKfqL_eZuNg7h2XLZv1t7aUlFldBtSWGJUWxeYgYHMtH8m7c5hXtgsYng-25lO0-5MewdlqcjnWsM_GEHflqsa7jmMRaeVMmdQYXu6f26EtlR3Tet-tDgiSVfZTweXbBjIBt6yNnQmth8lKRQEjypeMIvthCxNdqYDB_s1AtF-Cnk8QupOeN_zzWu1dA2V0dhdfZBbDHKFNF3mQmj0WJ_iw56cB5gBWnQzvlfut1UyoPpy0fj4N3AUqsAjr4zakzPmLxhAGYC51FYCLiBJQfIa7R8Rj74MHFDKFfBj3tAhtfEukOQ3Kds2b9znpfKaBrKuRl_BfrYt8veTLZPUaJGAbvhgs6ZEGb3aGlmgcnvrdZuqx0njxYzmG12oyP8jEuKlYAdunl6KdYIeK6xO6tIQKGqhjClqwrg7xr2aqh8dWQuhFRYmEykR-g8R2n_JOoR7HKuNE-jYJTk=s600-no?authuser=0",
      username: "sosig69",
    },
    likes: 69,
    views: 1000000,
    comments: 420,
    title: "Cyberpunk 2069 - Cloud Girl",
    image:
      "https://lh3.googleusercontent.com/xBVvdT30IGDVZHR6HenYg7dangHOtuhlLxUTVbujxJe5HY98jFEAz_x_3afgTuDDnS7HczNtw1NvWBDzTHvAPqrspe3rpGuILiy0W8-URSTtm0IARnA6mKDJKcvM5ijX5ZTO2ElZNIFauBYaWpRifrPLdau0B-lYqcyzoY1jaF6qZGPXzzLIySYeyBXYfWmnr0N1TEVNBUSMXnSIirHhme_owKSnMT4sToyoU7HtjmUBIZw_6WsZwsl4ToGaDSr1cH92zsiSNYEhOFC4Xp_r06EfC-DwhHzYJEsIfM_w7_DJHJ_qmfZP7opAEGh5jzBWrouSS0AOEZ0X41pVCd_PC0Dhr6UWXjBO0VW2EfxZYDg0RsarBIZbre1RjKLUZ7naK-1Wk0uWK1SY_a5Ox5vbbMAwejXg6uqt-6AbCvYJk3pHFNBR_ou-xYRCbOpv_tLUGnvjXFS8Cfjp8SeuzT4mzecuQzzc3sWgc2uI9FIxCfeLz4dQg1hU6lLgIpjU8YU0-bDoITOIBXTsTGUgFD3aV_qbxwMiJk_FN-YDxJaXUZkk368__xvxlB4Hunaz1miD0XoJI1iN6C5j3IybSH9t2bWmFf5UBdctw7P6jaBC6Wh_0iNTGZEGarGjv3rwn8S68aUehdXzzFdT9iBG3vI9oxqDABIUWomnhfeyDI-kb7VvEUbY4LKWYJlT3rHU7AtVB1qNPZjzAAbIQlmiJj1G__c=w1625-h914-no?authuser=0",
  },
];
