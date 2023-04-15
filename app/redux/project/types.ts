export interface ProjectInitialStateType {
  loading: boolean;
  error: boolean;
  portals: Portal[];
  projects: Portal[];
}

export interface ProjectDataResponse {
  login_id: string;
  portals: Portal[];
}

export interface ProjectsDataResponse {
  login_id: string;
  projects: Portal[];
}

export interface Portal {
  storage_type: string;
  trial_enabled: boolean;
  can_create_project: boolean;
  gmt_time_zone: string;
  project_count?: ProjectCount;
  role: string;
  is_sprints_integrated: boolean;
  avail_user_count: number;
  is_crm_partner: boolean;
  link: Link;
  bug_plan: string;
  can_add_template: boolean;
  locale: Locale;
  IS_LOGHR_RESTRICTEDBY_WORKHR: boolean;
  layouts: Layouts;
  gmt_time_zone_offset: number;
  role_details: RoleDetails;
  new_user_plan: boolean;
  available_projects: number;
  default: boolean;
  portal_owner: PortalOwner;
  id: number;
  bug_plural: string;
  is_new_plan: boolean;
  plan: string;
  percentage_calculation: string;
  settings: Settings;
  avail_client_user_count: number;
  is_tags_available: boolean;
  sprints_project_permission: boolean;
  is_display_taskprefix: boolean;
  image_url: string;
  profile_details: ProfileDetails;
  bug_singular: string;
  login_zpuid: number;
  is_display_projectprefix: boolean;
  project_prefix: string;
  max_user_count: number;
  max_client_user_count: number;
  extensions: Extensions;
  profile_id: number;
  'api&mobile_access': APIMobileAccess;
  name: string;
  id_string: string;
  is_default_tasklayout_type: boolean;
  is_time_log_restriction_enabled: boolean;
  integrations: Integrations;
}

export interface APIMobileAccess {
  has_mobile_access: boolean;
  has_api_access: boolean;
}

export interface Extensions {
  locations: Locations;
}

export interface Locations {
  task_transition: string;
  taskdetails_rightpanel: string;
  app_settings: string;
  issuedetails_rightpanel: string;
  issue_tab: string;
  task_tab: string;
  attachment_picker: string;
  top_band: string;
  blueprint_during: string;
  project_tab: string;
}

export interface Integrations {
  invoice: Invoice;
  people: Invoice;
  meeting: Invoice;
}

export interface Invoice {
  is_enabled: boolean;
}

export interface Layouts {
  projects: Projects;
  tasks: Projects;
}

export interface Projects {
  module_id: string;
}

export interface Link {
  project: Project;
}

export interface Project {
  url: string;
}

export interface Locale {
  country: string;
  code: string;
  language: string;
}

export interface PortalOwner {
  zpuid: string;
  name: string;
  last_name: string;
  id: number;
  first_name: string;
  email: string;
}

export interface ProfileDetails {
  name: string;
  id: number;
  type: number;
}

export interface ProjectCount {
  active: number;
}

export interface RoleDetails {
  name: string;
  id: string;
}

export interface Settings {
  business_hours: BusinessHours;
  street_address?: string;
  country?: string;
  default_dependency_type: string;
  city?: string;
  is_revenue_budget_enabled: boolean;
  timelog_period: TimelogPeriod;
  task_date_format: string;
  holidays: Holiday[];
  is_budget_enabled: boolean;
  state?: string;
  has_budget_permission: boolean;
  working_days: string[];
  is_budget_threshold_enabled: boolean;
  last_sync_time?: string;
  task_duration_type: string;
  time_zone: string;
  startday_of_week: string;
  is_nonbillable_hours_included: boolean;
  timesheet: Timesheet;
  website_url?: string;
  company_name: string;
  date_format: string;
  default_currency?: string;
  postal_code?: string;
}

export interface BusinessHours {
  business_end: number;
  business_start: number;
}

export interface Holiday {
  date: string;
  name: string;
  id: string;
}

export interface TimelogPeriod {
  isEditLogRestricted: boolean;
  log_future_time: LogFutureTime;
  log_past_time: LogPastTime;
}

export interface LogFutureTime {
  allowed: boolean;
}

export interface LogPastTime {
  customize?: Customize;
  allowed?: boolean;
}

export interface Customize {
  unit: string;
  value: string;
}

export interface Timesheet {
  default_billing_status: string;
  is_timesheet_approval_enabled: boolean;
}

export interface ProListProps {
  portalId?: string | undefined;
}

export interface CreateProjectProps {
  name: string;
  portalId?: string | undefined;
  owner?: string | undefined; //zoho user id
  description?: string;
  template_id?: number;
  start_date?: string;
  end_date?: string; // MM-DD-YYY
  strict_project?: string; //The value for strict projects must be either 1 or 2. (1 = Not strict, 2 = Strict)
  field_id?: string; //UDF_CHAR1   UDF_MULTI1   UDF_MULTIUSER1;
  budget_type?: number;
  budget_value?: number;
  threshold?: number;
  currency?: string; //The default currency of your project. Example: USD, INR, etc.
  project_rate?: number;
  bill_status?: string; //Acceptable values: Billable and Non billable.
  public?: boolean;
  group_id?: number;
}
