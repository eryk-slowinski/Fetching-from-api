export interface IPage<T> {
  count?: number;
  next?: string;
  prev?: string;
  results?: T[];
}

export interface JobListing {
  id?: number;
  job?: Job;
  created_at?: string;
  updated_at?: string;
  global_background_rgba?: string;
  global_text_style?: string;
  global_divider_status?: boolean;
  job_listing_header?: JobListingHeader;
  publisher_published_at?: string;
  publisher_modified_at?: string;
  job_listing_description?: JobListingDescription;
  job_listing_unit_description?: JobListingUnitDescription;
  youtube_video_ids?: string;
  vimeo_video_ids?: string;
  image_urls?: string[];
}

export interface Job {
  id?: number;
  due_date?: string;
  title?: string;
  unit?: Unit;
  address?: string;
  poster?: Poster;
  position_function_id?: number;
  position_function?: PositionFunction;
  country_long_name?: string;
  administrative_area_level_1?: string;
  administrative_area_level_2?: string;
  postal_town?: string;
  employment_type?: string;
  get_share_url?: string;
  apply_url?: string;
}

export interface Unit {
  id?: number;
  name?: string;
  display_name?: string;
  address?: string;
  logo_url?: string;
}

export interface UserProfile {
  id?: number;
  profile_picture_url?: string;
}

export interface Poster {
  id?: number;
  username?: string;
  first_name?: string;
  last_name?: string;
  full_name?: string;
  user_profile?: UserProfile;
}

export interface PositionFunction {
  id?: number;
  name_en?: string;
  name_nb?: string;
  children?: PositionFunction[];
}

export interface JobListingHeader {
  id?: number;
  job_listing_id?: number;
  background_image_url?: string;
  background_image_thumbnail?: string;
  background_rgba?: string;
  font_rgba?: string;
  title?: string;
  title_rich?: string;
  subtitle?: string;
  subtitle_rich?: string;
  created_at?: string;
  updated_at?: string;
}

export interface JobListingDescription {
  id?: number;
  job_listing_id?: number;
  background_image_url?: string;
  background_image_thumbnail?: string;
  background_rgba?: string;
  font_rgba?: string;
  title?: string;
  title_rich?: string;
  subtitle?: string;
  subtitle_rich?: string;
  created_at?: string;
  updated_at?: string;
}

export interface JobListingUnitDescription {
  id?: number;
  job_listing_id?: number;
  background_image_url?: string;
  background_image_thumbnail?: string;
  background_rgba?: string;
  font_rgba?: string;
  title?: string;
  title_rich?: string;
  subtitle?: string;
  subtitle_rich?: string;
  created_at?: string;
  updated_at?: string;
}
