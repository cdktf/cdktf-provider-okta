// https://www.terraform.io/docs/providers/okta/r/swa_app
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SwaAppConfig extends cdktf.TerraformMetaArguments {
  /**
  * Custom error page URL
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#accessibility_error_redirect_url SwaApp#accessibility_error_redirect_url}
  */
  readonly accessibilityErrorRedirectUrl?: string;
  /**
  * Custom login page URL
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#accessibility_login_redirect_url SwaApp#accessibility_login_redirect_url}
  */
  readonly accessibilityLoginRedirectUrl?: string;
  /**
  * Enable self service
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#accessibility_self_service SwaApp#accessibility_self_service}
  */
  readonly accessibilitySelfService?: boolean | cdktf.IResolvable;
  /**
  * Application notes for admins.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#admin_note SwaApp#admin_note}
  */
  readonly adminNote?: string;
  /**
  * Displays specific appLinks for the app
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#app_links_json SwaApp#app_links_json}
  */
  readonly appLinksJson?: string;
  /**
  * Display auto submit toolbar
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#auto_submit_toolbar SwaApp#auto_submit_toolbar}
  */
  readonly autoSubmitToolbar?: boolean | cdktf.IResolvable;
  /**
  * Login button field
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#button_field SwaApp#button_field}
  */
  readonly buttonField?: string;
  /**
  * CSS selector for the checkbox
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#checkbox SwaApp#checkbox}
  */
  readonly checkbox?: string;
  /**
  * Application notes for end users.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#enduser_note SwaApp#enduser_note}
  */
  readonly enduserNote?: string;
  /**
  * Groups associated with the application
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#groups SwaApp#groups}
  */
  readonly groups?: string[];
  /**
  * Do not display application icon on mobile app
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#hide_ios SwaApp#hide_ios}
  */
  readonly hideIos?: boolean | cdktf.IResolvable;
  /**
  * Do not display application icon to users
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#hide_web SwaApp#hide_web}
  */
  readonly hideWeb?: boolean | cdktf.IResolvable;
  /**
  * Pretty name of app.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#label SwaApp#label}
  */
  readonly label: string;
  /**
  * Local path to logo of the application.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#logo SwaApp#logo}
  */
  readonly logo?: string;
  /**
  * Login password field
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#password_field SwaApp#password_field}
  */
  readonly passwordField?: string;
  /**
  * Preconfigured app name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#preconfigured_app SwaApp#preconfigured_app}
  */
  readonly preconfiguredApp?: string;
  /**
  * If going to the login page URL redirects to another page, then enter that URL here
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#redirect_url SwaApp#redirect_url}
  */
  readonly redirectUrl?: string;
  /**
  * Ignore groups sync. This is a temporary solution until 'groups' field is supported in all the app-like resources
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#skip_groups SwaApp#skip_groups}
  */
  readonly skipGroups?: boolean | cdktf.IResolvable;
  /**
  * Ignore users sync. This is a temporary solution until 'users' field is supported in all the app-like resources
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#skip_users SwaApp#skip_users}
  */
  readonly skipUsers?: boolean | cdktf.IResolvable;
  /**
  * Status of application.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#status SwaApp#status}
  */
  readonly status?: string;
  /**
  * Login URL
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#url SwaApp#url}
  */
  readonly url?: string;
  /**
  * A regex that further restricts URL to the specified regex
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#url_regex SwaApp#url_regex}
  */
  readonly urlRegex?: string;
  /**
  * Username template
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#user_name_template SwaApp#user_name_template}
  */
  readonly userNameTemplate?: string;
  /**
  * Push username on update
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#user_name_template_push_status SwaApp#user_name_template_push_status}
  */
  readonly userNameTemplatePushStatus?: string;
  /**
  * Username template suffix
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#user_name_template_suffix SwaApp#user_name_template_suffix}
  */
  readonly userNameTemplateSuffix?: string;
  /**
  * Username template type
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#user_name_template_type SwaApp#user_name_template_type}
  */
  readonly userNameTemplateType?: string;
  /**
  * Login username field
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#username_field SwaApp#username_field}
  */
  readonly usernameField?: string;
  /**
  * users block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#users SwaApp#users}
  */
  readonly users?: SwaAppUsers[] | cdktf.IResolvable;
}
export interface SwaAppUsers {
  /**
  * User ID.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#id SwaApp#id}
  */
  readonly id?: string;
  /**
  * Password for user application.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#password SwaApp#password}
  */
  readonly password?: string;
  /**
  * Username for user.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#username SwaApp#username}
  */
  readonly username?: string;
}

export function swaAppUsersToTerraform(struct?: SwaAppUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/okta/r/swa_app okta_swa_app}
*/
export class SwaApp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_swa_app";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/okta/r/swa_app okta_swa_app} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SwaAppConfig
  */
  public constructor(scope: Construct, id: string, config: SwaAppConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_swa_app',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '3.20.8',
        providerVersionConstraint: '~> 3.20.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accessibilityErrorRedirectUrl = config.accessibilityErrorRedirectUrl;
    this._accessibilityLoginRedirectUrl = config.accessibilityLoginRedirectUrl;
    this._accessibilitySelfService = config.accessibilitySelfService;
    this._adminNote = config.adminNote;
    this._appLinksJson = config.appLinksJson;
    this._autoSubmitToolbar = config.autoSubmitToolbar;
    this._buttonField = config.buttonField;
    this._checkbox = config.checkbox;
    this._enduserNote = config.enduserNote;
    this._groups = config.groups;
    this._hideIos = config.hideIos;
    this._hideWeb = config.hideWeb;
    this._label = config.label;
    this._logo = config.logo;
    this._passwordField = config.passwordField;
    this._preconfiguredApp = config.preconfiguredApp;
    this._redirectUrl = config.redirectUrl;
    this._skipGroups = config.skipGroups;
    this._skipUsers = config.skipUsers;
    this._status = config.status;
    this._url = config.url;
    this._urlRegex = config.urlRegex;
    this._userNameTemplate = config.userNameTemplate;
    this._userNameTemplatePushStatus = config.userNameTemplatePushStatus;
    this._userNameTemplateSuffix = config.userNameTemplateSuffix;
    this._userNameTemplateType = config.userNameTemplateType;
    this._usernameField = config.usernameField;
    this._users = config.users;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accessibility_error_redirect_url - computed: false, optional: true, required: false
  private _accessibilityErrorRedirectUrl?: string; 
  public get accessibilityErrorRedirectUrl() {
    return this.getStringAttribute('accessibility_error_redirect_url');
  }
  public set accessibilityErrorRedirectUrl(value: string) {
    this._accessibilityErrorRedirectUrl = value;
  }
  public resetAccessibilityErrorRedirectUrl() {
    this._accessibilityErrorRedirectUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessibilityErrorRedirectUrlInput() {
    return this._accessibilityErrorRedirectUrl;
  }

  // accessibility_login_redirect_url - computed: false, optional: true, required: false
  private _accessibilityLoginRedirectUrl?: string; 
  public get accessibilityLoginRedirectUrl() {
    return this.getStringAttribute('accessibility_login_redirect_url');
  }
  public set accessibilityLoginRedirectUrl(value: string) {
    this._accessibilityLoginRedirectUrl = value;
  }
  public resetAccessibilityLoginRedirectUrl() {
    this._accessibilityLoginRedirectUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessibilityLoginRedirectUrlInput() {
    return this._accessibilityLoginRedirectUrl;
  }

  // accessibility_self_service - computed: false, optional: true, required: false
  private _accessibilitySelfService?: boolean | cdktf.IResolvable; 
  public get accessibilitySelfService() {
    return this.getBooleanAttribute('accessibility_self_service');
  }
  public set accessibilitySelfService(value: boolean | cdktf.IResolvable) {
    this._accessibilitySelfService = value;
  }
  public resetAccessibilitySelfService() {
    this._accessibilitySelfService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessibilitySelfServiceInput() {
    return this._accessibilitySelfService;
  }

  // admin_note - computed: false, optional: true, required: false
  private _adminNote?: string; 
  public get adminNote() {
    return this.getStringAttribute('admin_note');
  }
  public set adminNote(value: string) {
    this._adminNote = value;
  }
  public resetAdminNote() {
    this._adminNote = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminNoteInput() {
    return this._adminNote;
  }

  // app_links_json - computed: false, optional: true, required: false
  private _appLinksJson?: string; 
  public get appLinksJson() {
    return this.getStringAttribute('app_links_json');
  }
  public set appLinksJson(value: string) {
    this._appLinksJson = value;
  }
  public resetAppLinksJson() {
    this._appLinksJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appLinksJsonInput() {
    return this._appLinksJson;
  }

  // auto_submit_toolbar - computed: false, optional: true, required: false
  private _autoSubmitToolbar?: boolean | cdktf.IResolvable; 
  public get autoSubmitToolbar() {
    return this.getBooleanAttribute('auto_submit_toolbar');
  }
  public set autoSubmitToolbar(value: boolean | cdktf.IResolvable) {
    this._autoSubmitToolbar = value;
  }
  public resetAutoSubmitToolbar() {
    this._autoSubmitToolbar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoSubmitToolbarInput() {
    return this._autoSubmitToolbar;
  }

  // button_field - computed: false, optional: true, required: false
  private _buttonField?: string; 
  public get buttonField() {
    return this.getStringAttribute('button_field');
  }
  public set buttonField(value: string) {
    this._buttonField = value;
  }
  public resetButtonField() {
    this._buttonField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buttonFieldInput() {
    return this._buttonField;
  }

  // checkbox - computed: false, optional: true, required: false
  private _checkbox?: string; 
  public get checkbox() {
    return this.getStringAttribute('checkbox');
  }
  public set checkbox(value: string) {
    this._checkbox = value;
  }
  public resetCheckbox() {
    this._checkbox = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkboxInput() {
    return this._checkbox;
  }

  // enduser_note - computed: false, optional: true, required: false
  private _enduserNote?: string; 
  public get enduserNote() {
    return this.getStringAttribute('enduser_note');
  }
  public set enduserNote(value: string) {
    this._enduserNote = value;
  }
  public resetEnduserNote() {
    this._enduserNote = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enduserNoteInput() {
    return this._enduserNote;
  }

  // groups - computed: false, optional: true, required: false
  private _groups?: string[]; 
  public get groups() {
    return cdktf.Fn.tolist(this.getListAttribute('groups'));
  }
  public set groups(value: string[]) {
    this._groups = value;
  }
  public resetGroups() {
    this._groups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups;
  }

  // hide_ios - computed: false, optional: true, required: false
  private _hideIos?: boolean | cdktf.IResolvable; 
  public get hideIos() {
    return this.getBooleanAttribute('hide_ios');
  }
  public set hideIos(value: boolean | cdktf.IResolvable) {
    this._hideIos = value;
  }
  public resetHideIos() {
    this._hideIos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hideIosInput() {
    return this._hideIos;
  }

  // hide_web - computed: false, optional: true, required: false
  private _hideWeb?: boolean | cdktf.IResolvable; 
  public get hideWeb() {
    return this.getBooleanAttribute('hide_web');
  }
  public set hideWeb(value: boolean | cdktf.IResolvable) {
    this._hideWeb = value;
  }
  public resetHideWeb() {
    this._hideWeb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hideWebInput() {
    return this._hideWeb;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // label - computed: false, optional: false, required: true
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // logo - computed: false, optional: true, required: false
  private _logo?: string; 
  public get logo() {
    return this.getStringAttribute('logo');
  }
  public set logo(value: string) {
    this._logo = value;
  }
  public resetLogo() {
    this._logo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoInput() {
    return this._logo;
  }

  // logo_url - computed: true, optional: false, required: false
  public get logoUrl() {
    return this.getStringAttribute('logo_url');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // password_field - computed: false, optional: true, required: false
  private _passwordField?: string; 
  public get passwordField() {
    return this.getStringAttribute('password_field');
  }
  public set passwordField(value: string) {
    this._passwordField = value;
  }
  public resetPasswordField() {
    this._passwordField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordFieldInput() {
    return this._passwordField;
  }

  // preconfigured_app - computed: false, optional: true, required: false
  private _preconfiguredApp?: string; 
  public get preconfiguredApp() {
    return this.getStringAttribute('preconfigured_app');
  }
  public set preconfiguredApp(value: string) {
    this._preconfiguredApp = value;
  }
  public resetPreconfiguredApp() {
    this._preconfiguredApp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preconfiguredAppInput() {
    return this._preconfiguredApp;
  }

  // redirect_url - computed: false, optional: true, required: false
  private _redirectUrl?: string; 
  public get redirectUrl() {
    return this.getStringAttribute('redirect_url');
  }
  public set redirectUrl(value: string) {
    this._redirectUrl = value;
  }
  public resetRedirectUrl() {
    this._redirectUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectUrlInput() {
    return this._redirectUrl;
  }

  // sign_on_mode - computed: true, optional: false, required: false
  public get signOnMode() {
    return this.getStringAttribute('sign_on_mode');
  }

  // skip_groups - computed: false, optional: true, required: false
  private _skipGroups?: boolean | cdktf.IResolvable; 
  public get skipGroups() {
    return this.getBooleanAttribute('skip_groups');
  }
  public set skipGroups(value: boolean | cdktf.IResolvable) {
    this._skipGroups = value;
  }
  public resetSkipGroups() {
    this._skipGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipGroupsInput() {
    return this._skipGroups;
  }

  // skip_users - computed: false, optional: true, required: false
  private _skipUsers?: boolean | cdktf.IResolvable; 
  public get skipUsers() {
    return this.getBooleanAttribute('skip_users');
  }
  public set skipUsers(value: boolean | cdktf.IResolvable) {
    this._skipUsers = value;
  }
  public resetSkipUsers() {
    this._skipUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipUsersInput() {
    return this._skipUsers;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // url_regex - computed: false, optional: true, required: false
  private _urlRegex?: string; 
  public get urlRegex() {
    return this.getStringAttribute('url_regex');
  }
  public set urlRegex(value: string) {
    this._urlRegex = value;
  }
  public resetUrlRegex() {
    this._urlRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlRegexInput() {
    return this._urlRegex;
  }

  // user_name_template - computed: false, optional: true, required: false
  private _userNameTemplate?: string; 
  public get userNameTemplate() {
    return this.getStringAttribute('user_name_template');
  }
  public set userNameTemplate(value: string) {
    this._userNameTemplate = value;
  }
  public resetUserNameTemplate() {
    this._userNameTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameTemplateInput() {
    return this._userNameTemplate;
  }

  // user_name_template_push_status - computed: false, optional: true, required: false
  private _userNameTemplatePushStatus?: string; 
  public get userNameTemplatePushStatus() {
    return this.getStringAttribute('user_name_template_push_status');
  }
  public set userNameTemplatePushStatus(value: string) {
    this._userNameTemplatePushStatus = value;
  }
  public resetUserNameTemplatePushStatus() {
    this._userNameTemplatePushStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameTemplatePushStatusInput() {
    return this._userNameTemplatePushStatus;
  }

  // user_name_template_suffix - computed: false, optional: true, required: false
  private _userNameTemplateSuffix?: string; 
  public get userNameTemplateSuffix() {
    return this.getStringAttribute('user_name_template_suffix');
  }
  public set userNameTemplateSuffix(value: string) {
    this._userNameTemplateSuffix = value;
  }
  public resetUserNameTemplateSuffix() {
    this._userNameTemplateSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameTemplateSuffixInput() {
    return this._userNameTemplateSuffix;
  }

  // user_name_template_type - computed: false, optional: true, required: false
  private _userNameTemplateType?: string; 
  public get userNameTemplateType() {
    return this.getStringAttribute('user_name_template_type');
  }
  public set userNameTemplateType(value: string) {
    this._userNameTemplateType = value;
  }
  public resetUserNameTemplateType() {
    this._userNameTemplateType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameTemplateTypeInput() {
    return this._userNameTemplateType;
  }

  // username_field - computed: false, optional: true, required: false
  private _usernameField?: string; 
  public get usernameField() {
    return this.getStringAttribute('username_field');
  }
  public set usernameField(value: string) {
    this._usernameField = value;
  }
  public resetUsernameField() {
    this._usernameField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameFieldInput() {
    return this._usernameField;
  }

  // users - computed: false, optional: true, required: false
  private _users?: SwaAppUsers[] | cdktf.IResolvable; 
  public get users() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('users')));
  }
  public set users(value: SwaAppUsers[] | cdktf.IResolvable) {
    this._users = value;
  }
  public resetUsers() {
    this._users = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accessibility_error_redirect_url: cdktf.stringToTerraform(this._accessibilityErrorRedirectUrl),
      accessibility_login_redirect_url: cdktf.stringToTerraform(this._accessibilityLoginRedirectUrl),
      accessibility_self_service: cdktf.booleanToTerraform(this._accessibilitySelfService),
      admin_note: cdktf.stringToTerraform(this._adminNote),
      app_links_json: cdktf.stringToTerraform(this._appLinksJson),
      auto_submit_toolbar: cdktf.booleanToTerraform(this._autoSubmitToolbar),
      button_field: cdktf.stringToTerraform(this._buttonField),
      checkbox: cdktf.stringToTerraform(this._checkbox),
      enduser_note: cdktf.stringToTerraform(this._enduserNote),
      groups: cdktf.listMapper(cdktf.stringToTerraform)(this._groups),
      hide_ios: cdktf.booleanToTerraform(this._hideIos),
      hide_web: cdktf.booleanToTerraform(this._hideWeb),
      label: cdktf.stringToTerraform(this._label),
      logo: cdktf.stringToTerraform(this._logo),
      password_field: cdktf.stringToTerraform(this._passwordField),
      preconfigured_app: cdktf.stringToTerraform(this._preconfiguredApp),
      redirect_url: cdktf.stringToTerraform(this._redirectUrl),
      skip_groups: cdktf.booleanToTerraform(this._skipGroups),
      skip_users: cdktf.booleanToTerraform(this._skipUsers),
      status: cdktf.stringToTerraform(this._status),
      url: cdktf.stringToTerraform(this._url),
      url_regex: cdktf.stringToTerraform(this._urlRegex),
      user_name_template: cdktf.stringToTerraform(this._userNameTemplate),
      user_name_template_push_status: cdktf.stringToTerraform(this._userNameTemplatePushStatus),
      user_name_template_suffix: cdktf.stringToTerraform(this._userNameTemplateSuffix),
      user_name_template_type: cdktf.stringToTerraform(this._userNameTemplateType),
      username_field: cdktf.stringToTerraform(this._usernameField),
      users: cdktf.listMapper(swaAppUsersToTerraform)(this._users),
    };
  }
}
