import api from "./api";

export type EpisodesType = {
  id: number;
  name: string;
  synopsis: string;
  order: number;
  videoUrl: string;
  secondsLong: number;
};

export type CourseType = {
  id: number;
  name: string;
  thumnailUrl: string;
  synopsis: string;
  episodes?: EpisodesType[];
};

const courseService = {
  getNewestCourse: async () => {
    const res = await api.get("/courses/newest").catch((error) => {
      console.log(error.response.data.message);

      return error.response;
    });

    return res;
  },
};

export default courseService;
