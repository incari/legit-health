type UserData = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

type SupportInfo = {
  url: string;
  text: string;
};

type ApiResponse = {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: UserData[];
  support: SupportInfo;
};

export type { ApiResponse, UserData };
