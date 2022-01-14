// https://www.terraform.io/docs/providers/okta/r/saml_app
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SamlAppConfig extends cdktf.TerraformMetaArguments {
  /**
  * Custom error page URL
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#accessibility_error_redirect_url SamlApp#accessibility_error_redirect_url}
  */
  readonly accessibilityErrorRedirectUrl?: string;
  /**
  * Custom login page URL
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#accessibility_login_redirect_url SamlApp#accessibility_login_redirect_url}
  */
  readonly accessibilityLoginRedirectUrl?: string;
  /**
  * Enable self service
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#accessibility_self_service SamlApp#accessibility_self_service}
  */
  readonly accessibilitySelfService?: boolean | cdktf.IResolvable;
  /**
  * List of ACS endpoints for this SAML application
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#acs_endpoints SamlApp#acs_endpoints}
  */
  readonly acsEndpoints?: string[];
  /**
  * Application notes for admins.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#admin_note SamlApp#admin_note}
  */
  readonly adminNote?: string;
  /**
  * Displays specific appLinks for the app
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#app_links_json SamlApp#app_links_json}
  */
  readonly appLinksJson?: string;
  /**
  * Application settings in JSON format
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#app_settings_json SamlApp#app_settings_json}
  */
  readonly appSettingsJson?: string;
  /**
  * Determines whether the SAML assertion is digitally signed
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#assertion_signed SamlApp#assertion_signed}
  */
  readonly assertionSigned?: boolean | cdktf.IResolvable;
  /**
  * Audience Restriction
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#audience SamlApp#audience}
  */
  readonly audience?: string;
  /**
  * Identifies the SAML authentication context class for the assertion’s authentication statement
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#authn_context_class_ref SamlApp#authn_context_class_ref}
  */
  readonly authnContextClassRef?: string;
  /**
  * Display auto submit toolbar
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#auto_submit_toolbar SamlApp#auto_submit_toolbar}
  */
  readonly autoSubmitToolbar?: boolean | cdktf.IResolvable;
  /**
  * Identifies a specific application resource in an IDP initiated SSO scenario.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#default_relay_state SamlApp#default_relay_state}
  */
  readonly defaultRelayState?: string;
  /**
  * Identifies the location where the SAML response is intended to be sent inside of the SAML assertion
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#destination SamlApp#destination}
  */
  readonly destination?: string;
  /**
  * Determines the digest algorithm used to digitally sign the SAML assertion and response
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#digest_algorithm SamlApp#digest_algorithm}
  */
  readonly digestAlgorithm?: string;
  /**
  * Application notes for end users.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#enduser_note SamlApp#enduser_note}
  */
  readonly enduserNote?: string;
  /**
  * features to enable
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#features SamlApp#features}
  */
  readonly features?: string[];
  /**
  * Groups associated with the application
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#groups SamlApp#groups}
  */
  readonly groups?: string[];
  /**
  * Do not display application icon on mobile app
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#hide_ios SamlApp#hide_ios}
  */
  readonly hideIos?: boolean | cdktf.IResolvable;
  /**
  * Do not display application icon to users
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#hide_web SamlApp#hide_web}
  */
  readonly hideWeb?: boolean | cdktf.IResolvable;
  /**
  * Prompt user to re-authenticate if SP asks for it
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#honor_force_authn SamlApp#honor_force_authn}
  */
  readonly honorForceAuthn?: boolean | cdktf.IResolvable;
  /**
  * SAML issuer ID
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#idp_issuer SamlApp#idp_issuer}
  */
  readonly idpIssuer?: string;
  /**
  * *Early Access Property*. Enable Federation Broker Mode.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#implicit_assignment SamlApp#implicit_assignment}
  */
  readonly implicitAssignment?: boolean | cdktf.IResolvable;
  /**
  * Saml Inline Hook setting
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#inline_hook_id SamlApp#inline_hook_id}
  */
  readonly inlineHookId?: string;
  /**
  * Certificate name. This modulates the rotation of keys. New name == new key.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#key_name SamlApp#key_name}
  */
  readonly keyName?: string;
  /**
  * Number of years the certificate is valid.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#key_years_valid SamlApp#key_years_valid}
  */
  readonly keyYearsValid?: number;
  /**
  * Pretty name of app.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#label SamlApp#label}
  */
  readonly label: string;
  /**
  * Local path to logo of the application.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#logo SamlApp#logo}
  */
  readonly logo?: string;
  /**
  * Name of preexisting SAML application. For instance 'slack'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#preconfigured_app SamlApp#preconfigured_app}
  */
  readonly preconfiguredApp?: string;
  /**
  * The location where the app may present the SAML assertion
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#recipient SamlApp#recipient}
  */
  readonly recipient?: string;
  /**
  * Denotes whether the request is compressed or not.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#request_compressed SamlApp#request_compressed}
  */
  readonly requestCompressed?: boolean | cdktf.IResolvable;
  /**
  * Determines whether the SAML auth response message is digitally signed
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#response_signed SamlApp#response_signed}
  */
  readonly responseSigned?: boolean | cdktf.IResolvable;
  /**
  * SAML version for the app's sign-on mode
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#saml_version SamlApp#saml_version}
  */
  readonly samlVersion?: string;
  /**
  * Signature algorithm used ot digitally sign the assertion and response
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#signature_algorithm SamlApp#signature_algorithm}
  */
  readonly signatureAlgorithm?: string;
  /**
  * x509 encoded certificate that the Service Provider uses to sign Single Logout requests
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#single_logout_certificate SamlApp#single_logout_certificate}
  */
  readonly singleLogoutCertificate?: string;
  /**
  * The issuer of the Service Provider that generates the Single Logout request
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#single_logout_issuer SamlApp#single_logout_issuer}
  */
  readonly singleLogoutIssuer?: string;
  /**
  * The location where the logout response is sent
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#single_logout_url SamlApp#single_logout_url}
  */
  readonly singleLogoutUrl?: string;
  /**
  * Ignore groups sync. This is a temporary solution until 'groups' field is supported in all the app-like resources
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#skip_groups SamlApp#skip_groups}
  */
  readonly skipGroups?: boolean | cdktf.IResolvable;
  /**
  * Ignore users sync. This is a temporary solution until 'users' field is supported in all the app-like resources
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#skip_users SamlApp#skip_users}
  */
  readonly skipUsers?: boolean | cdktf.IResolvable;
  /**
  * SAML SP issuer ID
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#sp_issuer SamlApp#sp_issuer}
  */
  readonly spIssuer?: string;
  /**
  * Single Sign On URL
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#sso_url SamlApp#sso_url}
  */
  readonly ssoUrl?: string;
  /**
  * Status of application.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#status SamlApp#status}
  */
  readonly status?: string;
  /**
  * Identifies the SAML processing rules.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#subject_name_id_format SamlApp#subject_name_id_format}
  */
  readonly subjectNameIdFormat?: string;
  /**
  * Template for app user's username when a user is assigned to the app
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#subject_name_id_template SamlApp#subject_name_id_template}
  */
  readonly subjectNameIdTemplate?: string;
  /**
  * Username template
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#user_name_template SamlApp#user_name_template}
  */
  readonly userNameTemplate?: string;
  /**
  * Push username on update
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#user_name_template_push_status SamlApp#user_name_template_push_status}
  */
  readonly userNameTemplatePushStatus?: string;
  /**
  * Username template suffix
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#user_name_template_suffix SamlApp#user_name_template_suffix}
  */
  readonly userNameTemplateSuffix?: string;
  /**
  * Username template type
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#user_name_template_type SamlApp#user_name_template_type}
  */
  readonly userNameTemplateType?: string;
  /**
  * attribute_statements block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#attribute_statements SamlApp#attribute_statements}
  */
  readonly attributeStatements?: SamlAppAttributeStatements[];
  /**
  * users block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#users SamlApp#users}
  */
  readonly users?: SamlAppUsers[];
}
export interface SamlAppAttributeStatements {
  /**
  * Type of group attribute filter
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#filter_type SamlApp#filter_type}
  */
  readonly filterType?: string;
  /**
  * Filter value to use
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#filter_value SamlApp#filter_value}
  */
  readonly filterValue?: string;
  /**
  * The reference name of the attribute statement
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#name SamlApp#name}
  */
  readonly name: string;
  /**
  * The name format of the attribute
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#namespace SamlApp#namespace}
  */
  readonly namespace?: string;
  /**
  * The type of attribute statements object
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#type SamlApp#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#values SamlApp#values}
  */
  readonly values?: string[];
}

export function samlAppAttributeStatementsToTerraform(struct?: SamlAppAttributeStatements): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter_type: cdktf.stringToTerraform(struct!.filterType),
    filter_value: cdktf.stringToTerraform(struct!.filterValue),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    type: cdktf.stringToTerraform(struct!.type),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface SamlAppUsers {
  /**
  * User ID.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#id SamlApp#id}
  */
  readonly id?: string;
  /**
  * Password for user application.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#password SamlApp#password}
  */
  readonly password?: string;
  /**
  * Username for user.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/saml_app#username SamlApp#username}
  */
  readonly username?: string;
}

export function samlAppUsersToTerraform(struct?: SamlAppUsers): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
* Represents a {@link https://www.terraform.io/docs/providers/okta/r/saml_app okta_saml_app}
*/
export class SamlApp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "okta_saml_app";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/okta/r/saml_app okta_saml_app} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SamlAppConfig
  */
  public constructor(scope: Construct, id: string, config: SamlAppConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_saml_app',
      terraformGeneratorMetadata: {
        providerName: 'okta'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accessibilityErrorRedirectUrl = config.accessibilityErrorRedirectUrl;
    this._accessibilityLoginRedirectUrl = config.accessibilityLoginRedirectUrl;
    this._accessibilitySelfService = config.accessibilitySelfService;
    this._acsEndpoints = config.acsEndpoints;
    this._adminNote = config.adminNote;
    this._appLinksJson = config.appLinksJson;
    this._appSettingsJson = config.appSettingsJson;
    this._assertionSigned = config.assertionSigned;
    this._audience = config.audience;
    this._authnContextClassRef = config.authnContextClassRef;
    this._autoSubmitToolbar = config.autoSubmitToolbar;
    this._defaultRelayState = config.defaultRelayState;
    this._destination = config.destination;
    this._digestAlgorithm = config.digestAlgorithm;
    this._enduserNote = config.enduserNote;
    this._features = config.features;
    this._groups = config.groups;
    this._hideIos = config.hideIos;
    this._hideWeb = config.hideWeb;
    this._honorForceAuthn = config.honorForceAuthn;
    this._idpIssuer = config.idpIssuer;
    this._implicitAssignment = config.implicitAssignment;
    this._inlineHookId = config.inlineHookId;
    this._keyName = config.keyName;
    this._keyYearsValid = config.keyYearsValid;
    this._label = config.label;
    this._logo = config.logo;
    this._preconfiguredApp = config.preconfiguredApp;
    this._recipient = config.recipient;
    this._requestCompressed = config.requestCompressed;
    this._responseSigned = config.responseSigned;
    this._samlVersion = config.samlVersion;
    this._signatureAlgorithm = config.signatureAlgorithm;
    this._singleLogoutCertificate = config.singleLogoutCertificate;
    this._singleLogoutIssuer = config.singleLogoutIssuer;
    this._singleLogoutUrl = config.singleLogoutUrl;
    this._skipGroups = config.skipGroups;
    this._skipUsers = config.skipUsers;
    this._spIssuer = config.spIssuer;
    this._ssoUrl = config.ssoUrl;
    this._status = config.status;
    this._subjectNameIdFormat = config.subjectNameIdFormat;
    this._subjectNameIdTemplate = config.subjectNameIdTemplate;
    this._userNameTemplate = config.userNameTemplate;
    this._userNameTemplatePushStatus = config.userNameTemplatePushStatus;
    this._userNameTemplateSuffix = config.userNameTemplateSuffix;
    this._userNameTemplateType = config.userNameTemplateType;
    this._attributeStatements = config.attributeStatements;
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
    return this.getBooleanAttribute('accessibility_self_service') as any;
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

  // acs_endpoints - computed: false, optional: true, required: false
  private _acsEndpoints?: string[]; 
  public get acsEndpoints() {
    return this.getListAttribute('acs_endpoints');
  }
  public set acsEndpoints(value: string[]) {
    this._acsEndpoints = value;
  }
  public resetAcsEndpoints() {
    this._acsEndpoints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acsEndpointsInput() {
    return this._acsEndpoints;
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

  // app_settings_json - computed: false, optional: true, required: false
  private _appSettingsJson?: string; 
  public get appSettingsJson() {
    return this.getStringAttribute('app_settings_json');
  }
  public set appSettingsJson(value: string) {
    this._appSettingsJson = value;
  }
  public resetAppSettingsJson() {
    this._appSettingsJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appSettingsJsonInput() {
    return this._appSettingsJson;
  }

  // assertion_signed - computed: false, optional: true, required: false
  private _assertionSigned?: boolean | cdktf.IResolvable; 
  public get assertionSigned() {
    return this.getBooleanAttribute('assertion_signed') as any;
  }
  public set assertionSigned(value: boolean | cdktf.IResolvable) {
    this._assertionSigned = value;
  }
  public resetAssertionSigned() {
    this._assertionSigned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assertionSignedInput() {
    return this._assertionSigned;
  }

  // audience - computed: false, optional: true, required: false
  private _audience?: string; 
  public get audience() {
    return this.getStringAttribute('audience');
  }
  public set audience(value: string) {
    this._audience = value;
  }
  public resetAudience() {
    this._audience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceInput() {
    return this._audience;
  }

  // authn_context_class_ref - computed: false, optional: true, required: false
  private _authnContextClassRef?: string; 
  public get authnContextClassRef() {
    return this.getStringAttribute('authn_context_class_ref');
  }
  public set authnContextClassRef(value: string) {
    this._authnContextClassRef = value;
  }
  public resetAuthnContextClassRef() {
    this._authnContextClassRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authnContextClassRefInput() {
    return this._authnContextClassRef;
  }

  // auto_submit_toolbar - computed: false, optional: true, required: false
  private _autoSubmitToolbar?: boolean | cdktf.IResolvable; 
  public get autoSubmitToolbar() {
    return this.getBooleanAttribute('auto_submit_toolbar') as any;
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

  // certificate - computed: true, optional: false, required: false
  public get certificate() {
    return this.getStringAttribute('certificate');
  }

  // default_relay_state - computed: false, optional: true, required: false
  private _defaultRelayState?: string; 
  public get defaultRelayState() {
    return this.getStringAttribute('default_relay_state');
  }
  public set defaultRelayState(value: string) {
    this._defaultRelayState = value;
  }
  public resetDefaultRelayState() {
    this._defaultRelayState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRelayStateInput() {
    return this._defaultRelayState;
  }

  // destination - computed: false, optional: true, required: false
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  public resetDestination() {
    this._destination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // digest_algorithm - computed: false, optional: true, required: false
  private _digestAlgorithm?: string; 
  public get digestAlgorithm() {
    return this.getStringAttribute('digest_algorithm');
  }
  public set digestAlgorithm(value: string) {
    this._digestAlgorithm = value;
  }
  public resetDigestAlgorithm() {
    this._digestAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get digestAlgorithmInput() {
    return this._digestAlgorithm;
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

  // entity_key - computed: true, optional: false, required: false
  public get entityKey() {
    return this.getStringAttribute('entity_key');
  }

  // entity_url - computed: true, optional: false, required: false
  public get entityUrl() {
    return this.getStringAttribute('entity_url');
  }

  // features - computed: false, optional: true, required: false
  private _features?: string[]; 
  public get features() {
    return this.getListAttribute('features');
  }
  public set features(value: string[]) {
    this._features = value;
  }
  public resetFeatures() {
    this._features = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featuresInput() {
    return this._features;
  }

  // groups - computed: false, optional: true, required: false
  private _groups?: string[]; 
  public get groups() {
    return this.getListAttribute('groups');
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
    return this.getBooleanAttribute('hide_ios') as any;
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
    return this.getBooleanAttribute('hide_web') as any;
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

  // honor_force_authn - computed: false, optional: true, required: false
  private _honorForceAuthn?: boolean | cdktf.IResolvable; 
  public get honorForceAuthn() {
    return this.getBooleanAttribute('honor_force_authn') as any;
  }
  public set honorForceAuthn(value: boolean | cdktf.IResolvable) {
    this._honorForceAuthn = value;
  }
  public resetHonorForceAuthn() {
    this._honorForceAuthn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get honorForceAuthnInput() {
    return this._honorForceAuthn;
  }

  // http_post_binding - computed: true, optional: false, required: false
  public get httpPostBinding() {
    return this.getStringAttribute('http_post_binding');
  }

  // http_redirect_binding - computed: true, optional: false, required: false
  public get httpRedirectBinding() {
    return this.getStringAttribute('http_redirect_binding');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // idp_issuer - computed: false, optional: true, required: false
  private _idpIssuer?: string; 
  public get idpIssuer() {
    return this.getStringAttribute('idp_issuer');
  }
  public set idpIssuer(value: string) {
    this._idpIssuer = value;
  }
  public resetIdpIssuer() {
    this._idpIssuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpIssuerInput() {
    return this._idpIssuer;
  }

  // implicit_assignment - computed: false, optional: true, required: false
  private _implicitAssignment?: boolean | cdktf.IResolvable; 
  public get implicitAssignment() {
    return this.getBooleanAttribute('implicit_assignment') as any;
  }
  public set implicitAssignment(value: boolean | cdktf.IResolvable) {
    this._implicitAssignment = value;
  }
  public resetImplicitAssignment() {
    this._implicitAssignment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get implicitAssignmentInput() {
    return this._implicitAssignment;
  }

  // inline_hook_id - computed: false, optional: true, required: false
  private _inlineHookId?: string; 
  public get inlineHookId() {
    return this.getStringAttribute('inline_hook_id');
  }
  public set inlineHookId(value: string) {
    this._inlineHookId = value;
  }
  public resetInlineHookId() {
    this._inlineHookId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inlineHookIdInput() {
    return this._inlineHookId;
  }

  // key_id - computed: true, optional: false, required: false
  public get keyId() {
    return this.getStringAttribute('key_id');
  }

  // key_name - computed: false, optional: true, required: false
  private _keyName?: string; 
  public get keyName() {
    return this.getStringAttribute('key_name');
  }
  public set keyName(value: string) {
    this._keyName = value;
  }
  public resetKeyName() {
    this._keyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyNameInput() {
    return this._keyName;
  }

  // key_years_valid - computed: false, optional: true, required: false
  private _keyYearsValid?: number; 
  public get keyYearsValid() {
    return this.getNumberAttribute('key_years_valid');
  }
  public set keyYearsValid(value: number) {
    this._keyYearsValid = value;
  }
  public resetKeyYearsValid() {
    this._keyYearsValid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyYearsValidInput() {
    return this._keyYearsValid;
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

  // metadata - computed: true, optional: false, required: false
  public get metadata() {
    return this.getStringAttribute('metadata');
  }

  // metadata_url - computed: true, optional: false, required: false
  public get metadataUrl() {
    return this.getStringAttribute('metadata_url');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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

  // recipient - computed: false, optional: true, required: false
  private _recipient?: string; 
  public get recipient() {
    return this.getStringAttribute('recipient');
  }
  public set recipient(value: string) {
    this._recipient = value;
  }
  public resetRecipient() {
    this._recipient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recipientInput() {
    return this._recipient;
  }

  // request_compressed - computed: false, optional: true, required: false
  private _requestCompressed?: boolean | cdktf.IResolvable; 
  public get requestCompressed() {
    return this.getBooleanAttribute('request_compressed') as any;
  }
  public set requestCompressed(value: boolean | cdktf.IResolvable) {
    this._requestCompressed = value;
  }
  public resetRequestCompressed() {
    this._requestCompressed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestCompressedInput() {
    return this._requestCompressed;
  }

  // response_signed - computed: false, optional: true, required: false
  private _responseSigned?: boolean | cdktf.IResolvable; 
  public get responseSigned() {
    return this.getBooleanAttribute('response_signed') as any;
  }
  public set responseSigned(value: boolean | cdktf.IResolvable) {
    this._responseSigned = value;
  }
  public resetResponseSigned() {
    this._responseSigned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseSignedInput() {
    return this._responseSigned;
  }

  // saml_version - computed: false, optional: true, required: false
  private _samlVersion?: string; 
  public get samlVersion() {
    return this.getStringAttribute('saml_version');
  }
  public set samlVersion(value: string) {
    this._samlVersion = value;
  }
  public resetSamlVersion() {
    this._samlVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlVersionInput() {
    return this._samlVersion;
  }

  // sign_on_mode - computed: true, optional: false, required: false
  public get signOnMode() {
    return this.getStringAttribute('sign_on_mode');
  }

  // signature_algorithm - computed: false, optional: true, required: false
  private _signatureAlgorithm?: string; 
  public get signatureAlgorithm() {
    return this.getStringAttribute('signature_algorithm');
  }
  public set signatureAlgorithm(value: string) {
    this._signatureAlgorithm = value;
  }
  public resetSignatureAlgorithm() {
    this._signatureAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureAlgorithmInput() {
    return this._signatureAlgorithm;
  }

  // single_logout_certificate - computed: false, optional: true, required: false
  private _singleLogoutCertificate?: string; 
  public get singleLogoutCertificate() {
    return this.getStringAttribute('single_logout_certificate');
  }
  public set singleLogoutCertificate(value: string) {
    this._singleLogoutCertificate = value;
  }
  public resetSingleLogoutCertificate() {
    this._singleLogoutCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleLogoutCertificateInput() {
    return this._singleLogoutCertificate;
  }

  // single_logout_issuer - computed: false, optional: true, required: false
  private _singleLogoutIssuer?: string; 
  public get singleLogoutIssuer() {
    return this.getStringAttribute('single_logout_issuer');
  }
  public set singleLogoutIssuer(value: string) {
    this._singleLogoutIssuer = value;
  }
  public resetSingleLogoutIssuer() {
    this._singleLogoutIssuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleLogoutIssuerInput() {
    return this._singleLogoutIssuer;
  }

  // single_logout_url - computed: false, optional: true, required: false
  private _singleLogoutUrl?: string; 
  public get singleLogoutUrl() {
    return this.getStringAttribute('single_logout_url');
  }
  public set singleLogoutUrl(value: string) {
    this._singleLogoutUrl = value;
  }
  public resetSingleLogoutUrl() {
    this._singleLogoutUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleLogoutUrlInput() {
    return this._singleLogoutUrl;
  }

  // skip_groups - computed: false, optional: true, required: false
  private _skipGroups?: boolean | cdktf.IResolvable; 
  public get skipGroups() {
    return this.getBooleanAttribute('skip_groups') as any;
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
    return this.getBooleanAttribute('skip_users') as any;
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

  // sp_issuer - computed: false, optional: true, required: false
  private _spIssuer?: string; 
  public get spIssuer() {
    return this.getStringAttribute('sp_issuer');
  }
  public set spIssuer(value: string) {
    this._spIssuer = value;
  }
  public resetSpIssuer() {
    this._spIssuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spIssuerInput() {
    return this._spIssuer;
  }

  // sso_url - computed: false, optional: true, required: false
  private _ssoUrl?: string; 
  public get ssoUrl() {
    return this.getStringAttribute('sso_url');
  }
  public set ssoUrl(value: string) {
    this._ssoUrl = value;
  }
  public resetSsoUrl() {
    this._ssoUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoUrlInput() {
    return this._ssoUrl;
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

  // subject_name_id_format - computed: false, optional: true, required: false
  private _subjectNameIdFormat?: string; 
  public get subjectNameIdFormat() {
    return this.getStringAttribute('subject_name_id_format');
  }
  public set subjectNameIdFormat(value: string) {
    this._subjectNameIdFormat = value;
  }
  public resetSubjectNameIdFormat() {
    this._subjectNameIdFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectNameIdFormatInput() {
    return this._subjectNameIdFormat;
  }

  // subject_name_id_template - computed: false, optional: true, required: false
  private _subjectNameIdTemplate?: string; 
  public get subjectNameIdTemplate() {
    return this.getStringAttribute('subject_name_id_template');
  }
  public set subjectNameIdTemplate(value: string) {
    this._subjectNameIdTemplate = value;
  }
  public resetSubjectNameIdTemplate() {
    this._subjectNameIdTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectNameIdTemplateInput() {
    return this._subjectNameIdTemplate;
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

  // attribute_statements - computed: false, optional: true, required: false
  private _attributeStatements?: SamlAppAttributeStatements[]; 
  public get attributeStatements() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('attribute_statements') as any;
  }
  public set attributeStatements(value: SamlAppAttributeStatements[]) {
    this._attributeStatements = value;
  }
  public resetAttributeStatements() {
    this._attributeStatements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeStatementsInput() {
    return this._attributeStatements;
  }

  // users - computed: false, optional: true, required: false
  private _users?: SamlAppUsers[]; 
  public get users() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('users') as any;
  }
  public set users(value: SamlAppUsers[]) {
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
      acs_endpoints: cdktf.listMapper(cdktf.stringToTerraform)(this._acsEndpoints),
      admin_note: cdktf.stringToTerraform(this._adminNote),
      app_links_json: cdktf.stringToTerraform(this._appLinksJson),
      app_settings_json: cdktf.stringToTerraform(this._appSettingsJson),
      assertion_signed: cdktf.booleanToTerraform(this._assertionSigned),
      audience: cdktf.stringToTerraform(this._audience),
      authn_context_class_ref: cdktf.stringToTerraform(this._authnContextClassRef),
      auto_submit_toolbar: cdktf.booleanToTerraform(this._autoSubmitToolbar),
      default_relay_state: cdktf.stringToTerraform(this._defaultRelayState),
      destination: cdktf.stringToTerraform(this._destination),
      digest_algorithm: cdktf.stringToTerraform(this._digestAlgorithm),
      enduser_note: cdktf.stringToTerraform(this._enduserNote),
      features: cdktf.listMapper(cdktf.stringToTerraform)(this._features),
      groups: cdktf.listMapper(cdktf.stringToTerraform)(this._groups),
      hide_ios: cdktf.booleanToTerraform(this._hideIos),
      hide_web: cdktf.booleanToTerraform(this._hideWeb),
      honor_force_authn: cdktf.booleanToTerraform(this._honorForceAuthn),
      idp_issuer: cdktf.stringToTerraform(this._idpIssuer),
      implicit_assignment: cdktf.booleanToTerraform(this._implicitAssignment),
      inline_hook_id: cdktf.stringToTerraform(this._inlineHookId),
      key_name: cdktf.stringToTerraform(this._keyName),
      key_years_valid: cdktf.numberToTerraform(this._keyYearsValid),
      label: cdktf.stringToTerraform(this._label),
      logo: cdktf.stringToTerraform(this._logo),
      preconfigured_app: cdktf.stringToTerraform(this._preconfiguredApp),
      recipient: cdktf.stringToTerraform(this._recipient),
      request_compressed: cdktf.booleanToTerraform(this._requestCompressed),
      response_signed: cdktf.booleanToTerraform(this._responseSigned),
      saml_version: cdktf.stringToTerraform(this._samlVersion),
      signature_algorithm: cdktf.stringToTerraform(this._signatureAlgorithm),
      single_logout_certificate: cdktf.stringToTerraform(this._singleLogoutCertificate),
      single_logout_issuer: cdktf.stringToTerraform(this._singleLogoutIssuer),
      single_logout_url: cdktf.stringToTerraform(this._singleLogoutUrl),
      skip_groups: cdktf.booleanToTerraform(this._skipGroups),
      skip_users: cdktf.booleanToTerraform(this._skipUsers),
      sp_issuer: cdktf.stringToTerraform(this._spIssuer),
      sso_url: cdktf.stringToTerraform(this._ssoUrl),
      status: cdktf.stringToTerraform(this._status),
      subject_name_id_format: cdktf.stringToTerraform(this._subjectNameIdFormat),
      subject_name_id_template: cdktf.stringToTerraform(this._subjectNameIdTemplate),
      user_name_template: cdktf.stringToTerraform(this._userNameTemplate),
      user_name_template_push_status: cdktf.stringToTerraform(this._userNameTemplatePushStatus),
      user_name_template_suffix: cdktf.stringToTerraform(this._userNameTemplateSuffix),
      user_name_template_type: cdktf.stringToTerraform(this._userNameTemplateType),
      attribute_statements: cdktf.listMapper(samlAppAttributeStatementsToTerraform)(this._attributeStatements),
      users: cdktf.listMapper(samlAppUsersToTerraform)(this._users),
    };
  }
}
