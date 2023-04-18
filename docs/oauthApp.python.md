# `okta_oauth_app`

Refer to the Terraform Registory for docs: [`okta_oauth_app`](https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app).

# `oauthApp` Submodule <a name="`oauthApp` Submodule" id="@cdktf/provider-okta.oauthApp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OauthApp <a name="OauthApp" id="@cdktf/provider-okta.oauthApp.OauthApp"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app okta_oauth_app}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import oauth_app

oauthApp.OauthApp(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  label: str,
  type: str,
  accessibility_error_redirect_url: str = None,
  accessibility_login_redirect_url: str = None,
  accessibility_self_service: typing.Union[bool, IResolvable] = None,
  admin_note: str = None,
  app_links_json: str = None,
  app_settings_json: str = None,
  authentication_policy: str = None,
  auto_key_rotation: typing.Union[bool, IResolvable] = None,
  auto_submit_toolbar: typing.Union[bool, IResolvable] = None,
  client_basic_secret: str = None,
  client_id: str = None,
  client_uri: str = None,
  consent_method: str = None,
  custom_client_id: str = None,
  enduser_note: str = None,
  grant_types: typing.List[str] = None,
  groups: typing.List[str] = None,
  groups_claim: OauthAppGroupsClaim = None,
  hide_ios: typing.Union[bool, IResolvable] = None,
  hide_web: typing.Union[bool, IResolvable] = None,
  id: str = None,
  implicit_assignment: typing.Union[bool, IResolvable] = None,
  issuer_mode: str = None,
  jwks: typing.Union[IResolvable, typing.List[OauthAppJwks]] = None,
  login_mode: str = None,
  login_scopes: typing.List[str] = None,
  login_uri: str = None,
  logo: str = None,
  logo_uri: str = None,
  omit_secret: typing.Union[bool, IResolvable] = None,
  pkce_required: typing.Union[bool, IResolvable] = None,
  policy_uri: str = None,
  post_logout_redirect_uris: typing.List[str] = None,
  profile: str = None,
  redirect_uris: typing.List[str] = None,
  refresh_token_leeway: typing.Union[int, float] = None,
  refresh_token_rotation: str = None,
  response_types: typing.List[str] = None,
  skip_groups: typing.Union[bool, IResolvable] = None,
  skip_users: typing.Union[bool, IResolvable] = None,
  status: str = None,
  timeouts: OauthAppTimeouts = None,
  token_endpoint_auth_method: str = None,
  tos_uri: str = None,
  user_name_template: str = None,
  user_name_template_push_status: str = None,
  user_name_template_suffix: str = None,
  user_name_template_type: str = None,
  users: typing.Union[IResolvable, typing.List[OauthAppUsers]] = None,
  wildcard_redirect: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.label">label</a></code> | <code>str</code> | Pretty name of app. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.type">type</a></code> | <code>str</code> | The type of client application. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.accessibilityErrorRedirectUrl">accessibility_error_redirect_url</a></code> | <code>str</code> | Custom error page URL. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.accessibilityLoginRedirectUrl">accessibility_login_redirect_url</a></code> | <code>str</code> | Custom login page URL. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.accessibilitySelfService">accessibility_self_service</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable self service. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.adminNote">admin_note</a></code> | <code>str</code> | Application notes for admins. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.appLinksJson">app_links_json</a></code> | <code>str</code> | Displays specific appLinks for the app. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.appSettingsJson">app_settings_json</a></code> | <code>str</code> | Application settings in JSON format. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.authenticationPolicy">authentication_policy</a></code> | <code>str</code> | Id of this apps authentication policy. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.autoKeyRotation">auto_key_rotation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Requested key rotation mode. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.autoSubmitToolbar">auto_submit_toolbar</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Display auto submit toolbar. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.clientBasicSecret">client_basic_secret</a></code> | <code>str</code> | OAuth client secret key, this can be set when token_endpoint_auth_method is client_secret_basic. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.clientId">client_id</a></code> | <code>str</code> | OAuth client ID. If set during creation, app is created with this id. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.clientUri">client_uri</a></code> | <code>str</code> | URI to a web page providing information about the client. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.consentMethod">consent_method</a></code> | <code>str</code> | *Early Access Property*. Indicates whether user consent is required or implicit. Valid values: REQUIRED, TRUSTED. Default value is TRUSTED. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.customClientId">custom_client_id</a></code> | <code>str</code> | **Deprecated** This property allows you to set your client_id during creation. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.enduserNote">enduser_note</a></code> | <code>str</code> | Application notes for end users. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.grantTypes">grant_types</a></code> | <code>typing.List[str]</code> | List of OAuth 2.0 grant types. Conditional validation params found here https://developer.okta.com/docs/api/resources/apps#credentials-settings-details. Defaults to minimum requirements per app type. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.groups">groups</a></code> | <code>typing.List[str]</code> | Groups associated with the application. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.groupsClaim">groups_claim</a></code> | <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaim">OauthAppGroupsClaim</a></code> | groups_claim block. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.hideIos">hide_ios</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Do not display application icon on mobile app. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.hideWeb">hide_web</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Do not display application icon to users. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#id OauthApp#id}. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.implicitAssignment">implicit_assignment</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *Early Access Property*. Enable Federation Broker Mode. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.issuerMode">issuer_mode</a></code> | <code>str</code> | *Early Access Property*. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.jwks">jwks</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.oauthApp.OauthAppJwks">OauthAppJwks</a>]]</code> | jwks block. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.loginMode">login_mode</a></code> | <code>str</code> | The type of Idp-Initiated login that the client supports, if any. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.loginScopes">login_scopes</a></code> | <code>typing.List[str]</code> | List of scopes to use for the request. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.loginUri">login_uri</a></code> | <code>str</code> | URI that initiates login. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.logo">logo</a></code> | <code>str</code> | Local path to logo of the application. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.logoUri">logo_uri</a></code> | <code>str</code> | URI that references a logo for the client. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.omitSecret">omit_secret</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | This tells the provider not to persist the application's secret to state. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.pkceRequired">pkce_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Require Proof Key for Code Exchange (PKCE) for additional verification key rotation mode. See: https://developer.okta.com/docs/reference/api/apps/#oauth-credential-object. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.policyUri">policy_uri</a></code> | <code>str</code> | URI to web page providing client policy document. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.postLogoutRedirectUris">post_logout_redirect_uris</a></code> | <code>typing.List[str]</code> | List of URIs for redirection after logout. Note: see okta_app_oauth_post_logout_redirect_uri for appending to this list in a decentralized way. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.profile">profile</a></code> | <code>str</code> | Custom JSON that represents an OAuth application's profile. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.redirectUris">redirect_uris</a></code> | <code>typing.List[str]</code> | List of URIs for use in the redirect-based flow. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.refreshTokenLeeway">refresh_token_leeway</a></code> | <code>typing.Union[int, float]</code> | *Early Access Property* Grace period for token rotation. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.refreshTokenRotation">refresh_token_rotation</a></code> | <code>str</code> | *Early Access Property* Refresh token rotation behavior. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.responseTypes">response_types</a></code> | <code>typing.List[str]</code> | List of OAuth 2.0 response type strings. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.skipGroups">skip_groups</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Ignore groups sync. This is a temporary solution until 'groups' field is supported in all the app-like resources. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.skipUsers">skip_users</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Ignore users sync. This is a temporary solution until 'users' field is supported in all the app-like resources. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.status">status</a></code> | <code>str</code> | Status of application. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeouts">OauthAppTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.tokenEndpointAuthMethod">token_endpoint_auth_method</a></code> | <code>str</code> | Requested authentication method for the token endpoint. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.tosUri">tos_uri</a></code> | <code>str</code> | URI to web page providing client tos (terms of service). |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.userNameTemplate">user_name_template</a></code> | <code>str</code> | Username template. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.userNameTemplatePushStatus">user_name_template_push_status</a></code> | <code>str</code> | Push username on update. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.userNameTemplateSuffix">user_name_template_suffix</a></code> | <code>str</code> | Username template suffix. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.userNameTemplateType">user_name_template_type</a></code> | <code>str</code> | Username template type. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.users">users</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.oauthApp.OauthAppUsers">OauthAppUsers</a>]]</code> | users block. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.wildcardRedirect">wildcard_redirect</a></code> | <code>str</code> | *Early Access Property*. Indicates if the client is allowed to use wildcard matching of redirect_uris. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.label"></a>

- *Type:* str

Pretty name of app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#label OauthApp#label}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.type"></a>

- *Type:* str

The type of client application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#type OauthApp#type}

---

##### `accessibility_error_redirect_url`<sup>Optional</sup> <a name="accessibility_error_redirect_url" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.accessibilityErrorRedirectUrl"></a>

- *Type:* str

Custom error page URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#accessibility_error_redirect_url OauthApp#accessibility_error_redirect_url}

---

##### `accessibility_login_redirect_url`<sup>Optional</sup> <a name="accessibility_login_redirect_url" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.accessibilityLoginRedirectUrl"></a>

- *Type:* str

Custom login page URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#accessibility_login_redirect_url OauthApp#accessibility_login_redirect_url}

---

##### `accessibility_self_service`<sup>Optional</sup> <a name="accessibility_self_service" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.accessibilitySelfService"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable self service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#accessibility_self_service OauthApp#accessibility_self_service}

---

##### `admin_note`<sup>Optional</sup> <a name="admin_note" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.adminNote"></a>

- *Type:* str

Application notes for admins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#admin_note OauthApp#admin_note}

---

##### `app_links_json`<sup>Optional</sup> <a name="app_links_json" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.appLinksJson"></a>

- *Type:* str

Displays specific appLinks for the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#app_links_json OauthApp#app_links_json}

---

##### `app_settings_json`<sup>Optional</sup> <a name="app_settings_json" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.appSettingsJson"></a>

- *Type:* str

Application settings in JSON format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#app_settings_json OauthApp#app_settings_json}

---

##### `authentication_policy`<sup>Optional</sup> <a name="authentication_policy" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.authenticationPolicy"></a>

- *Type:* str

Id of this apps authentication policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#authentication_policy OauthApp#authentication_policy}

---

##### `auto_key_rotation`<sup>Optional</sup> <a name="auto_key_rotation" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.autoKeyRotation"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Requested key rotation mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#auto_key_rotation OauthApp#auto_key_rotation}

---

##### `auto_submit_toolbar`<sup>Optional</sup> <a name="auto_submit_toolbar" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.autoSubmitToolbar"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Display auto submit toolbar.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#auto_submit_toolbar OauthApp#auto_submit_toolbar}

---

##### `client_basic_secret`<sup>Optional</sup> <a name="client_basic_secret" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.clientBasicSecret"></a>

- *Type:* str

OAuth client secret key, this can be set when token_endpoint_auth_method is client_secret_basic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#client_basic_secret OauthApp#client_basic_secret}

---

##### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.clientId"></a>

- *Type:* str

OAuth client ID. If set during creation, app is created with this id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#client_id OauthApp#client_id}

---

##### `client_uri`<sup>Optional</sup> <a name="client_uri" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.clientUri"></a>

- *Type:* str

URI to a web page providing information about the client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#client_uri OauthApp#client_uri}

---

##### `consent_method`<sup>Optional</sup> <a name="consent_method" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.consentMethod"></a>

- *Type:* str

*Early Access Property*. Indicates whether user consent is required or implicit. Valid values: REQUIRED, TRUSTED. Default value is TRUSTED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#consent_method OauthApp#consent_method}

---

##### `custom_client_id`<sup>Optional</sup> <a name="custom_client_id" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.customClientId"></a>

- *Type:* str

**Deprecated** This property allows you to set your client_id during creation.

NOTE: updating after creation will be a no-op, use client_id for that behavior instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#custom_client_id OauthApp#custom_client_id}

---

##### `enduser_note`<sup>Optional</sup> <a name="enduser_note" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.enduserNote"></a>

- *Type:* str

Application notes for end users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#enduser_note OauthApp#enduser_note}

---

##### `grant_types`<sup>Optional</sup> <a name="grant_types" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.grantTypes"></a>

- *Type:* typing.List[str]

List of OAuth 2.0 grant types. Conditional validation params found here https://developer.okta.com/docs/api/resources/apps#credentials-settings-details. Defaults to minimum requirements per app type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#grant_types OauthApp#grant_types}

---

##### `groups`<sup>Optional</sup> <a name="groups" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.groups"></a>

- *Type:* typing.List[str]

Groups associated with the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#groups OauthApp#groups}

---

##### `groups_claim`<sup>Optional</sup> <a name="groups_claim" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.groupsClaim"></a>

- *Type:* <a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaim">OauthAppGroupsClaim</a>

groups_claim block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#groups_claim OauthApp#groups_claim}

---

##### `hide_ios`<sup>Optional</sup> <a name="hide_ios" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.hideIos"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Do not display application icon on mobile app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#hide_ios OauthApp#hide_ios}

---

##### `hide_web`<sup>Optional</sup> <a name="hide_web" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.hideWeb"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Do not display application icon to users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#hide_web OauthApp#hide_web}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#id OauthApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `implicit_assignment`<sup>Optional</sup> <a name="implicit_assignment" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.implicitAssignment"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

*Early Access Property*. Enable Federation Broker Mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#implicit_assignment OauthApp#implicit_assignment}

---

##### `issuer_mode`<sup>Optional</sup> <a name="issuer_mode" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.issuerMode"></a>

- *Type:* str

*Early Access Property*.

Indicates whether the Okta Authorization Server uses the original Okta org domain URL or a custom domain URL as the issuer of ID token for this client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#issuer_mode OauthApp#issuer_mode}

---

##### `jwks`<sup>Optional</sup> <a name="jwks" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.jwks"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.oauthApp.OauthAppJwks">OauthAppJwks</a>]]

jwks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#jwks OauthApp#jwks}

---

##### `login_mode`<sup>Optional</sup> <a name="login_mode" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.loginMode"></a>

- *Type:* str

The type of Idp-Initiated login that the client supports, if any.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#login_mode OauthApp#login_mode}

---

##### `login_scopes`<sup>Optional</sup> <a name="login_scopes" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.loginScopes"></a>

- *Type:* typing.List[str]

List of scopes to use for the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#login_scopes OauthApp#login_scopes}

---

##### `login_uri`<sup>Optional</sup> <a name="login_uri" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.loginUri"></a>

- *Type:* str

URI that initiates login.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#login_uri OauthApp#login_uri}

---

##### `logo`<sup>Optional</sup> <a name="logo" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.logo"></a>

- *Type:* str

Local path to logo of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#logo OauthApp#logo}

---

##### `logo_uri`<sup>Optional</sup> <a name="logo_uri" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.logoUri"></a>

- *Type:* str

URI that references a logo for the client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#logo_uri OauthApp#logo_uri}

---

##### `omit_secret`<sup>Optional</sup> <a name="omit_secret" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.omitSecret"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

This tells the provider not to persist the application's secret to state.

If this is ever changes from true => false your app will be recreated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#omit_secret OauthApp#omit_secret}

---

##### `pkce_required`<sup>Optional</sup> <a name="pkce_required" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.pkceRequired"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Require Proof Key for Code Exchange (PKCE) for additional verification key rotation mode. See: https://developer.okta.com/docs/reference/api/apps/#oauth-credential-object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#pkce_required OauthApp#pkce_required}

---

##### `policy_uri`<sup>Optional</sup> <a name="policy_uri" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.policyUri"></a>

- *Type:* str

URI to web page providing client policy document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#policy_uri OauthApp#policy_uri}

---

##### `post_logout_redirect_uris`<sup>Optional</sup> <a name="post_logout_redirect_uris" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.postLogoutRedirectUris"></a>

- *Type:* typing.List[str]

List of URIs for redirection after logout. Note: see okta_app_oauth_post_logout_redirect_uri for appending to this list in a decentralized way.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#post_logout_redirect_uris OauthApp#post_logout_redirect_uris}

---

##### `profile`<sup>Optional</sup> <a name="profile" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.profile"></a>

- *Type:* str

Custom JSON that represents an OAuth application's profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#profile OauthApp#profile}

---

##### `redirect_uris`<sup>Optional</sup> <a name="redirect_uris" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.redirectUris"></a>

- *Type:* typing.List[str]

List of URIs for use in the redirect-based flow.

This is required for all application types except service. Note: see okta_app_oauth_redirect_uri for appending to this list in a decentralized way.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#redirect_uris OauthApp#redirect_uris}

---

##### `refresh_token_leeway`<sup>Optional</sup> <a name="refresh_token_leeway" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.refreshTokenLeeway"></a>

- *Type:* typing.Union[int, float]

*Early Access Property* Grace period for token rotation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#refresh_token_leeway OauthApp#refresh_token_leeway}

---

##### `refresh_token_rotation`<sup>Optional</sup> <a name="refresh_token_rotation" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.refreshTokenRotation"></a>

- *Type:* str

*Early Access Property* Refresh token rotation behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#refresh_token_rotation OauthApp#refresh_token_rotation}

---

##### `response_types`<sup>Optional</sup> <a name="response_types" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.responseTypes"></a>

- *Type:* typing.List[str]

List of OAuth 2.0 response type strings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#response_types OauthApp#response_types}

---

##### `skip_groups`<sup>Optional</sup> <a name="skip_groups" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.skipGroups"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Ignore groups sync. This is a temporary solution until 'groups' field is supported in all the app-like resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#skip_groups OauthApp#skip_groups}

---

##### `skip_users`<sup>Optional</sup> <a name="skip_users" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.skipUsers"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Ignore users sync. This is a temporary solution until 'users' field is supported in all the app-like resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#skip_users OauthApp#skip_users}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.status"></a>

- *Type:* str

Status of application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#status OauthApp#status}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeouts">OauthAppTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#timeouts OauthApp#timeouts}

---

##### `token_endpoint_auth_method`<sup>Optional</sup> <a name="token_endpoint_auth_method" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.tokenEndpointAuthMethod"></a>

- *Type:* str

Requested authentication method for the token endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#token_endpoint_auth_method OauthApp#token_endpoint_auth_method}

---

##### `tos_uri`<sup>Optional</sup> <a name="tos_uri" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.tosUri"></a>

- *Type:* str

URI to web page providing client tos (terms of service).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#tos_uri OauthApp#tos_uri}

---

##### `user_name_template`<sup>Optional</sup> <a name="user_name_template" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.userNameTemplate"></a>

- *Type:* str

Username template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#user_name_template OauthApp#user_name_template}

---

##### `user_name_template_push_status`<sup>Optional</sup> <a name="user_name_template_push_status" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.userNameTemplatePushStatus"></a>

- *Type:* str

Push username on update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#user_name_template_push_status OauthApp#user_name_template_push_status}

---

##### `user_name_template_suffix`<sup>Optional</sup> <a name="user_name_template_suffix" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.userNameTemplateSuffix"></a>

- *Type:* str

Username template suffix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#user_name_template_suffix OauthApp#user_name_template_suffix}

---

##### `user_name_template_type`<sup>Optional</sup> <a name="user_name_template_type" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.userNameTemplateType"></a>

- *Type:* str

Username template type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#user_name_template_type OauthApp#user_name_template_type}

---

##### `users`<sup>Optional</sup> <a name="users" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.users"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.oauthApp.OauthAppUsers">OauthAppUsers</a>]]

users block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#users OauthApp#users}

---

##### `wildcard_redirect`<sup>Optional</sup> <a name="wildcard_redirect" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.wildcardRedirect"></a>

- *Type:* str

*Early Access Property*. Indicates if the client is allowed to use wildcard matching of redirect_uris.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#wildcard_redirect OauthApp#wildcard_redirect}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.putGroupsClaim">put_groups_claim</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.putJwks">put_jwks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.putUsers">put_users</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetAccessibilityErrorRedirectUrl">reset_accessibility_error_redirect_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetAccessibilityLoginRedirectUrl">reset_accessibility_login_redirect_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetAccessibilitySelfService">reset_accessibility_self_service</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetAdminNote">reset_admin_note</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetAppLinksJson">reset_app_links_json</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetAppSettingsJson">reset_app_settings_json</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetAuthenticationPolicy">reset_authentication_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetAutoKeyRotation">reset_auto_key_rotation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetAutoSubmitToolbar">reset_auto_submit_toolbar</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetClientBasicSecret">reset_client_basic_secret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetClientId">reset_client_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetClientUri">reset_client_uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetConsentMethod">reset_consent_method</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetCustomClientId">reset_custom_client_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetEnduserNote">reset_enduser_note</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetGrantTypes">reset_grant_types</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetGroups">reset_groups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetGroupsClaim">reset_groups_claim</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetHideIos">reset_hide_ios</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetHideWeb">reset_hide_web</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetImplicitAssignment">reset_implicit_assignment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetIssuerMode">reset_issuer_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetJwks">reset_jwks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetLoginMode">reset_login_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetLoginScopes">reset_login_scopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetLoginUri">reset_login_uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetLogo">reset_logo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetLogoUri">reset_logo_uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetOmitSecret">reset_omit_secret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetPkceRequired">reset_pkce_required</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetPolicyUri">reset_policy_uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetPostLogoutRedirectUris">reset_post_logout_redirect_uris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetProfile">reset_profile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetRedirectUris">reset_redirect_uris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetRefreshTokenLeeway">reset_refresh_token_leeway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetRefreshTokenRotation">reset_refresh_token_rotation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetResponseTypes">reset_response_types</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetSkipGroups">reset_skip_groups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetSkipUsers">reset_skip_users</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetTokenEndpointAuthMethod">reset_token_endpoint_auth_method</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetTosUri">reset_tos_uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetUserNameTemplate">reset_user_name_template</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetUserNameTemplatePushStatus">reset_user_name_template_push_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetUserNameTemplateSuffix">reset_user_name_template_suffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetUserNameTemplateType">reset_user_name_template_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetUsers">reset_users</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetWildcardRedirect">reset_wildcard_redirect</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.oauthApp.OauthApp.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-okta.oauthApp.OauthApp.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.oauthApp.OauthApp.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.oauthApp.OauthApp.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-okta.oauthApp.OauthApp.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-okta.oauthApp.OauthApp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-okta.oauthApp.OauthApp.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-okta.oauthApp.OauthApp.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-okta.oauthApp.OauthApp.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.oauthApp.OauthApp.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.oauthApp.OauthApp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.oauthApp.OauthApp.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.oauthApp.OauthApp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.oauthApp.OauthApp.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.oauthApp.OauthApp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.oauthApp.OauthApp.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.oauthApp.OauthApp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.oauthApp.OauthApp.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.oauthApp.OauthApp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.oauthApp.OauthApp.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.oauthApp.OauthApp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.oauthApp.OauthApp.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.oauthApp.OauthApp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.oauthApp.OauthApp.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.oauthApp.OauthApp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.oauthApp.OauthApp.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.oauthApp.OauthApp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.oauthApp.OauthApp.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.oauthApp.OauthApp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_groups_claim` <a name="put_groups_claim" id="@cdktf/provider-okta.oauthApp.OauthApp.putGroupsClaim"></a>

```python
def put_groups_claim(
  name: str,
  type: str,
  value: str,
  filter_type: str = None
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.oauthApp.OauthApp.putGroupsClaim.parameter.name"></a>

- *Type:* str

Name of the claim that will be used in the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#name OauthApp#name}

---

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.oauthApp.OauthApp.putGroupsClaim.parameter.type"></a>

- *Type:* str

Groups claim type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#type OauthApp#type}

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.oauthApp.OauthApp.putGroupsClaim.parameter.value"></a>

- *Type:* str

Value of the claim.

Can be an Okta Expression Language statement that evaluates at the time the token is minted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#value OauthApp#value}

---

###### `filter_type`<sup>Optional</sup> <a name="filter_type" id="@cdktf/provider-okta.oauthApp.OauthApp.putGroupsClaim.parameter.filterType"></a>

- *Type:* str

Groups claim filter. Can only be set if type is FILTER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#filter_type OauthApp#filter_type}

---

##### `put_jwks` <a name="put_jwks" id="@cdktf/provider-okta.oauthApp.OauthApp.putJwks"></a>

```python
def put_jwks(
  value: typing.Union[IResolvable, typing.List[OauthAppJwks]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.oauthApp.OauthApp.putJwks.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.oauthApp.OauthAppJwks">OauthAppJwks</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-okta.oauthApp.OauthApp.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-okta.oauthApp.OauthApp.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#create OauthApp#create}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-okta.oauthApp.OauthApp.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#read OauthApp#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-okta.oauthApp.OauthApp.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#update OauthApp#update}.

---

##### `put_users` <a name="put_users" id="@cdktf/provider-okta.oauthApp.OauthApp.putUsers"></a>

```python
def put_users(
  value: typing.Union[IResolvable, typing.List[OauthAppUsers]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.oauthApp.OauthApp.putUsers.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.oauthApp.OauthAppUsers">OauthAppUsers</a>]]

---

##### `reset_accessibility_error_redirect_url` <a name="reset_accessibility_error_redirect_url" id="@cdktf/provider-okta.oauthApp.OauthApp.resetAccessibilityErrorRedirectUrl"></a>

```python
def reset_accessibility_error_redirect_url() -> None
```

##### `reset_accessibility_login_redirect_url` <a name="reset_accessibility_login_redirect_url" id="@cdktf/provider-okta.oauthApp.OauthApp.resetAccessibilityLoginRedirectUrl"></a>

```python
def reset_accessibility_login_redirect_url() -> None
```

##### `reset_accessibility_self_service` <a name="reset_accessibility_self_service" id="@cdktf/provider-okta.oauthApp.OauthApp.resetAccessibilitySelfService"></a>

```python
def reset_accessibility_self_service() -> None
```

##### `reset_admin_note` <a name="reset_admin_note" id="@cdktf/provider-okta.oauthApp.OauthApp.resetAdminNote"></a>

```python
def reset_admin_note() -> None
```

##### `reset_app_links_json` <a name="reset_app_links_json" id="@cdktf/provider-okta.oauthApp.OauthApp.resetAppLinksJson"></a>

```python
def reset_app_links_json() -> None
```

##### `reset_app_settings_json` <a name="reset_app_settings_json" id="@cdktf/provider-okta.oauthApp.OauthApp.resetAppSettingsJson"></a>

```python
def reset_app_settings_json() -> None
```

##### `reset_authentication_policy` <a name="reset_authentication_policy" id="@cdktf/provider-okta.oauthApp.OauthApp.resetAuthenticationPolicy"></a>

```python
def reset_authentication_policy() -> None
```

##### `reset_auto_key_rotation` <a name="reset_auto_key_rotation" id="@cdktf/provider-okta.oauthApp.OauthApp.resetAutoKeyRotation"></a>

```python
def reset_auto_key_rotation() -> None
```

##### `reset_auto_submit_toolbar` <a name="reset_auto_submit_toolbar" id="@cdktf/provider-okta.oauthApp.OauthApp.resetAutoSubmitToolbar"></a>

```python
def reset_auto_submit_toolbar() -> None
```

##### `reset_client_basic_secret` <a name="reset_client_basic_secret" id="@cdktf/provider-okta.oauthApp.OauthApp.resetClientBasicSecret"></a>

```python
def reset_client_basic_secret() -> None
```

##### `reset_client_id` <a name="reset_client_id" id="@cdktf/provider-okta.oauthApp.OauthApp.resetClientId"></a>

```python
def reset_client_id() -> None
```

##### `reset_client_uri` <a name="reset_client_uri" id="@cdktf/provider-okta.oauthApp.OauthApp.resetClientUri"></a>

```python
def reset_client_uri() -> None
```

##### `reset_consent_method` <a name="reset_consent_method" id="@cdktf/provider-okta.oauthApp.OauthApp.resetConsentMethod"></a>

```python
def reset_consent_method() -> None
```

##### `reset_custom_client_id` <a name="reset_custom_client_id" id="@cdktf/provider-okta.oauthApp.OauthApp.resetCustomClientId"></a>

```python
def reset_custom_client_id() -> None
```

##### `reset_enduser_note` <a name="reset_enduser_note" id="@cdktf/provider-okta.oauthApp.OauthApp.resetEnduserNote"></a>

```python
def reset_enduser_note() -> None
```

##### `reset_grant_types` <a name="reset_grant_types" id="@cdktf/provider-okta.oauthApp.OauthApp.resetGrantTypes"></a>

```python
def reset_grant_types() -> None
```

##### `reset_groups` <a name="reset_groups" id="@cdktf/provider-okta.oauthApp.OauthApp.resetGroups"></a>

```python
def reset_groups() -> None
```

##### `reset_groups_claim` <a name="reset_groups_claim" id="@cdktf/provider-okta.oauthApp.OauthApp.resetGroupsClaim"></a>

```python
def reset_groups_claim() -> None
```

##### `reset_hide_ios` <a name="reset_hide_ios" id="@cdktf/provider-okta.oauthApp.OauthApp.resetHideIos"></a>

```python
def reset_hide_ios() -> None
```

##### `reset_hide_web` <a name="reset_hide_web" id="@cdktf/provider-okta.oauthApp.OauthApp.resetHideWeb"></a>

```python
def reset_hide_web() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-okta.oauthApp.OauthApp.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_implicit_assignment` <a name="reset_implicit_assignment" id="@cdktf/provider-okta.oauthApp.OauthApp.resetImplicitAssignment"></a>

```python
def reset_implicit_assignment() -> None
```

##### `reset_issuer_mode` <a name="reset_issuer_mode" id="@cdktf/provider-okta.oauthApp.OauthApp.resetIssuerMode"></a>

```python
def reset_issuer_mode() -> None
```

##### `reset_jwks` <a name="reset_jwks" id="@cdktf/provider-okta.oauthApp.OauthApp.resetJwks"></a>

```python
def reset_jwks() -> None
```

##### `reset_login_mode` <a name="reset_login_mode" id="@cdktf/provider-okta.oauthApp.OauthApp.resetLoginMode"></a>

```python
def reset_login_mode() -> None
```

##### `reset_login_scopes` <a name="reset_login_scopes" id="@cdktf/provider-okta.oauthApp.OauthApp.resetLoginScopes"></a>

```python
def reset_login_scopes() -> None
```

##### `reset_login_uri` <a name="reset_login_uri" id="@cdktf/provider-okta.oauthApp.OauthApp.resetLoginUri"></a>

```python
def reset_login_uri() -> None
```

##### `reset_logo` <a name="reset_logo" id="@cdktf/provider-okta.oauthApp.OauthApp.resetLogo"></a>

```python
def reset_logo() -> None
```

##### `reset_logo_uri` <a name="reset_logo_uri" id="@cdktf/provider-okta.oauthApp.OauthApp.resetLogoUri"></a>

```python
def reset_logo_uri() -> None
```

##### `reset_omit_secret` <a name="reset_omit_secret" id="@cdktf/provider-okta.oauthApp.OauthApp.resetOmitSecret"></a>

```python
def reset_omit_secret() -> None
```

##### `reset_pkce_required` <a name="reset_pkce_required" id="@cdktf/provider-okta.oauthApp.OauthApp.resetPkceRequired"></a>

```python
def reset_pkce_required() -> None
```

##### `reset_policy_uri` <a name="reset_policy_uri" id="@cdktf/provider-okta.oauthApp.OauthApp.resetPolicyUri"></a>

```python
def reset_policy_uri() -> None
```

##### `reset_post_logout_redirect_uris` <a name="reset_post_logout_redirect_uris" id="@cdktf/provider-okta.oauthApp.OauthApp.resetPostLogoutRedirectUris"></a>

```python
def reset_post_logout_redirect_uris() -> None
```

##### `reset_profile` <a name="reset_profile" id="@cdktf/provider-okta.oauthApp.OauthApp.resetProfile"></a>

```python
def reset_profile() -> None
```

##### `reset_redirect_uris` <a name="reset_redirect_uris" id="@cdktf/provider-okta.oauthApp.OauthApp.resetRedirectUris"></a>

```python
def reset_redirect_uris() -> None
```

##### `reset_refresh_token_leeway` <a name="reset_refresh_token_leeway" id="@cdktf/provider-okta.oauthApp.OauthApp.resetRefreshTokenLeeway"></a>

```python
def reset_refresh_token_leeway() -> None
```

##### `reset_refresh_token_rotation` <a name="reset_refresh_token_rotation" id="@cdktf/provider-okta.oauthApp.OauthApp.resetRefreshTokenRotation"></a>

```python
def reset_refresh_token_rotation() -> None
```

##### `reset_response_types` <a name="reset_response_types" id="@cdktf/provider-okta.oauthApp.OauthApp.resetResponseTypes"></a>

```python
def reset_response_types() -> None
```

##### `reset_skip_groups` <a name="reset_skip_groups" id="@cdktf/provider-okta.oauthApp.OauthApp.resetSkipGroups"></a>

```python
def reset_skip_groups() -> None
```

##### `reset_skip_users` <a name="reset_skip_users" id="@cdktf/provider-okta.oauthApp.OauthApp.resetSkipUsers"></a>

```python
def reset_skip_users() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktf/provider-okta.oauthApp.OauthApp.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-okta.oauthApp.OauthApp.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_token_endpoint_auth_method` <a name="reset_token_endpoint_auth_method" id="@cdktf/provider-okta.oauthApp.OauthApp.resetTokenEndpointAuthMethod"></a>

```python
def reset_token_endpoint_auth_method() -> None
```

##### `reset_tos_uri` <a name="reset_tos_uri" id="@cdktf/provider-okta.oauthApp.OauthApp.resetTosUri"></a>

```python
def reset_tos_uri() -> None
```

##### `reset_user_name_template` <a name="reset_user_name_template" id="@cdktf/provider-okta.oauthApp.OauthApp.resetUserNameTemplate"></a>

```python
def reset_user_name_template() -> None
```

##### `reset_user_name_template_push_status` <a name="reset_user_name_template_push_status" id="@cdktf/provider-okta.oauthApp.OauthApp.resetUserNameTemplatePushStatus"></a>

```python
def reset_user_name_template_push_status() -> None
```

##### `reset_user_name_template_suffix` <a name="reset_user_name_template_suffix" id="@cdktf/provider-okta.oauthApp.OauthApp.resetUserNameTemplateSuffix"></a>

```python
def reset_user_name_template_suffix() -> None
```

##### `reset_user_name_template_type` <a name="reset_user_name_template_type" id="@cdktf/provider-okta.oauthApp.OauthApp.resetUserNameTemplateType"></a>

```python
def reset_user_name_template_type() -> None
```

##### `reset_users` <a name="reset_users" id="@cdktf/provider-okta.oauthApp.OauthApp.resetUsers"></a>

```python
def reset_users() -> None
```

##### `reset_wildcard_redirect` <a name="reset_wildcard_redirect" id="@cdktf/provider-okta.oauthApp.OauthApp.resetWildcardRedirect"></a>

```python
def reset_wildcard_redirect() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-okta.oauthApp.OauthApp.isConstruct"></a>

```python
from cdktf_cdktf_provider_okta import oauth_app

oauthApp.OauthApp.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.oauthApp.OauthApp.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-okta.oauthApp.OauthApp.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_okta import oauth_app

oauthApp.OauthApp.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.oauthApp.OauthApp.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-okta.oauthApp.OauthApp.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_okta import oauth_app

oauthApp.OauthApp.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.oauthApp.OauthApp.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.groupsClaim">groups_claim</a></code> | <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference">OauthAppGroupsClaimOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.jwks">jwks</a></code> | <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksList">OauthAppJwksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.logoUrl">logo_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.signOnMode">sign_on_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference">OauthAppTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.users">users</a></code> | <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersList">OauthAppUsersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.accessibilityErrorRedirectUrlInput">accessibility_error_redirect_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.accessibilityLoginRedirectUrlInput">accessibility_login_redirect_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.accessibilitySelfServiceInput">accessibility_self_service_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.adminNoteInput">admin_note_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.appLinksJsonInput">app_links_json_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.appSettingsJsonInput">app_settings_json_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.authenticationPolicyInput">authentication_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.autoKeyRotationInput">auto_key_rotation_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.autoSubmitToolbarInput">auto_submit_toolbar_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.clientBasicSecretInput">client_basic_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.clientUriInput">client_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.consentMethodInput">consent_method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.customClientIdInput">custom_client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.enduserNoteInput">enduser_note_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.grantTypesInput">grant_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.groupsClaimInput">groups_claim_input</a></code> | <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaim">OauthAppGroupsClaim</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.groupsInput">groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.hideIosInput">hide_ios_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.hideWebInput">hide_web_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.implicitAssignmentInput">implicit_assignment_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.issuerModeInput">issuer_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.jwksInput">jwks_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.oauthApp.OauthAppJwks">OauthAppJwks</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.labelInput">label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.loginModeInput">login_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.loginScopesInput">login_scopes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.loginUriInput">login_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.logoInput">logo_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.logoUriInput">logo_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.omitSecretInput">omit_secret_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.pkceRequiredInput">pkce_required_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.policyUriInput">policy_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.postLogoutRedirectUrisInput">post_logout_redirect_uris_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.profileInput">profile_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.redirectUrisInput">redirect_uris_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.refreshTokenLeewayInput">refresh_token_leeway_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.refreshTokenRotationInput">refresh_token_rotation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.responseTypesInput">response_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.skipGroupsInput">skip_groups_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.skipUsersInput">skip_users_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeouts">OauthAppTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.tokenEndpointAuthMethodInput">token_endpoint_auth_method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.tosUriInput">tos_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.userNameTemplateInput">user_name_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.userNameTemplatePushStatusInput">user_name_template_push_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.userNameTemplateSuffixInput">user_name_template_suffix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.userNameTemplateTypeInput">user_name_template_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.usersInput">users_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.oauthApp.OauthAppUsers">OauthAppUsers</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.wildcardRedirectInput">wildcard_redirect_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.accessibilityErrorRedirectUrl">accessibility_error_redirect_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.accessibilityLoginRedirectUrl">accessibility_login_redirect_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.accessibilitySelfService">accessibility_self_service</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.adminNote">admin_note</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.appLinksJson">app_links_json</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.appSettingsJson">app_settings_json</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.authenticationPolicy">authentication_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.autoKeyRotation">auto_key_rotation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.autoSubmitToolbar">auto_submit_toolbar</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.clientBasicSecret">client_basic_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.clientUri">client_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.consentMethod">consent_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.customClientId">custom_client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.enduserNote">enduser_note</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.grantTypes">grant_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.groups">groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.hideIos">hide_ios</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.hideWeb">hide_web</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.implicitAssignment">implicit_assignment</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.issuerMode">issuer_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.label">label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.loginMode">login_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.loginScopes">login_scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.loginUri">login_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.logo">logo</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.logoUri">logo_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.omitSecret">omit_secret</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.pkceRequired">pkce_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.policyUri">policy_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.postLogoutRedirectUris">post_logout_redirect_uris</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.profile">profile</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.redirectUris">redirect_uris</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.refreshTokenLeeway">refresh_token_leeway</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.refreshTokenRotation">refresh_token_rotation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.responseTypes">response_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.skipGroups">skip_groups</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.skipUsers">skip_users</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.tokenEndpointAuthMethod">token_endpoint_auth_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.tosUri">tos_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.userNameTemplate">user_name_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.userNameTemplatePushStatus">user_name_template_push_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.userNameTemplateSuffix">user_name_template_suffix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.userNameTemplateType">user_name_template_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.wildcardRedirect">wildcard_redirect</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.oauthApp.OauthApp.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-okta.oauthApp.OauthApp.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.oauthApp.OauthApp.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-okta.oauthApp.OauthApp.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-okta.oauthApp.OauthApp.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-okta.oauthApp.OauthApp.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-okta.oauthApp.OauthApp.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.oauthApp.OauthApp.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.oauthApp.OauthApp.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.oauthApp.OauthApp.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.oauthApp.OauthApp.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.oauthApp.OauthApp.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.oauthApp.OauthApp.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.oauthApp.OauthApp.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-okta.oauthApp.OauthApp.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `groups_claim`<sup>Required</sup> <a name="groups_claim" id="@cdktf/provider-okta.oauthApp.OauthApp.property.groupsClaim"></a>

```python
groups_claim: OauthAppGroupsClaimOutputReference
```

- *Type:* <a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference">OauthAppGroupsClaimOutputReference</a>

---

##### `jwks`<sup>Required</sup> <a name="jwks" id="@cdktf/provider-okta.oauthApp.OauthApp.property.jwks"></a>

```python
jwks: OauthAppJwksList
```

- *Type:* <a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksList">OauthAppJwksList</a>

---

##### `logo_url`<sup>Required</sup> <a name="logo_url" id="@cdktf/provider-okta.oauthApp.OauthApp.property.logoUrl"></a>

```python
logo_url: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.oauthApp.OauthApp.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `sign_on_mode`<sup>Required</sup> <a name="sign_on_mode" id="@cdktf/provider-okta.oauthApp.OauthApp.property.signOnMode"></a>

```python
sign_on_mode: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-okta.oauthApp.OauthApp.property.timeouts"></a>

```python
timeouts: OauthAppTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference">OauthAppTimeoutsOutputReference</a>

---

##### `users`<sup>Required</sup> <a name="users" id="@cdktf/provider-okta.oauthApp.OauthApp.property.users"></a>

```python
users: OauthAppUsersList
```

- *Type:* <a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersList">OauthAppUsersList</a>

---

##### `accessibility_error_redirect_url_input`<sup>Optional</sup> <a name="accessibility_error_redirect_url_input" id="@cdktf/provider-okta.oauthApp.OauthApp.property.accessibilityErrorRedirectUrlInput"></a>

```python
accessibility_error_redirect_url_input: str
```

- *Type:* str

---

##### `accessibility_login_redirect_url_input`<sup>Optional</sup> <a name="accessibility_login_redirect_url_input" id="@cdktf/provider-okta.oauthApp.OauthApp.property.accessibilityLoginRedirectUrlInput"></a>

```python
accessibility_login_redirect_url_input: str
```

- *Type:* str

---

##### `accessibility_self_service_input`<sup>Optional</sup> <a name="accessibility_self_service_input" id="@cdktf/provider-okta.oauthApp.OauthApp.property.accessibilitySelfServiceInput"></a>

```python
accessibility_self_service_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `admin_note_input`<sup>Optional</sup> <a name="admin_note_input" id="@cdktf/provider-okta.oauthApp.OauthApp.property.adminNoteInput"></a>

```python
admin_note_input: str
```

- *Type:* str

---

##### `app_links_json_input`<sup>Optional</sup> <a name="app_links_json_input" id="@cdktf/provider-okta.oauthApp.OauthApp.property.appLinksJsonInput"></a>

```python
app_links_json_input: str
```

- *Type:* str

---

##### `app_settings_json_input`<sup>Optional</sup> <a name="app_settings_json_input" id="@cdktf/provider-okta.oauthApp.OauthApp.property.appSettingsJsonInput"></a>

```python
app_settings_json_input: str
```

- *Type:* str

---

##### `authentication_policy_input`<sup>Optional</sup> <a name="authentication_policy_input" id="@cdktf/provider-okta.oauthApp.OauthApp.property.authenticationPolicyInput"></a>

```python
authentication_policy_input: str
```

- *Type:* str

---

##### `auto_key_rotation_input`<sup>Optional</sup> <a name="auto_key_rotation_input" id="@cdktf/provider-okta.oauthApp.OauthApp.property.autoKeyRotationInput"></a>

```python
auto_key_rotation_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_submit_toolbar_input`<sup>Optional</sup> <a name="auto_submit_toolbar_input" id="@cdktf/provider-okta.oauthApp.OauthApp.property.autoSubmitToolbarInput"></a>

```python
auto_submit_toolbar_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `client_basic_secret_input`<sup>Optional</sup> <a name="client_basic_secret_input" id="@cdktf/provider-okta.oauthApp.OauthApp.property.clientBasicSecretInput"></a>

```python
client_basic_secret_input: str
```

- *Type:* str

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktf/provider-okta.oauthApp.OauthApp.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `client_uri_input`<sup>Optional</sup> <a name="client_uri_input" id="@cdktf/provider-okta.oauthApp.OauthApp.property.clientUriInput"></a>

```python
client_uri_input: str
```

- *Type:* str

---

##### `consent_method_input`<sup>Optional</sup> <a name="consent_method_input" id="@cdktf/provider-okta.oauthApp.OauthApp.property.consentMethodInput"></a>

```python
consent_method_input: str
```

- *Type:* str

---

##### `custom_client_id_input`<sup>Optional</sup> <a name="custom_client_id_input" id="@cdktf/provider-okta.oauthApp.OauthApp.property.customClientIdInput"></a>

```python
custom_client_id_input: str
```

- *Type:* str

---

##### `enduser_note_input`<sup>Optional</sup> <a name="enduser_note_input" id="@cdktf/provider-okta.oauthApp.OauthApp.property.enduserNoteInput"></a>

```python
enduser_note_input: str
```

- *Type:* str

---

##### `grant_types_input`<sup>Optional</sup> <a name="grant_types_input" id="@cdktf/provider-okta.oauthApp.OauthApp.property.grantTypesInput"></a>

```python
grant_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `groups_claim_input`<sup>Optional</sup> <a name="groups_claim_input" id="@cdktf/provider-okta.oauthApp.OauthApp.property.groupsClaimInput"></a>

```python
groups_claim_input: OauthAppGroupsClaim
```

- *Type:* <a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaim">OauthAppGroupsClaim</a>

---

##### `groups_input`<sup>Optional</sup> <a name="groups_input" id="@cdktf/provider-okta.oauthApp.OauthApp.property.groupsInput"></a>

```python
groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `hide_ios_input`<sup>Optional</sup> <a name="hide_ios_input" id="@cdktf/provider-okta.oauthApp.OauthApp.property.hideIosInput"></a>

```python
hide_ios_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `hide_web_input`<sup>Optional</sup> <a name="hide_web_input" id="@cdktf/provider-okta.oauthApp.OauthApp.property.hideWebInput"></a>

```python
hide_web_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-okta.oauthApp.OauthApp.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `implicit_assignment_input`<sup>Optional</sup> <a name="implicit_assignment_input" id="@cdktf/provider-okta.oauthApp.OauthApp.property.implicitAssignmentInput"></a>

```python
implicit_assignment_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `issuer_mode_input`<sup>Optional</sup> <a name="issuer_mode_input" id="@cdktf/provider-okta.oauthApp.OauthApp.property.issuerModeInput"></a>

```python
issuer_mode_input: str
```

- *Type:* str

---

##### `jwks_input`<sup>Optional</sup> <a name="jwks_input" id="@cdktf/provider-okta.oauthApp.OauthApp.property.jwksInput"></a>

```python
jwks_input: typing.Union[IResolvable, typing.List[OauthAppJwks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.oauthApp.OauthAppJwks">OauthAppJwks</a>]]

---

##### `label_input`<sup>Optional</sup> <a name="label_input" id="@cdktf/provider-okta.oauthApp.OauthApp.property.labelInput"></a>

```python
label_input: str
```

- *Type:* str

---

##### `login_mode_input`<sup>Optional</sup> <a name="login_mode_input" id="@cdktf/provider-okta.oauthApp.OauthApp.property.loginModeInput"></a>

```python
login_mode_input: str
```

- *Type:* str

---

##### `login_scopes_input`<sup>Optional</sup> <a name="login_scopes_input" id="@cdktf/provider-okta.oauthApp.OauthApp.property.loginScopesInput"></a>

```python
login_scopes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `login_uri_input`<sup>Optional</sup> <a name="login_uri_input" id="@cdktf/provider-okta.oauthApp.OauthApp.property.loginUriInput"></a>

```python
login_uri_input: str
```

- *Type:* str

---

##### `logo_input`<sup>Optional</sup> <a name="logo_input" id="@cdktf/provider-okta.oauthApp.OauthApp.property.logoInput"></a>

```python
logo_input: str
```

- *Type:* str

---

##### `logo_uri_input`<sup>Optional</sup> <a name="logo_uri_input" id="@cdktf/provider-okta.oauthApp.OauthApp.property.logoUriInput"></a>

```python
logo_uri_input: str
```

- *Type:* str

---

##### `omit_secret_input`<sup>Optional</sup> <a name="omit_secret_input" id="@cdktf/provider-okta.oauthApp.OauthApp.property.omitSecretInput"></a>

```python
omit_secret_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `pkce_required_input`<sup>Optional</sup> <a name="pkce_required_input" id="@cdktf/provider-okta.oauthApp.OauthApp.property.pkceRequiredInput"></a>

```python
pkce_required_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `policy_uri_input`<sup>Optional</sup> <a name="policy_uri_input" id="@cdktf/provider-okta.oauthApp.OauthApp.property.policyUriInput"></a>

```python
policy_uri_input: str
```

- *Type:* str

---

##### `post_logout_redirect_uris_input`<sup>Optional</sup> <a name="post_logout_redirect_uris_input" id="@cdktf/provider-okta.oauthApp.OauthApp.property.postLogoutRedirectUrisInput"></a>

```python
post_logout_redirect_uris_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `profile_input`<sup>Optional</sup> <a name="profile_input" id="@cdktf/provider-okta.oauthApp.OauthApp.property.profileInput"></a>

```python
profile_input: str
```

- *Type:* str

---

##### `redirect_uris_input`<sup>Optional</sup> <a name="redirect_uris_input" id="@cdktf/provider-okta.oauthApp.OauthApp.property.redirectUrisInput"></a>

```python
redirect_uris_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `refresh_token_leeway_input`<sup>Optional</sup> <a name="refresh_token_leeway_input" id="@cdktf/provider-okta.oauthApp.OauthApp.property.refreshTokenLeewayInput"></a>

```python
refresh_token_leeway_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `refresh_token_rotation_input`<sup>Optional</sup> <a name="refresh_token_rotation_input" id="@cdktf/provider-okta.oauthApp.OauthApp.property.refreshTokenRotationInput"></a>

```python
refresh_token_rotation_input: str
```

- *Type:* str

---

##### `response_types_input`<sup>Optional</sup> <a name="response_types_input" id="@cdktf/provider-okta.oauthApp.OauthApp.property.responseTypesInput"></a>

```python
response_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `skip_groups_input`<sup>Optional</sup> <a name="skip_groups_input" id="@cdktf/provider-okta.oauthApp.OauthApp.property.skipGroupsInput"></a>

```python
skip_groups_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `skip_users_input`<sup>Optional</sup> <a name="skip_users_input" id="@cdktf/provider-okta.oauthApp.OauthApp.property.skipUsersInput"></a>

```python
skip_users_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-okta.oauthApp.OauthApp.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-okta.oauthApp.OauthApp.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[OauthAppTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeouts">OauthAppTimeouts</a>, cdktf.IResolvable]

---

##### `token_endpoint_auth_method_input`<sup>Optional</sup> <a name="token_endpoint_auth_method_input" id="@cdktf/provider-okta.oauthApp.OauthApp.property.tokenEndpointAuthMethodInput"></a>

```python
token_endpoint_auth_method_input: str
```

- *Type:* str

---

##### `tos_uri_input`<sup>Optional</sup> <a name="tos_uri_input" id="@cdktf/provider-okta.oauthApp.OauthApp.property.tosUriInput"></a>

```python
tos_uri_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-okta.oauthApp.OauthApp.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `user_name_template_input`<sup>Optional</sup> <a name="user_name_template_input" id="@cdktf/provider-okta.oauthApp.OauthApp.property.userNameTemplateInput"></a>

```python
user_name_template_input: str
```

- *Type:* str

---

##### `user_name_template_push_status_input`<sup>Optional</sup> <a name="user_name_template_push_status_input" id="@cdktf/provider-okta.oauthApp.OauthApp.property.userNameTemplatePushStatusInput"></a>

```python
user_name_template_push_status_input: str
```

- *Type:* str

---

##### `user_name_template_suffix_input`<sup>Optional</sup> <a name="user_name_template_suffix_input" id="@cdktf/provider-okta.oauthApp.OauthApp.property.userNameTemplateSuffixInput"></a>

```python
user_name_template_suffix_input: str
```

- *Type:* str

---

##### `user_name_template_type_input`<sup>Optional</sup> <a name="user_name_template_type_input" id="@cdktf/provider-okta.oauthApp.OauthApp.property.userNameTemplateTypeInput"></a>

```python
user_name_template_type_input: str
```

- *Type:* str

---

##### `users_input`<sup>Optional</sup> <a name="users_input" id="@cdktf/provider-okta.oauthApp.OauthApp.property.usersInput"></a>

```python
users_input: typing.Union[IResolvable, typing.List[OauthAppUsers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.oauthApp.OauthAppUsers">OauthAppUsers</a>]]

---

##### `wildcard_redirect_input`<sup>Optional</sup> <a name="wildcard_redirect_input" id="@cdktf/provider-okta.oauthApp.OauthApp.property.wildcardRedirectInput"></a>

```python
wildcard_redirect_input: str
```

- *Type:* str

---

##### `accessibility_error_redirect_url`<sup>Required</sup> <a name="accessibility_error_redirect_url" id="@cdktf/provider-okta.oauthApp.OauthApp.property.accessibilityErrorRedirectUrl"></a>

```python
accessibility_error_redirect_url: str
```

- *Type:* str

---

##### `accessibility_login_redirect_url`<sup>Required</sup> <a name="accessibility_login_redirect_url" id="@cdktf/provider-okta.oauthApp.OauthApp.property.accessibilityLoginRedirectUrl"></a>

```python
accessibility_login_redirect_url: str
```

- *Type:* str

---

##### `accessibility_self_service`<sup>Required</sup> <a name="accessibility_self_service" id="@cdktf/provider-okta.oauthApp.OauthApp.property.accessibilitySelfService"></a>

```python
accessibility_self_service: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `admin_note`<sup>Required</sup> <a name="admin_note" id="@cdktf/provider-okta.oauthApp.OauthApp.property.adminNote"></a>

```python
admin_note: str
```

- *Type:* str

---

##### `app_links_json`<sup>Required</sup> <a name="app_links_json" id="@cdktf/provider-okta.oauthApp.OauthApp.property.appLinksJson"></a>

```python
app_links_json: str
```

- *Type:* str

---

##### `app_settings_json`<sup>Required</sup> <a name="app_settings_json" id="@cdktf/provider-okta.oauthApp.OauthApp.property.appSettingsJson"></a>

```python
app_settings_json: str
```

- *Type:* str

---

##### `authentication_policy`<sup>Required</sup> <a name="authentication_policy" id="@cdktf/provider-okta.oauthApp.OauthApp.property.authenticationPolicy"></a>

```python
authentication_policy: str
```

- *Type:* str

---

##### `auto_key_rotation`<sup>Required</sup> <a name="auto_key_rotation" id="@cdktf/provider-okta.oauthApp.OauthApp.property.autoKeyRotation"></a>

```python
auto_key_rotation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_submit_toolbar`<sup>Required</sup> <a name="auto_submit_toolbar" id="@cdktf/provider-okta.oauthApp.OauthApp.property.autoSubmitToolbar"></a>

```python
auto_submit_toolbar: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `client_basic_secret`<sup>Required</sup> <a name="client_basic_secret" id="@cdktf/provider-okta.oauthApp.OauthApp.property.clientBasicSecret"></a>

```python
client_basic_secret: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-okta.oauthApp.OauthApp.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_uri`<sup>Required</sup> <a name="client_uri" id="@cdktf/provider-okta.oauthApp.OauthApp.property.clientUri"></a>

```python
client_uri: str
```

- *Type:* str

---

##### `consent_method`<sup>Required</sup> <a name="consent_method" id="@cdktf/provider-okta.oauthApp.OauthApp.property.consentMethod"></a>

```python
consent_method: str
```

- *Type:* str

---

##### `custom_client_id`<sup>Required</sup> <a name="custom_client_id" id="@cdktf/provider-okta.oauthApp.OauthApp.property.customClientId"></a>

```python
custom_client_id: str
```

- *Type:* str

---

##### `enduser_note`<sup>Required</sup> <a name="enduser_note" id="@cdktf/provider-okta.oauthApp.OauthApp.property.enduserNote"></a>

```python
enduser_note: str
```

- *Type:* str

---

##### `grant_types`<sup>Required</sup> <a name="grant_types" id="@cdktf/provider-okta.oauthApp.OauthApp.property.grantTypes"></a>

```python
grant_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `groups`<sup>Required</sup> <a name="groups" id="@cdktf/provider-okta.oauthApp.OauthApp.property.groups"></a>

```python
groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `hide_ios`<sup>Required</sup> <a name="hide_ios" id="@cdktf/provider-okta.oauthApp.OauthApp.property.hideIos"></a>

```python
hide_ios: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `hide_web`<sup>Required</sup> <a name="hide_web" id="@cdktf/provider-okta.oauthApp.OauthApp.property.hideWeb"></a>

```python
hide_web: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.oauthApp.OauthApp.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `implicit_assignment`<sup>Required</sup> <a name="implicit_assignment" id="@cdktf/provider-okta.oauthApp.OauthApp.property.implicitAssignment"></a>

```python
implicit_assignment: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `issuer_mode`<sup>Required</sup> <a name="issuer_mode" id="@cdktf/provider-okta.oauthApp.OauthApp.property.issuerMode"></a>

```python
issuer_mode: str
```

- *Type:* str

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-okta.oauthApp.OauthApp.property.label"></a>

```python
label: str
```

- *Type:* str

---

##### `login_mode`<sup>Required</sup> <a name="login_mode" id="@cdktf/provider-okta.oauthApp.OauthApp.property.loginMode"></a>

```python
login_mode: str
```

- *Type:* str

---

##### `login_scopes`<sup>Required</sup> <a name="login_scopes" id="@cdktf/provider-okta.oauthApp.OauthApp.property.loginScopes"></a>

```python
login_scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `login_uri`<sup>Required</sup> <a name="login_uri" id="@cdktf/provider-okta.oauthApp.OauthApp.property.loginUri"></a>

```python
login_uri: str
```

- *Type:* str

---

##### `logo`<sup>Required</sup> <a name="logo" id="@cdktf/provider-okta.oauthApp.OauthApp.property.logo"></a>

```python
logo: str
```

- *Type:* str

---

##### `logo_uri`<sup>Required</sup> <a name="logo_uri" id="@cdktf/provider-okta.oauthApp.OauthApp.property.logoUri"></a>

```python
logo_uri: str
```

- *Type:* str

---

##### `omit_secret`<sup>Required</sup> <a name="omit_secret" id="@cdktf/provider-okta.oauthApp.OauthApp.property.omitSecret"></a>

```python
omit_secret: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `pkce_required`<sup>Required</sup> <a name="pkce_required" id="@cdktf/provider-okta.oauthApp.OauthApp.property.pkceRequired"></a>

```python
pkce_required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `policy_uri`<sup>Required</sup> <a name="policy_uri" id="@cdktf/provider-okta.oauthApp.OauthApp.property.policyUri"></a>

```python
policy_uri: str
```

- *Type:* str

---

##### `post_logout_redirect_uris`<sup>Required</sup> <a name="post_logout_redirect_uris" id="@cdktf/provider-okta.oauthApp.OauthApp.property.postLogoutRedirectUris"></a>

```python
post_logout_redirect_uris: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `profile`<sup>Required</sup> <a name="profile" id="@cdktf/provider-okta.oauthApp.OauthApp.property.profile"></a>

```python
profile: str
```

- *Type:* str

---

##### `redirect_uris`<sup>Required</sup> <a name="redirect_uris" id="@cdktf/provider-okta.oauthApp.OauthApp.property.redirectUris"></a>

```python
redirect_uris: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `refresh_token_leeway`<sup>Required</sup> <a name="refresh_token_leeway" id="@cdktf/provider-okta.oauthApp.OauthApp.property.refreshTokenLeeway"></a>

```python
refresh_token_leeway: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `refresh_token_rotation`<sup>Required</sup> <a name="refresh_token_rotation" id="@cdktf/provider-okta.oauthApp.OauthApp.property.refreshTokenRotation"></a>

```python
refresh_token_rotation: str
```

- *Type:* str

---

##### `response_types`<sup>Required</sup> <a name="response_types" id="@cdktf/provider-okta.oauthApp.OauthApp.property.responseTypes"></a>

```python
response_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `skip_groups`<sup>Required</sup> <a name="skip_groups" id="@cdktf/provider-okta.oauthApp.OauthApp.property.skipGroups"></a>

```python
skip_groups: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `skip_users`<sup>Required</sup> <a name="skip_users" id="@cdktf/provider-okta.oauthApp.OauthApp.property.skipUsers"></a>

```python
skip_users: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.oauthApp.OauthApp.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `token_endpoint_auth_method`<sup>Required</sup> <a name="token_endpoint_auth_method" id="@cdktf/provider-okta.oauthApp.OauthApp.property.tokenEndpointAuthMethod"></a>

```python
token_endpoint_auth_method: str
```

- *Type:* str

---

##### `tos_uri`<sup>Required</sup> <a name="tos_uri" id="@cdktf/provider-okta.oauthApp.OauthApp.property.tosUri"></a>

```python
tos_uri: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.oauthApp.OauthApp.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `user_name_template`<sup>Required</sup> <a name="user_name_template" id="@cdktf/provider-okta.oauthApp.OauthApp.property.userNameTemplate"></a>

```python
user_name_template: str
```

- *Type:* str

---

##### `user_name_template_push_status`<sup>Required</sup> <a name="user_name_template_push_status" id="@cdktf/provider-okta.oauthApp.OauthApp.property.userNameTemplatePushStatus"></a>

```python
user_name_template_push_status: str
```

- *Type:* str

---

##### `user_name_template_suffix`<sup>Required</sup> <a name="user_name_template_suffix" id="@cdktf/provider-okta.oauthApp.OauthApp.property.userNameTemplateSuffix"></a>

```python
user_name_template_suffix: str
```

- *Type:* str

---

##### `user_name_template_type`<sup>Required</sup> <a name="user_name_template_type" id="@cdktf/provider-okta.oauthApp.OauthApp.property.userNameTemplateType"></a>

```python
user_name_template_type: str
```

- *Type:* str

---

##### `wildcard_redirect`<sup>Required</sup> <a name="wildcard_redirect" id="@cdktf/provider-okta.oauthApp.OauthApp.property.wildcardRedirect"></a>

```python
wildcard_redirect: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.oauthApp.OauthApp.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OauthAppConfig <a name="OauthAppConfig" id="@cdktf/provider-okta.oauthApp.OauthAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import oauth_app

oauthApp.OauthAppConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  label: str,
  type: str,
  accessibility_error_redirect_url: str = None,
  accessibility_login_redirect_url: str = None,
  accessibility_self_service: typing.Union[bool, IResolvable] = None,
  admin_note: str = None,
  app_links_json: str = None,
  app_settings_json: str = None,
  authentication_policy: str = None,
  auto_key_rotation: typing.Union[bool, IResolvable] = None,
  auto_submit_toolbar: typing.Union[bool, IResolvable] = None,
  client_basic_secret: str = None,
  client_id: str = None,
  client_uri: str = None,
  consent_method: str = None,
  custom_client_id: str = None,
  enduser_note: str = None,
  grant_types: typing.List[str] = None,
  groups: typing.List[str] = None,
  groups_claim: OauthAppGroupsClaim = None,
  hide_ios: typing.Union[bool, IResolvable] = None,
  hide_web: typing.Union[bool, IResolvable] = None,
  id: str = None,
  implicit_assignment: typing.Union[bool, IResolvable] = None,
  issuer_mode: str = None,
  jwks: typing.Union[IResolvable, typing.List[OauthAppJwks]] = None,
  login_mode: str = None,
  login_scopes: typing.List[str] = None,
  login_uri: str = None,
  logo: str = None,
  logo_uri: str = None,
  omit_secret: typing.Union[bool, IResolvable] = None,
  pkce_required: typing.Union[bool, IResolvable] = None,
  policy_uri: str = None,
  post_logout_redirect_uris: typing.List[str] = None,
  profile: str = None,
  redirect_uris: typing.List[str] = None,
  refresh_token_leeway: typing.Union[int, float] = None,
  refresh_token_rotation: str = None,
  response_types: typing.List[str] = None,
  skip_groups: typing.Union[bool, IResolvable] = None,
  skip_users: typing.Union[bool, IResolvable] = None,
  status: str = None,
  timeouts: OauthAppTimeouts = None,
  token_endpoint_auth_method: str = None,
  tos_uri: str = None,
  user_name_template: str = None,
  user_name_template_push_status: str = None,
  user_name_template_suffix: str = None,
  user_name_template_type: str = None,
  users: typing.Union[IResolvable, typing.List[OauthAppUsers]] = None,
  wildcard_redirect: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.label">label</a></code> | <code>str</code> | Pretty name of app. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.type">type</a></code> | <code>str</code> | The type of client application. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.accessibilityErrorRedirectUrl">accessibility_error_redirect_url</a></code> | <code>str</code> | Custom error page URL. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.accessibilityLoginRedirectUrl">accessibility_login_redirect_url</a></code> | <code>str</code> | Custom login page URL. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.accessibilitySelfService">accessibility_self_service</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable self service. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.adminNote">admin_note</a></code> | <code>str</code> | Application notes for admins. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.appLinksJson">app_links_json</a></code> | <code>str</code> | Displays specific appLinks for the app. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.appSettingsJson">app_settings_json</a></code> | <code>str</code> | Application settings in JSON format. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.authenticationPolicy">authentication_policy</a></code> | <code>str</code> | Id of this apps authentication policy. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.autoKeyRotation">auto_key_rotation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Requested key rotation mode. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.autoSubmitToolbar">auto_submit_toolbar</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Display auto submit toolbar. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.clientBasicSecret">client_basic_secret</a></code> | <code>str</code> | OAuth client secret key, this can be set when token_endpoint_auth_method is client_secret_basic. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.clientId">client_id</a></code> | <code>str</code> | OAuth client ID. If set during creation, app is created with this id. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.clientUri">client_uri</a></code> | <code>str</code> | URI to a web page providing information about the client. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.consentMethod">consent_method</a></code> | <code>str</code> | *Early Access Property*. Indicates whether user consent is required or implicit. Valid values: REQUIRED, TRUSTED. Default value is TRUSTED. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.customClientId">custom_client_id</a></code> | <code>str</code> | **Deprecated** This property allows you to set your client_id during creation. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.enduserNote">enduser_note</a></code> | <code>str</code> | Application notes for end users. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.grantTypes">grant_types</a></code> | <code>typing.List[str]</code> | List of OAuth 2.0 grant types. Conditional validation params found here https://developer.okta.com/docs/api/resources/apps#credentials-settings-details. Defaults to minimum requirements per app type. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.groups">groups</a></code> | <code>typing.List[str]</code> | Groups associated with the application. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.groupsClaim">groups_claim</a></code> | <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaim">OauthAppGroupsClaim</a></code> | groups_claim block. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.hideIos">hide_ios</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Do not display application icon on mobile app. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.hideWeb">hide_web</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Do not display application icon to users. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#id OauthApp#id}. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.implicitAssignment">implicit_assignment</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *Early Access Property*. Enable Federation Broker Mode. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.issuerMode">issuer_mode</a></code> | <code>str</code> | *Early Access Property*. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.jwks">jwks</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.oauthApp.OauthAppJwks">OauthAppJwks</a>]]</code> | jwks block. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.loginMode">login_mode</a></code> | <code>str</code> | The type of Idp-Initiated login that the client supports, if any. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.loginScopes">login_scopes</a></code> | <code>typing.List[str]</code> | List of scopes to use for the request. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.loginUri">login_uri</a></code> | <code>str</code> | URI that initiates login. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.logo">logo</a></code> | <code>str</code> | Local path to logo of the application. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.logoUri">logo_uri</a></code> | <code>str</code> | URI that references a logo for the client. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.omitSecret">omit_secret</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | This tells the provider not to persist the application's secret to state. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.pkceRequired">pkce_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Require Proof Key for Code Exchange (PKCE) for additional verification key rotation mode. See: https://developer.okta.com/docs/reference/api/apps/#oauth-credential-object. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.policyUri">policy_uri</a></code> | <code>str</code> | URI to web page providing client policy document. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.postLogoutRedirectUris">post_logout_redirect_uris</a></code> | <code>typing.List[str]</code> | List of URIs for redirection after logout. Note: see okta_app_oauth_post_logout_redirect_uri for appending to this list in a decentralized way. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.profile">profile</a></code> | <code>str</code> | Custom JSON that represents an OAuth application's profile. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.redirectUris">redirect_uris</a></code> | <code>typing.List[str]</code> | List of URIs for use in the redirect-based flow. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.refreshTokenLeeway">refresh_token_leeway</a></code> | <code>typing.Union[int, float]</code> | *Early Access Property* Grace period for token rotation. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.refreshTokenRotation">refresh_token_rotation</a></code> | <code>str</code> | *Early Access Property* Refresh token rotation behavior. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.responseTypes">response_types</a></code> | <code>typing.List[str]</code> | List of OAuth 2.0 response type strings. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.skipGroups">skip_groups</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Ignore groups sync. This is a temporary solution until 'groups' field is supported in all the app-like resources. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.skipUsers">skip_users</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Ignore users sync. This is a temporary solution until 'users' field is supported in all the app-like resources. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.status">status</a></code> | <code>str</code> | Status of application. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeouts">OauthAppTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.tokenEndpointAuthMethod">token_endpoint_auth_method</a></code> | <code>str</code> | Requested authentication method for the token endpoint. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.tosUri">tos_uri</a></code> | <code>str</code> | URI to web page providing client tos (terms of service). |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.userNameTemplate">user_name_template</a></code> | <code>str</code> | Username template. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.userNameTemplatePushStatus">user_name_template_push_status</a></code> | <code>str</code> | Push username on update. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.userNameTemplateSuffix">user_name_template_suffix</a></code> | <code>str</code> | Username template suffix. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.userNameTemplateType">user_name_template_type</a></code> | <code>str</code> | Username template type. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.users">users</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.oauthApp.OauthAppUsers">OauthAppUsers</a>]]</code> | users block. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.wildcardRedirect">wildcard_redirect</a></code> | <code>str</code> | *Early Access Property*. Indicates if the client is allowed to use wildcard matching of redirect_uris. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.label"></a>

```python
label: str
```

- *Type:* str

Pretty name of app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#label OauthApp#label}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The type of client application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#type OauthApp#type}

---

##### `accessibility_error_redirect_url`<sup>Optional</sup> <a name="accessibility_error_redirect_url" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.accessibilityErrorRedirectUrl"></a>

```python
accessibility_error_redirect_url: str
```

- *Type:* str

Custom error page URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#accessibility_error_redirect_url OauthApp#accessibility_error_redirect_url}

---

##### `accessibility_login_redirect_url`<sup>Optional</sup> <a name="accessibility_login_redirect_url" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.accessibilityLoginRedirectUrl"></a>

```python
accessibility_login_redirect_url: str
```

- *Type:* str

Custom login page URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#accessibility_login_redirect_url OauthApp#accessibility_login_redirect_url}

---

##### `accessibility_self_service`<sup>Optional</sup> <a name="accessibility_self_service" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.accessibilitySelfService"></a>

```python
accessibility_self_service: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable self service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#accessibility_self_service OauthApp#accessibility_self_service}

---

##### `admin_note`<sup>Optional</sup> <a name="admin_note" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.adminNote"></a>

```python
admin_note: str
```

- *Type:* str

Application notes for admins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#admin_note OauthApp#admin_note}

---

##### `app_links_json`<sup>Optional</sup> <a name="app_links_json" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.appLinksJson"></a>

```python
app_links_json: str
```

- *Type:* str

Displays specific appLinks for the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#app_links_json OauthApp#app_links_json}

---

##### `app_settings_json`<sup>Optional</sup> <a name="app_settings_json" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.appSettingsJson"></a>

```python
app_settings_json: str
```

- *Type:* str

Application settings in JSON format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#app_settings_json OauthApp#app_settings_json}

---

##### `authentication_policy`<sup>Optional</sup> <a name="authentication_policy" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.authenticationPolicy"></a>

```python
authentication_policy: str
```

- *Type:* str

Id of this apps authentication policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#authentication_policy OauthApp#authentication_policy}

---

##### `auto_key_rotation`<sup>Optional</sup> <a name="auto_key_rotation" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.autoKeyRotation"></a>

```python
auto_key_rotation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Requested key rotation mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#auto_key_rotation OauthApp#auto_key_rotation}

---

##### `auto_submit_toolbar`<sup>Optional</sup> <a name="auto_submit_toolbar" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.autoSubmitToolbar"></a>

```python
auto_submit_toolbar: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Display auto submit toolbar.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#auto_submit_toolbar OauthApp#auto_submit_toolbar}

---

##### `client_basic_secret`<sup>Optional</sup> <a name="client_basic_secret" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.clientBasicSecret"></a>

```python
client_basic_secret: str
```

- *Type:* str

OAuth client secret key, this can be set when token_endpoint_auth_method is client_secret_basic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#client_basic_secret OauthApp#client_basic_secret}

---

##### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

OAuth client ID. If set during creation, app is created with this id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#client_id OauthApp#client_id}

---

##### `client_uri`<sup>Optional</sup> <a name="client_uri" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.clientUri"></a>

```python
client_uri: str
```

- *Type:* str

URI to a web page providing information about the client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#client_uri OauthApp#client_uri}

---

##### `consent_method`<sup>Optional</sup> <a name="consent_method" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.consentMethod"></a>

```python
consent_method: str
```

- *Type:* str

*Early Access Property*. Indicates whether user consent is required or implicit. Valid values: REQUIRED, TRUSTED. Default value is TRUSTED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#consent_method OauthApp#consent_method}

---

##### `custom_client_id`<sup>Optional</sup> <a name="custom_client_id" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.customClientId"></a>

```python
custom_client_id: str
```

- *Type:* str

**Deprecated** This property allows you to set your client_id during creation.

NOTE: updating after creation will be a no-op, use client_id for that behavior instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#custom_client_id OauthApp#custom_client_id}

---

##### `enduser_note`<sup>Optional</sup> <a name="enduser_note" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.enduserNote"></a>

```python
enduser_note: str
```

- *Type:* str

Application notes for end users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#enduser_note OauthApp#enduser_note}

---

##### `grant_types`<sup>Optional</sup> <a name="grant_types" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.grantTypes"></a>

```python
grant_types: typing.List[str]
```

- *Type:* typing.List[str]

List of OAuth 2.0 grant types. Conditional validation params found here https://developer.okta.com/docs/api/resources/apps#credentials-settings-details. Defaults to minimum requirements per app type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#grant_types OauthApp#grant_types}

---

##### `groups`<sup>Optional</sup> <a name="groups" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.groups"></a>

```python
groups: typing.List[str]
```

- *Type:* typing.List[str]

Groups associated with the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#groups OauthApp#groups}

---

##### `groups_claim`<sup>Optional</sup> <a name="groups_claim" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.groupsClaim"></a>

```python
groups_claim: OauthAppGroupsClaim
```

- *Type:* <a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaim">OauthAppGroupsClaim</a>

groups_claim block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#groups_claim OauthApp#groups_claim}

---

##### `hide_ios`<sup>Optional</sup> <a name="hide_ios" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.hideIos"></a>

```python
hide_ios: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Do not display application icon on mobile app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#hide_ios OauthApp#hide_ios}

---

##### `hide_web`<sup>Optional</sup> <a name="hide_web" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.hideWeb"></a>

```python
hide_web: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Do not display application icon to users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#hide_web OauthApp#hide_web}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#id OauthApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `implicit_assignment`<sup>Optional</sup> <a name="implicit_assignment" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.implicitAssignment"></a>

```python
implicit_assignment: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

*Early Access Property*. Enable Federation Broker Mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#implicit_assignment OauthApp#implicit_assignment}

---

##### `issuer_mode`<sup>Optional</sup> <a name="issuer_mode" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.issuerMode"></a>

```python
issuer_mode: str
```

- *Type:* str

*Early Access Property*.

Indicates whether the Okta Authorization Server uses the original Okta org domain URL or a custom domain URL as the issuer of ID token for this client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#issuer_mode OauthApp#issuer_mode}

---

##### `jwks`<sup>Optional</sup> <a name="jwks" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.jwks"></a>

```python
jwks: typing.Union[IResolvable, typing.List[OauthAppJwks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.oauthApp.OauthAppJwks">OauthAppJwks</a>]]

jwks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#jwks OauthApp#jwks}

---

##### `login_mode`<sup>Optional</sup> <a name="login_mode" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.loginMode"></a>

```python
login_mode: str
```

- *Type:* str

The type of Idp-Initiated login that the client supports, if any.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#login_mode OauthApp#login_mode}

---

##### `login_scopes`<sup>Optional</sup> <a name="login_scopes" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.loginScopes"></a>

```python
login_scopes: typing.List[str]
```

- *Type:* typing.List[str]

List of scopes to use for the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#login_scopes OauthApp#login_scopes}

---

##### `login_uri`<sup>Optional</sup> <a name="login_uri" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.loginUri"></a>

```python
login_uri: str
```

- *Type:* str

URI that initiates login.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#login_uri OauthApp#login_uri}

---

##### `logo`<sup>Optional</sup> <a name="logo" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.logo"></a>

```python
logo: str
```

- *Type:* str

Local path to logo of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#logo OauthApp#logo}

---

##### `logo_uri`<sup>Optional</sup> <a name="logo_uri" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.logoUri"></a>

```python
logo_uri: str
```

- *Type:* str

URI that references a logo for the client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#logo_uri OauthApp#logo_uri}

---

##### `omit_secret`<sup>Optional</sup> <a name="omit_secret" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.omitSecret"></a>

```python
omit_secret: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

This tells the provider not to persist the application's secret to state.

If this is ever changes from true => false your app will be recreated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#omit_secret OauthApp#omit_secret}

---

##### `pkce_required`<sup>Optional</sup> <a name="pkce_required" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.pkceRequired"></a>

```python
pkce_required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Require Proof Key for Code Exchange (PKCE) for additional verification key rotation mode. See: https://developer.okta.com/docs/reference/api/apps/#oauth-credential-object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#pkce_required OauthApp#pkce_required}

---

##### `policy_uri`<sup>Optional</sup> <a name="policy_uri" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.policyUri"></a>

```python
policy_uri: str
```

- *Type:* str

URI to web page providing client policy document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#policy_uri OauthApp#policy_uri}

---

##### `post_logout_redirect_uris`<sup>Optional</sup> <a name="post_logout_redirect_uris" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.postLogoutRedirectUris"></a>

```python
post_logout_redirect_uris: typing.List[str]
```

- *Type:* typing.List[str]

List of URIs for redirection after logout. Note: see okta_app_oauth_post_logout_redirect_uri for appending to this list in a decentralized way.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#post_logout_redirect_uris OauthApp#post_logout_redirect_uris}

---

##### `profile`<sup>Optional</sup> <a name="profile" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.profile"></a>

```python
profile: str
```

- *Type:* str

Custom JSON that represents an OAuth application's profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#profile OauthApp#profile}

---

##### `redirect_uris`<sup>Optional</sup> <a name="redirect_uris" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.redirectUris"></a>

```python
redirect_uris: typing.List[str]
```

- *Type:* typing.List[str]

List of URIs for use in the redirect-based flow.

This is required for all application types except service. Note: see okta_app_oauth_redirect_uri for appending to this list in a decentralized way.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#redirect_uris OauthApp#redirect_uris}

---

##### `refresh_token_leeway`<sup>Optional</sup> <a name="refresh_token_leeway" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.refreshTokenLeeway"></a>

```python
refresh_token_leeway: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

*Early Access Property* Grace period for token rotation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#refresh_token_leeway OauthApp#refresh_token_leeway}

---

##### `refresh_token_rotation`<sup>Optional</sup> <a name="refresh_token_rotation" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.refreshTokenRotation"></a>

```python
refresh_token_rotation: str
```

- *Type:* str

*Early Access Property* Refresh token rotation behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#refresh_token_rotation OauthApp#refresh_token_rotation}

---

##### `response_types`<sup>Optional</sup> <a name="response_types" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.responseTypes"></a>

```python
response_types: typing.List[str]
```

- *Type:* typing.List[str]

List of OAuth 2.0 response type strings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#response_types OauthApp#response_types}

---

##### `skip_groups`<sup>Optional</sup> <a name="skip_groups" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.skipGroups"></a>

```python
skip_groups: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Ignore groups sync. This is a temporary solution until 'groups' field is supported in all the app-like resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#skip_groups OauthApp#skip_groups}

---

##### `skip_users`<sup>Optional</sup> <a name="skip_users" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.skipUsers"></a>

```python
skip_users: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Ignore users sync. This is a temporary solution until 'users' field is supported in all the app-like resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#skip_users OauthApp#skip_users}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.status"></a>

```python
status: str
```

- *Type:* str

Status of application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#status OauthApp#status}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.timeouts"></a>

```python
timeouts: OauthAppTimeouts
```

- *Type:* <a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeouts">OauthAppTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#timeouts OauthApp#timeouts}

---

##### `token_endpoint_auth_method`<sup>Optional</sup> <a name="token_endpoint_auth_method" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.tokenEndpointAuthMethod"></a>

```python
token_endpoint_auth_method: str
```

- *Type:* str

Requested authentication method for the token endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#token_endpoint_auth_method OauthApp#token_endpoint_auth_method}

---

##### `tos_uri`<sup>Optional</sup> <a name="tos_uri" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.tosUri"></a>

```python
tos_uri: str
```

- *Type:* str

URI to web page providing client tos (terms of service).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#tos_uri OauthApp#tos_uri}

---

##### `user_name_template`<sup>Optional</sup> <a name="user_name_template" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.userNameTemplate"></a>

```python
user_name_template: str
```

- *Type:* str

Username template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#user_name_template OauthApp#user_name_template}

---

##### `user_name_template_push_status`<sup>Optional</sup> <a name="user_name_template_push_status" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.userNameTemplatePushStatus"></a>

```python
user_name_template_push_status: str
```

- *Type:* str

Push username on update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#user_name_template_push_status OauthApp#user_name_template_push_status}

---

##### `user_name_template_suffix`<sup>Optional</sup> <a name="user_name_template_suffix" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.userNameTemplateSuffix"></a>

```python
user_name_template_suffix: str
```

- *Type:* str

Username template suffix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#user_name_template_suffix OauthApp#user_name_template_suffix}

---

##### `user_name_template_type`<sup>Optional</sup> <a name="user_name_template_type" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.userNameTemplateType"></a>

```python
user_name_template_type: str
```

- *Type:* str

Username template type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#user_name_template_type OauthApp#user_name_template_type}

---

##### `users`<sup>Optional</sup> <a name="users" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.users"></a>

```python
users: typing.Union[IResolvable, typing.List[OauthAppUsers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.oauthApp.OauthAppUsers">OauthAppUsers</a>]]

users block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#users OauthApp#users}

---

##### `wildcard_redirect`<sup>Optional</sup> <a name="wildcard_redirect" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.wildcardRedirect"></a>

```python
wildcard_redirect: str
```

- *Type:* str

*Early Access Property*. Indicates if the client is allowed to use wildcard matching of redirect_uris.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#wildcard_redirect OauthApp#wildcard_redirect}

---

### OauthAppGroupsClaim <a name="OauthAppGroupsClaim" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaim"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaim.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import oauth_app

oauthApp.OauthAppGroupsClaim(
  name: str,
  type: str,
  value: str,
  filter_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaim.property.name">name</a></code> | <code>str</code> | Name of the claim that will be used in the token. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaim.property.type">type</a></code> | <code>str</code> | Groups claim type. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaim.property.value">value</a></code> | <code>str</code> | Value of the claim. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaim.property.filterType">filter_type</a></code> | <code>str</code> | Groups claim filter. Can only be set if type is FILTER. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaim.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the claim that will be used in the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#name OauthApp#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaim.property.type"></a>

```python
type: str
```

- *Type:* str

Groups claim type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#type OauthApp#type}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaim.property.value"></a>

```python
value: str
```

- *Type:* str

Value of the claim.

Can be an Okta Expression Language statement that evaluates at the time the token is minted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#value OauthApp#value}

---

##### `filter_type`<sup>Optional</sup> <a name="filter_type" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaim.property.filterType"></a>

```python
filter_type: str
```

- *Type:* str

Groups claim filter. Can only be set if type is FILTER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#filter_type OauthApp#filter_type}

---

### OauthAppJwks <a name="OauthAppJwks" id="@cdktf/provider-okta.oauthApp.OauthAppJwks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.oauthApp.OauthAppJwks.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import oauth_app

oauthApp.OauthAppJwks(
  kid: str,
  kty: str,
  e: str = None,
  n: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwks.property.kid">kid</a></code> | <code>str</code> | Key ID. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwks.property.kty">kty</a></code> | <code>str</code> | Key type. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwks.property.e">e</a></code> | <code>str</code> | RSA Exponent. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwks.property.n">n</a></code> | <code>str</code> | RSA Modulus. |

---

##### `kid`<sup>Required</sup> <a name="kid" id="@cdktf/provider-okta.oauthApp.OauthAppJwks.property.kid"></a>

```python
kid: str
```

- *Type:* str

Key ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#kid OauthApp#kid}

---

##### `kty`<sup>Required</sup> <a name="kty" id="@cdktf/provider-okta.oauthApp.OauthAppJwks.property.kty"></a>

```python
kty: str
```

- *Type:* str

Key type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#kty OauthApp#kty}

---

##### `e`<sup>Optional</sup> <a name="e" id="@cdktf/provider-okta.oauthApp.OauthAppJwks.property.e"></a>

```python
e: str
```

- *Type:* str

RSA Exponent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#e OauthApp#e}

---

##### `n`<sup>Optional</sup> <a name="n" id="@cdktf/provider-okta.oauthApp.OauthAppJwks.property.n"></a>

```python
n: str
```

- *Type:* str

RSA Modulus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#n OauthApp#n}

---

### OauthAppTimeouts <a name="OauthAppTimeouts" id="@cdktf/provider-okta.oauthApp.OauthAppTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.oauthApp.OauthAppTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import oauth_app

oauthApp.OauthAppTimeouts(
  create: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#create OauthApp#create}. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#read OauthApp#read}. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#update OauthApp#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-okta.oauthApp.OauthAppTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#create OauthApp#create}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-okta.oauthApp.OauthAppTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#read OauthApp#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-okta.oauthApp.OauthAppTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#update OauthApp#update}.

---

### OauthAppUsers <a name="OauthAppUsers" id="@cdktf/provider-okta.oauthApp.OauthAppUsers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.oauthApp.OauthAppUsers.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import oauth_app

oauthApp.OauthAppUsers(
  id: str = None,
  password: str = None,
  username: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsers.property.id">id</a></code> | <code>str</code> | User ID. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsers.property.password">password</a></code> | <code>str</code> | Password for user application. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsers.property.username">username</a></code> | <code>str</code> | Username for user. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.oauthApp.OauthAppUsers.property.id"></a>

```python
id: str
```

- *Type:* str

User ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#id OauthApp#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-okta.oauthApp.OauthAppUsers.property.password"></a>

```python
password: str
```

- *Type:* str

Password for user application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#password OauthApp#password}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-okta.oauthApp.OauthAppUsers.property.username"></a>

```python
username: str
```

- *Type:* str

Username for user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/oauth_app#username OauthApp#username}

---

## Classes <a name="Classes" id="Classes"></a>

### OauthAppGroupsClaimOutputReference <a name="OauthAppGroupsClaimOutputReference" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import oauth_app

oauthApp.OauthAppGroupsClaimOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.resetFilterType">reset_filter_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_filter_type` <a name="reset_filter_type" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.resetFilterType"></a>

```python
def reset_filter_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.issuerMode">issuer_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.filterTypeInput">filter_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.filterType">filter_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaim">OauthAppGroupsClaim</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `issuer_mode`<sup>Required</sup> <a name="issuer_mode" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.issuerMode"></a>

```python
issuer_mode: str
```

- *Type:* str

---

##### `filter_type_input`<sup>Optional</sup> <a name="filter_type_input" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.filterTypeInput"></a>

```python
filter_type_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `filter_type`<sup>Required</sup> <a name="filter_type" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.filterType"></a>

```python
filter_type: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.internalValue"></a>

```python
internal_value: OauthAppGroupsClaim
```

- *Type:* <a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaim">OauthAppGroupsClaim</a>

---


### OauthAppJwksList <a name="OauthAppJwksList" id="@cdktf/provider-okta.oauthApp.OauthAppJwksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.oauthApp.OauthAppJwksList.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import oauth_app

oauthApp.OauthAppJwksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-okta.oauthApp.OauthAppJwksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.oauthApp.OauthAppJwksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-okta.oauthApp.OauthAppJwksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-okta.oauthApp.OauthAppJwksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.oauthApp.OauthAppJwksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.oauthApp.OauthAppJwksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.oauthApp.OauthAppJwksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.oauthApp.OauthAppJwksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OauthAppJwksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.oauthApp.OauthAppJwksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.oauthApp.OauthAppJwks">OauthAppJwks</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-okta.oauthApp.OauthAppJwksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.oauthApp.OauthAppJwksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-okta.oauthApp.OauthAppJwksList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OauthAppJwks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.oauthApp.OauthAppJwks">OauthAppJwks</a>]]

---


### OauthAppJwksOutputReference <a name="OauthAppJwksOutputReference" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import oauth_app

oauthApp.OauthAppJwksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.resetE">reset_e</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.resetN">reset_n</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_e` <a name="reset_e" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.resetE"></a>

```python
def reset_e() -> None
```

##### `reset_n` <a name="reset_n" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.resetN"></a>

```python
def reset_n() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.property.eInput">e_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.property.kidInput">kid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.property.ktyInput">kty_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.property.nInput">n_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.property.e">e</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.property.kid">kid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.property.kty">kty</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.property.n">n</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-okta.oauthApp.OauthAppJwks">OauthAppJwks</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `e_input`<sup>Optional</sup> <a name="e_input" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.property.eInput"></a>

```python
e_input: str
```

- *Type:* str

---

##### `kid_input`<sup>Optional</sup> <a name="kid_input" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.property.kidInput"></a>

```python
kid_input: str
```

- *Type:* str

---

##### `kty_input`<sup>Optional</sup> <a name="kty_input" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.property.ktyInput"></a>

```python
kty_input: str
```

- *Type:* str

---

##### `n_input`<sup>Optional</sup> <a name="n_input" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.property.nInput"></a>

```python
n_input: str
```

- *Type:* str

---

##### `e`<sup>Required</sup> <a name="e" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.property.e"></a>

```python
e: str
```

- *Type:* str

---

##### `kid`<sup>Required</sup> <a name="kid" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.property.kid"></a>

```python
kid: str
```

- *Type:* str

---

##### `kty`<sup>Required</sup> <a name="kty" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.property.kty"></a>

```python
kty: str
```

- *Type:* str

---

##### `n`<sup>Required</sup> <a name="n" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.property.n"></a>

```python
n: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[OauthAppJwks, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-okta.oauthApp.OauthAppJwks">OauthAppJwks</a>, cdktf.IResolvable]

---


### OauthAppTimeoutsOutputReference <a name="OauthAppTimeoutsOutputReference" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import oauth_app

oauthApp.OauthAppTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeouts">OauthAppTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[OauthAppTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeouts">OauthAppTimeouts</a>, cdktf.IResolvable]

---


### OauthAppUsersList <a name="OauthAppUsersList" id="@cdktf/provider-okta.oauthApp.OauthAppUsersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.oauthApp.OauthAppUsersList.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import oauth_app

oauthApp.OauthAppUsersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-okta.oauthApp.OauthAppUsersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.oauthApp.OauthAppUsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-okta.oauthApp.OauthAppUsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-okta.oauthApp.OauthAppUsersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.oauthApp.OauthAppUsersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.oauthApp.OauthAppUsersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.oauthApp.OauthAppUsersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.oauthApp.OauthAppUsersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OauthAppUsersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.oauthApp.OauthAppUsersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.oauthApp.OauthAppUsers">OauthAppUsers</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-okta.oauthApp.OauthAppUsersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.oauthApp.OauthAppUsersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-okta.oauthApp.OauthAppUsersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OauthAppUsers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.oauthApp.OauthAppUsers">OauthAppUsers</a>]]

---


### OauthAppUsersOutputReference <a name="OauthAppUsersOutputReference" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import oauth_app

oauthApp.OauthAppUsersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.resetUsername">reset_username</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_id` <a name="reset_id" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_password` <a name="reset_password" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_username` <a name="reset_username" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.resetUsername"></a>

```python
def reset_username() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.property.scope">scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-okta.oauthApp.OauthAppUsers">OauthAppUsers</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[OauthAppUsers, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-okta.oauthApp.OauthAppUsers">OauthAppUsers</a>, cdktf.IResolvable]

---



