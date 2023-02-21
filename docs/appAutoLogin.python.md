# `appAutoLogin` Submodule <a name="`appAutoLogin` Submodule" id="@cdktf/provider-okta.appAutoLogin"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppAutoLogin <a name="AppAutoLogin" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin"></a>

Represents a {@link https://www.terraform.io/docs/providers/okta/r/app_auto_login okta_app_auto_login}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import app_auto_login

appAutoLogin.AppAutoLogin(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  label: str,
  accessibility_error_redirect_url: str = None,
  accessibility_login_redirect_url: str = None,
  accessibility_self_service: typing.Union[bool, IResolvable] = None,
  admin_note: str = None,
  app_links_json: str = None,
  app_settings_json: str = None,
  auto_submit_toolbar: typing.Union[bool, IResolvable] = None,
  credentials_scheme: str = None,
  enduser_note: str = None,
  groups: typing.List[str] = None,
  hide_ios: typing.Union[bool, IResolvable] = None,
  hide_web: typing.Union[bool, IResolvable] = None,
  id: str = None,
  logo: str = None,
  preconfigured_app: str = None,
  reveal_password: typing.Union[bool, IResolvable] = None,
  shared_password: str = None,
  shared_username: str = None,
  sign_on_redirect_url: str = None,
  sign_on_url: str = None,
  skip_groups: typing.Union[bool, IResolvable] = None,
  skip_users: typing.Union[bool, IResolvable] = None,
  status: str = None,
  timeouts: AppAutoLoginTimeouts = None,
  user_name_template: str = None,
  user_name_template_push_status: str = None,
  user_name_template_suffix: str = None,
  user_name_template_type: str = None,
  users: typing.Union[IResolvable, typing.List[AppAutoLoginUsers]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.Initializer.parameter.label">label</a></code> | <code>str</code> | Pretty name of app. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.Initializer.parameter.accessibilityErrorRedirectUrl">accessibility_error_redirect_url</a></code> | <code>str</code> | Custom error page URL. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.Initializer.parameter.accessibilityLoginRedirectUrl">accessibility_login_redirect_url</a></code> | <code>str</code> | Custom login page URL. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.Initializer.parameter.accessibilitySelfService">accessibility_self_service</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable self service. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.Initializer.parameter.adminNote">admin_note</a></code> | <code>str</code> | Application notes for admins. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.Initializer.parameter.appLinksJson">app_links_json</a></code> | <code>str</code> | Displays specific appLinks for the app. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.Initializer.parameter.appSettingsJson">app_settings_json</a></code> | <code>str</code> | Application settings in JSON format. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.Initializer.parameter.autoSubmitToolbar">auto_submit_toolbar</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Display auto submit toolbar. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.Initializer.parameter.credentialsScheme">credentials_scheme</a></code> | <code>str</code> | Application credentials scheme. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.Initializer.parameter.enduserNote">enduser_note</a></code> | <code>str</code> | Application notes for end users. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.Initializer.parameter.groups">groups</a></code> | <code>typing.List[str]</code> | Groups associated with the application. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.Initializer.parameter.hideIos">hide_ios</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Do not display application icon on mobile app. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.Initializer.parameter.hideWeb">hide_web</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Do not display application icon to users. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_auto_login#id AppAutoLogin#id}. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.Initializer.parameter.logo">logo</a></code> | <code>str</code> | Local path to logo of the application. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.Initializer.parameter.preconfiguredApp">preconfigured_app</a></code> | <code>str</code> | Preconfigured app name. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.Initializer.parameter.revealPassword">reveal_password</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allow user to reveal password. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.Initializer.parameter.sharedPassword">shared_password</a></code> | <code>str</code> | Shared password, required for certain schemes. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.Initializer.parameter.sharedUsername">shared_username</a></code> | <code>str</code> | Shared username, required for certain schemes. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.Initializer.parameter.signOnRedirectUrl">sign_on_redirect_url</a></code> | <code>str</code> | Post login redirect URL. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.Initializer.parameter.signOnUrl">sign_on_url</a></code> | <code>str</code> | Login URL. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.Initializer.parameter.skipGroups">skip_groups</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Ignore groups sync. This is a temporary solution until 'groups' field is supported in all the app-like resources. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.Initializer.parameter.skipUsers">skip_users</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Ignore users sync. This is a temporary solution until 'users' field is supported in all the app-like resources. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.Initializer.parameter.status">status</a></code> | <code>str</code> | Status of application. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeouts">AppAutoLoginTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.Initializer.parameter.userNameTemplate">user_name_template</a></code> | <code>str</code> | Username template. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.Initializer.parameter.userNameTemplatePushStatus">user_name_template_push_status</a></code> | <code>str</code> | Push username on update. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.Initializer.parameter.userNameTemplateSuffix">user_name_template_suffix</a></code> | <code>str</code> | Username template suffix. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.Initializer.parameter.userNameTemplateType">user_name_template_type</a></code> | <code>str</code> | Username template type. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.Initializer.parameter.users">users</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsers">AppAutoLoginUsers</a>]]</code> | users block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.Initializer.parameter.label"></a>

- *Type:* str

Pretty name of app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_auto_login#label AppAutoLogin#label}

---

##### `accessibility_error_redirect_url`<sup>Optional</sup> <a name="accessibility_error_redirect_url" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.Initializer.parameter.accessibilityErrorRedirectUrl"></a>

- *Type:* str

Custom error page URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_auto_login#accessibility_error_redirect_url AppAutoLogin#accessibility_error_redirect_url}

---

##### `accessibility_login_redirect_url`<sup>Optional</sup> <a name="accessibility_login_redirect_url" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.Initializer.parameter.accessibilityLoginRedirectUrl"></a>

- *Type:* str

Custom login page URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_auto_login#accessibility_login_redirect_url AppAutoLogin#accessibility_login_redirect_url}

---

##### `accessibility_self_service`<sup>Optional</sup> <a name="accessibility_self_service" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.Initializer.parameter.accessibilitySelfService"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable self service.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_auto_login#accessibility_self_service AppAutoLogin#accessibility_self_service}

---

##### `admin_note`<sup>Optional</sup> <a name="admin_note" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.Initializer.parameter.adminNote"></a>

- *Type:* str

Application notes for admins.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_auto_login#admin_note AppAutoLogin#admin_note}

---

##### `app_links_json`<sup>Optional</sup> <a name="app_links_json" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.Initializer.parameter.appLinksJson"></a>

- *Type:* str

Displays specific appLinks for the app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_auto_login#app_links_json AppAutoLogin#app_links_json}

---

##### `app_settings_json`<sup>Optional</sup> <a name="app_settings_json" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.Initializer.parameter.appSettingsJson"></a>

- *Type:* str

Application settings in JSON format.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_auto_login#app_settings_json AppAutoLogin#app_settings_json}

---

##### `auto_submit_toolbar`<sup>Optional</sup> <a name="auto_submit_toolbar" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.Initializer.parameter.autoSubmitToolbar"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Display auto submit toolbar.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_auto_login#auto_submit_toolbar AppAutoLogin#auto_submit_toolbar}

---

##### `credentials_scheme`<sup>Optional</sup> <a name="credentials_scheme" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.Initializer.parameter.credentialsScheme"></a>

- *Type:* str

Application credentials scheme.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_auto_login#credentials_scheme AppAutoLogin#credentials_scheme}

---

##### `enduser_note`<sup>Optional</sup> <a name="enduser_note" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.Initializer.parameter.enduserNote"></a>

- *Type:* str

Application notes for end users.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_auto_login#enduser_note AppAutoLogin#enduser_note}

---

##### `groups`<sup>Optional</sup> <a name="groups" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.Initializer.parameter.groups"></a>

- *Type:* typing.List[str]

Groups associated with the application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_auto_login#groups AppAutoLogin#groups}

---

##### `hide_ios`<sup>Optional</sup> <a name="hide_ios" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.Initializer.parameter.hideIos"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Do not display application icon on mobile app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_auto_login#hide_ios AppAutoLogin#hide_ios}

---

##### `hide_web`<sup>Optional</sup> <a name="hide_web" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.Initializer.parameter.hideWeb"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Do not display application icon to users.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_auto_login#hide_web AppAutoLogin#hide_web}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_auto_login#id AppAutoLogin#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logo`<sup>Optional</sup> <a name="logo" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.Initializer.parameter.logo"></a>

- *Type:* str

Local path to logo of the application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_auto_login#logo AppAutoLogin#logo}

---

##### `preconfigured_app`<sup>Optional</sup> <a name="preconfigured_app" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.Initializer.parameter.preconfiguredApp"></a>

- *Type:* str

Preconfigured app name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_auto_login#preconfigured_app AppAutoLogin#preconfigured_app}

---

##### `reveal_password`<sup>Optional</sup> <a name="reveal_password" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.Initializer.parameter.revealPassword"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow user to reveal password.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_auto_login#reveal_password AppAutoLogin#reveal_password}

---

##### `shared_password`<sup>Optional</sup> <a name="shared_password" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.Initializer.parameter.sharedPassword"></a>

- *Type:* str

Shared password, required for certain schemes.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_auto_login#shared_password AppAutoLogin#shared_password}

---

##### `shared_username`<sup>Optional</sup> <a name="shared_username" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.Initializer.parameter.sharedUsername"></a>

- *Type:* str

Shared username, required for certain schemes.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_auto_login#shared_username AppAutoLogin#shared_username}

---

##### `sign_on_redirect_url`<sup>Optional</sup> <a name="sign_on_redirect_url" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.Initializer.parameter.signOnRedirectUrl"></a>

- *Type:* str

Post login redirect URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_auto_login#sign_on_redirect_url AppAutoLogin#sign_on_redirect_url}

---

##### `sign_on_url`<sup>Optional</sup> <a name="sign_on_url" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.Initializer.parameter.signOnUrl"></a>

- *Type:* str

Login URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_auto_login#sign_on_url AppAutoLogin#sign_on_url}

---

##### `skip_groups`<sup>Optional</sup> <a name="skip_groups" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.Initializer.parameter.skipGroups"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Ignore groups sync. This is a temporary solution until 'groups' field is supported in all the app-like resources.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_auto_login#skip_groups AppAutoLogin#skip_groups}

---

##### `skip_users`<sup>Optional</sup> <a name="skip_users" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.Initializer.parameter.skipUsers"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Ignore users sync. This is a temporary solution until 'users' field is supported in all the app-like resources.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_auto_login#skip_users AppAutoLogin#skip_users}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.Initializer.parameter.status"></a>

- *Type:* str

Status of application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_auto_login#status AppAutoLogin#status}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeouts">AppAutoLoginTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_auto_login#timeouts AppAutoLogin#timeouts}

---

##### `user_name_template`<sup>Optional</sup> <a name="user_name_template" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.Initializer.parameter.userNameTemplate"></a>

- *Type:* str

Username template.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_auto_login#user_name_template AppAutoLogin#user_name_template}

---

##### `user_name_template_push_status`<sup>Optional</sup> <a name="user_name_template_push_status" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.Initializer.parameter.userNameTemplatePushStatus"></a>

- *Type:* str

Push username on update.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_auto_login#user_name_template_push_status AppAutoLogin#user_name_template_push_status}

---

##### `user_name_template_suffix`<sup>Optional</sup> <a name="user_name_template_suffix" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.Initializer.parameter.userNameTemplateSuffix"></a>

- *Type:* str

Username template suffix.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_auto_login#user_name_template_suffix AppAutoLogin#user_name_template_suffix}

---

##### `user_name_template_type`<sup>Optional</sup> <a name="user_name_template_type" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.Initializer.parameter.userNameTemplateType"></a>

- *Type:* str

Username template type.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_auto_login#user_name_template_type AppAutoLogin#user_name_template_type}

---

##### `users`<sup>Optional</sup> <a name="users" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.Initializer.parameter.users"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsers">AppAutoLoginUsers</a>]]

users block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_auto_login#users AppAutoLogin#users}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.putUsers">put_users</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetAccessibilityErrorRedirectUrl">reset_accessibility_error_redirect_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetAccessibilityLoginRedirectUrl">reset_accessibility_login_redirect_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetAccessibilitySelfService">reset_accessibility_self_service</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetAdminNote">reset_admin_note</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetAppLinksJson">reset_app_links_json</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetAppSettingsJson">reset_app_settings_json</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetAutoSubmitToolbar">reset_auto_submit_toolbar</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetCredentialsScheme">reset_credentials_scheme</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetEnduserNote">reset_enduser_note</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetGroups">reset_groups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetHideIos">reset_hide_ios</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetHideWeb">reset_hide_web</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetLogo">reset_logo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetPreconfiguredApp">reset_preconfigured_app</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetRevealPassword">reset_reveal_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetSharedPassword">reset_shared_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetSharedUsername">reset_shared_username</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetSignOnRedirectUrl">reset_sign_on_redirect_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetSignOnUrl">reset_sign_on_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetSkipGroups">reset_skip_groups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetSkipUsers">reset_skip_users</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetUserNameTemplate">reset_user_name_template</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetUserNameTemplatePushStatus">reset_user_name_template_push_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetUserNameTemplateSuffix">reset_user_name_template_suffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetUserNameTemplateType">reset_user_name_template_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetUsers">reset_users</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_auto_login#create AppAutoLogin#create}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_auto_login#read AppAutoLogin#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_auto_login#update AppAutoLogin#update}.

---

##### `put_users` <a name="put_users" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.putUsers"></a>

```python
def put_users(
  value: typing.Union[IResolvable, typing.List[AppAutoLoginUsers]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.putUsers.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsers">AppAutoLoginUsers</a>]]

---

##### `reset_accessibility_error_redirect_url` <a name="reset_accessibility_error_redirect_url" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetAccessibilityErrorRedirectUrl"></a>

```python
def reset_accessibility_error_redirect_url() -> None
```

##### `reset_accessibility_login_redirect_url` <a name="reset_accessibility_login_redirect_url" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetAccessibilityLoginRedirectUrl"></a>

```python
def reset_accessibility_login_redirect_url() -> None
```

##### `reset_accessibility_self_service` <a name="reset_accessibility_self_service" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetAccessibilitySelfService"></a>

```python
def reset_accessibility_self_service() -> None
```

##### `reset_admin_note` <a name="reset_admin_note" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetAdminNote"></a>

```python
def reset_admin_note() -> None
```

##### `reset_app_links_json` <a name="reset_app_links_json" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetAppLinksJson"></a>

```python
def reset_app_links_json() -> None
```

##### `reset_app_settings_json` <a name="reset_app_settings_json" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetAppSettingsJson"></a>

```python
def reset_app_settings_json() -> None
```

##### `reset_auto_submit_toolbar` <a name="reset_auto_submit_toolbar" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetAutoSubmitToolbar"></a>

```python
def reset_auto_submit_toolbar() -> None
```

##### `reset_credentials_scheme` <a name="reset_credentials_scheme" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetCredentialsScheme"></a>

```python
def reset_credentials_scheme() -> None
```

##### `reset_enduser_note` <a name="reset_enduser_note" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetEnduserNote"></a>

```python
def reset_enduser_note() -> None
```

##### `reset_groups` <a name="reset_groups" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetGroups"></a>

```python
def reset_groups() -> None
```

##### `reset_hide_ios` <a name="reset_hide_ios" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetHideIos"></a>

```python
def reset_hide_ios() -> None
```

##### `reset_hide_web` <a name="reset_hide_web" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetHideWeb"></a>

```python
def reset_hide_web() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_logo` <a name="reset_logo" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetLogo"></a>

```python
def reset_logo() -> None
```

##### `reset_preconfigured_app` <a name="reset_preconfigured_app" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetPreconfiguredApp"></a>

```python
def reset_preconfigured_app() -> None
```

##### `reset_reveal_password` <a name="reset_reveal_password" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetRevealPassword"></a>

```python
def reset_reveal_password() -> None
```

##### `reset_shared_password` <a name="reset_shared_password" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetSharedPassword"></a>

```python
def reset_shared_password() -> None
```

##### `reset_shared_username` <a name="reset_shared_username" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetSharedUsername"></a>

```python
def reset_shared_username() -> None
```

##### `reset_sign_on_redirect_url` <a name="reset_sign_on_redirect_url" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetSignOnRedirectUrl"></a>

```python
def reset_sign_on_redirect_url() -> None
```

##### `reset_sign_on_url` <a name="reset_sign_on_url" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetSignOnUrl"></a>

```python
def reset_sign_on_url() -> None
```

##### `reset_skip_groups` <a name="reset_skip_groups" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetSkipGroups"></a>

```python
def reset_skip_groups() -> None
```

##### `reset_skip_users` <a name="reset_skip_users" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetSkipUsers"></a>

```python
def reset_skip_users() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_user_name_template` <a name="reset_user_name_template" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetUserNameTemplate"></a>

```python
def reset_user_name_template() -> None
```

##### `reset_user_name_template_push_status` <a name="reset_user_name_template_push_status" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetUserNameTemplatePushStatus"></a>

```python
def reset_user_name_template_push_status() -> None
```

##### `reset_user_name_template_suffix` <a name="reset_user_name_template_suffix" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetUserNameTemplateSuffix"></a>

```python
def reset_user_name_template_suffix() -> None
```

##### `reset_user_name_template_type` <a name="reset_user_name_template_type" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetUserNameTemplateType"></a>

```python
def reset_user_name_template_type() -> None
```

##### `reset_users` <a name="reset_users" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.resetUsers"></a>

```python
def reset_users() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.isConstruct"></a>

```python
from cdktf_cdktf_provider_okta import app_auto_login

appAutoLogin.AppAutoLogin.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_okta import app_auto_login

appAutoLogin.AppAutoLogin.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_okta import app_auto_login

appAutoLogin.AppAutoLogin.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.logoUrl">logo_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.signOnMode">sign_on_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference">AppAutoLoginTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.users">users</a></code> | <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsersList">AppAutoLoginUsersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.accessibilityErrorRedirectUrlInput">accessibility_error_redirect_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.accessibilityLoginRedirectUrlInput">accessibility_login_redirect_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.accessibilitySelfServiceInput">accessibility_self_service_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.adminNoteInput">admin_note_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.appLinksJsonInput">app_links_json_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.appSettingsJsonInput">app_settings_json_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.autoSubmitToolbarInput">auto_submit_toolbar_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.credentialsSchemeInput">credentials_scheme_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.enduserNoteInput">enduser_note_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.groupsInput">groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.hideIosInput">hide_ios_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.hideWebInput">hide_web_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.labelInput">label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.logoInput">logo_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.preconfiguredAppInput">preconfigured_app_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.revealPasswordInput">reveal_password_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.sharedPasswordInput">shared_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.sharedUsernameInput">shared_username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.signOnRedirectUrlInput">sign_on_redirect_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.signOnUrlInput">sign_on_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.skipGroupsInput">skip_groups_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.skipUsersInput">skip_users_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeouts">AppAutoLoginTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.userNameTemplateInput">user_name_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.userNameTemplatePushStatusInput">user_name_template_push_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.userNameTemplateSuffixInput">user_name_template_suffix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.userNameTemplateTypeInput">user_name_template_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.usersInput">users_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsers">AppAutoLoginUsers</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.accessibilityErrorRedirectUrl">accessibility_error_redirect_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.accessibilityLoginRedirectUrl">accessibility_login_redirect_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.accessibilitySelfService">accessibility_self_service</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.adminNote">admin_note</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.appLinksJson">app_links_json</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.appSettingsJson">app_settings_json</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.autoSubmitToolbar">auto_submit_toolbar</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.credentialsScheme">credentials_scheme</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.enduserNote">enduser_note</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.groups">groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.hideIos">hide_ios</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.hideWeb">hide_web</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.label">label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.logo">logo</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.preconfiguredApp">preconfigured_app</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.revealPassword">reveal_password</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.sharedPassword">shared_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.sharedUsername">shared_username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.signOnRedirectUrl">sign_on_redirect_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.signOnUrl">sign_on_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.skipGroups">skip_groups</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.skipUsers">skip_users</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.userNameTemplate">user_name_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.userNameTemplatePushStatus">user_name_template_push_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.userNameTemplateSuffix">user_name_template_suffix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.userNameTemplateType">user_name_template_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `logo_url`<sup>Required</sup> <a name="logo_url" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.logoUrl"></a>

```python
logo_url: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `sign_on_mode`<sup>Required</sup> <a name="sign_on_mode" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.signOnMode"></a>

```python
sign_on_mode: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.timeouts"></a>

```python
timeouts: AppAutoLoginTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference">AppAutoLoginTimeoutsOutputReference</a>

---

##### `users`<sup>Required</sup> <a name="users" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.users"></a>

```python
users: AppAutoLoginUsersList
```

- *Type:* <a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsersList">AppAutoLoginUsersList</a>

---

##### `accessibility_error_redirect_url_input`<sup>Optional</sup> <a name="accessibility_error_redirect_url_input" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.accessibilityErrorRedirectUrlInput"></a>

```python
accessibility_error_redirect_url_input: str
```

- *Type:* str

---

##### `accessibility_login_redirect_url_input`<sup>Optional</sup> <a name="accessibility_login_redirect_url_input" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.accessibilityLoginRedirectUrlInput"></a>

```python
accessibility_login_redirect_url_input: str
```

- *Type:* str

---

##### `accessibility_self_service_input`<sup>Optional</sup> <a name="accessibility_self_service_input" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.accessibilitySelfServiceInput"></a>

```python
accessibility_self_service_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `admin_note_input`<sup>Optional</sup> <a name="admin_note_input" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.adminNoteInput"></a>

```python
admin_note_input: str
```

- *Type:* str

---

##### `app_links_json_input`<sup>Optional</sup> <a name="app_links_json_input" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.appLinksJsonInput"></a>

```python
app_links_json_input: str
```

- *Type:* str

---

##### `app_settings_json_input`<sup>Optional</sup> <a name="app_settings_json_input" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.appSettingsJsonInput"></a>

```python
app_settings_json_input: str
```

- *Type:* str

---

##### `auto_submit_toolbar_input`<sup>Optional</sup> <a name="auto_submit_toolbar_input" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.autoSubmitToolbarInput"></a>

```python
auto_submit_toolbar_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `credentials_scheme_input`<sup>Optional</sup> <a name="credentials_scheme_input" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.credentialsSchemeInput"></a>

```python
credentials_scheme_input: str
```

- *Type:* str

---

##### `enduser_note_input`<sup>Optional</sup> <a name="enduser_note_input" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.enduserNoteInput"></a>

```python
enduser_note_input: str
```

- *Type:* str

---

##### `groups_input`<sup>Optional</sup> <a name="groups_input" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.groupsInput"></a>

```python
groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `hide_ios_input`<sup>Optional</sup> <a name="hide_ios_input" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.hideIosInput"></a>

```python
hide_ios_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `hide_web_input`<sup>Optional</sup> <a name="hide_web_input" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.hideWebInput"></a>

```python
hide_web_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `label_input`<sup>Optional</sup> <a name="label_input" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.labelInput"></a>

```python
label_input: str
```

- *Type:* str

---

##### `logo_input`<sup>Optional</sup> <a name="logo_input" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.logoInput"></a>

```python
logo_input: str
```

- *Type:* str

---

##### `preconfigured_app_input`<sup>Optional</sup> <a name="preconfigured_app_input" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.preconfiguredAppInput"></a>

```python
preconfigured_app_input: str
```

- *Type:* str

---

##### `reveal_password_input`<sup>Optional</sup> <a name="reveal_password_input" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.revealPasswordInput"></a>

```python
reveal_password_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `shared_password_input`<sup>Optional</sup> <a name="shared_password_input" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.sharedPasswordInput"></a>

```python
shared_password_input: str
```

- *Type:* str

---

##### `shared_username_input`<sup>Optional</sup> <a name="shared_username_input" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.sharedUsernameInput"></a>

```python
shared_username_input: str
```

- *Type:* str

---

##### `sign_on_redirect_url_input`<sup>Optional</sup> <a name="sign_on_redirect_url_input" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.signOnRedirectUrlInput"></a>

```python
sign_on_redirect_url_input: str
```

- *Type:* str

---

##### `sign_on_url_input`<sup>Optional</sup> <a name="sign_on_url_input" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.signOnUrlInput"></a>

```python
sign_on_url_input: str
```

- *Type:* str

---

##### `skip_groups_input`<sup>Optional</sup> <a name="skip_groups_input" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.skipGroupsInput"></a>

```python
skip_groups_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `skip_users_input`<sup>Optional</sup> <a name="skip_users_input" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.skipUsersInput"></a>

```python
skip_users_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[AppAutoLoginTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeouts">AppAutoLoginTimeouts</a>, cdktf.IResolvable]

---

##### `user_name_template_input`<sup>Optional</sup> <a name="user_name_template_input" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.userNameTemplateInput"></a>

```python
user_name_template_input: str
```

- *Type:* str

---

##### `user_name_template_push_status_input`<sup>Optional</sup> <a name="user_name_template_push_status_input" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.userNameTemplatePushStatusInput"></a>

```python
user_name_template_push_status_input: str
```

- *Type:* str

---

##### `user_name_template_suffix_input`<sup>Optional</sup> <a name="user_name_template_suffix_input" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.userNameTemplateSuffixInput"></a>

```python
user_name_template_suffix_input: str
```

- *Type:* str

---

##### `user_name_template_type_input`<sup>Optional</sup> <a name="user_name_template_type_input" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.userNameTemplateTypeInput"></a>

```python
user_name_template_type_input: str
```

- *Type:* str

---

##### `users_input`<sup>Optional</sup> <a name="users_input" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.usersInput"></a>

```python
users_input: typing.Union[IResolvable, typing.List[AppAutoLoginUsers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsers">AppAutoLoginUsers</a>]]

---

##### `accessibility_error_redirect_url`<sup>Required</sup> <a name="accessibility_error_redirect_url" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.accessibilityErrorRedirectUrl"></a>

```python
accessibility_error_redirect_url: str
```

- *Type:* str

---

##### `accessibility_login_redirect_url`<sup>Required</sup> <a name="accessibility_login_redirect_url" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.accessibilityLoginRedirectUrl"></a>

```python
accessibility_login_redirect_url: str
```

- *Type:* str

---

##### `accessibility_self_service`<sup>Required</sup> <a name="accessibility_self_service" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.accessibilitySelfService"></a>

```python
accessibility_self_service: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `admin_note`<sup>Required</sup> <a name="admin_note" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.adminNote"></a>

```python
admin_note: str
```

- *Type:* str

---

##### `app_links_json`<sup>Required</sup> <a name="app_links_json" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.appLinksJson"></a>

```python
app_links_json: str
```

- *Type:* str

---

##### `app_settings_json`<sup>Required</sup> <a name="app_settings_json" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.appSettingsJson"></a>

```python
app_settings_json: str
```

- *Type:* str

---

##### `auto_submit_toolbar`<sup>Required</sup> <a name="auto_submit_toolbar" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.autoSubmitToolbar"></a>

```python
auto_submit_toolbar: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `credentials_scheme`<sup>Required</sup> <a name="credentials_scheme" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.credentialsScheme"></a>

```python
credentials_scheme: str
```

- *Type:* str

---

##### `enduser_note`<sup>Required</sup> <a name="enduser_note" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.enduserNote"></a>

```python
enduser_note: str
```

- *Type:* str

---

##### `groups`<sup>Required</sup> <a name="groups" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.groups"></a>

```python
groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `hide_ios`<sup>Required</sup> <a name="hide_ios" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.hideIos"></a>

```python
hide_ios: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `hide_web`<sup>Required</sup> <a name="hide_web" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.hideWeb"></a>

```python
hide_web: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.label"></a>

```python
label: str
```

- *Type:* str

---

##### `logo`<sup>Required</sup> <a name="logo" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.logo"></a>

```python
logo: str
```

- *Type:* str

---

##### `preconfigured_app`<sup>Required</sup> <a name="preconfigured_app" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.preconfiguredApp"></a>

```python
preconfigured_app: str
```

- *Type:* str

---

##### `reveal_password`<sup>Required</sup> <a name="reveal_password" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.revealPassword"></a>

```python
reveal_password: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `shared_password`<sup>Required</sup> <a name="shared_password" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.sharedPassword"></a>

```python
shared_password: str
```

- *Type:* str

---

##### `shared_username`<sup>Required</sup> <a name="shared_username" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.sharedUsername"></a>

```python
shared_username: str
```

- *Type:* str

---

##### `sign_on_redirect_url`<sup>Required</sup> <a name="sign_on_redirect_url" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.signOnRedirectUrl"></a>

```python
sign_on_redirect_url: str
```

- *Type:* str

---

##### `sign_on_url`<sup>Required</sup> <a name="sign_on_url" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.signOnUrl"></a>

```python
sign_on_url: str
```

- *Type:* str

---

##### `skip_groups`<sup>Required</sup> <a name="skip_groups" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.skipGroups"></a>

```python
skip_groups: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `skip_users`<sup>Required</sup> <a name="skip_users" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.skipUsers"></a>

```python
skip_users: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `user_name_template`<sup>Required</sup> <a name="user_name_template" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.userNameTemplate"></a>

```python
user_name_template: str
```

- *Type:* str

---

##### `user_name_template_push_status`<sup>Required</sup> <a name="user_name_template_push_status" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.userNameTemplatePushStatus"></a>

```python
user_name_template_push_status: str
```

- *Type:* str

---

##### `user_name_template_suffix`<sup>Required</sup> <a name="user_name_template_suffix" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.userNameTemplateSuffix"></a>

```python
user_name_template_suffix: str
```

- *Type:* str

---

##### `user_name_template_type`<sup>Required</sup> <a name="user_name_template_type" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.userNameTemplateType"></a>

```python
user_name_template_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.appAutoLogin.AppAutoLogin.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AppAutoLoginConfig <a name="AppAutoLoginConfig" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import app_auto_login

appAutoLogin.AppAutoLoginConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  label: str,
  accessibility_error_redirect_url: str = None,
  accessibility_login_redirect_url: str = None,
  accessibility_self_service: typing.Union[bool, IResolvable] = None,
  admin_note: str = None,
  app_links_json: str = None,
  app_settings_json: str = None,
  auto_submit_toolbar: typing.Union[bool, IResolvable] = None,
  credentials_scheme: str = None,
  enduser_note: str = None,
  groups: typing.List[str] = None,
  hide_ios: typing.Union[bool, IResolvable] = None,
  hide_web: typing.Union[bool, IResolvable] = None,
  id: str = None,
  logo: str = None,
  preconfigured_app: str = None,
  reveal_password: typing.Union[bool, IResolvable] = None,
  shared_password: str = None,
  shared_username: str = None,
  sign_on_redirect_url: str = None,
  sign_on_url: str = None,
  skip_groups: typing.Union[bool, IResolvable] = None,
  skip_users: typing.Union[bool, IResolvable] = None,
  status: str = None,
  timeouts: AppAutoLoginTimeouts = None,
  user_name_template: str = None,
  user_name_template_push_status: str = None,
  user_name_template_suffix: str = None,
  user_name_template_type: str = None,
  users: typing.Union[IResolvable, typing.List[AppAutoLoginUsers]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.label">label</a></code> | <code>str</code> | Pretty name of app. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.accessibilityErrorRedirectUrl">accessibility_error_redirect_url</a></code> | <code>str</code> | Custom error page URL. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.accessibilityLoginRedirectUrl">accessibility_login_redirect_url</a></code> | <code>str</code> | Custom login page URL. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.accessibilitySelfService">accessibility_self_service</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable self service. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.adminNote">admin_note</a></code> | <code>str</code> | Application notes for admins. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.appLinksJson">app_links_json</a></code> | <code>str</code> | Displays specific appLinks for the app. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.appSettingsJson">app_settings_json</a></code> | <code>str</code> | Application settings in JSON format. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.autoSubmitToolbar">auto_submit_toolbar</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Display auto submit toolbar. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.credentialsScheme">credentials_scheme</a></code> | <code>str</code> | Application credentials scheme. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.enduserNote">enduser_note</a></code> | <code>str</code> | Application notes for end users. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.groups">groups</a></code> | <code>typing.List[str]</code> | Groups associated with the application. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.hideIos">hide_ios</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Do not display application icon on mobile app. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.hideWeb">hide_web</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Do not display application icon to users. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_auto_login#id AppAutoLogin#id}. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.logo">logo</a></code> | <code>str</code> | Local path to logo of the application. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.preconfiguredApp">preconfigured_app</a></code> | <code>str</code> | Preconfigured app name. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.revealPassword">reveal_password</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allow user to reveal password. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.sharedPassword">shared_password</a></code> | <code>str</code> | Shared password, required for certain schemes. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.sharedUsername">shared_username</a></code> | <code>str</code> | Shared username, required for certain schemes. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.signOnRedirectUrl">sign_on_redirect_url</a></code> | <code>str</code> | Post login redirect URL. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.signOnUrl">sign_on_url</a></code> | <code>str</code> | Login URL. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.skipGroups">skip_groups</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Ignore groups sync. This is a temporary solution until 'groups' field is supported in all the app-like resources. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.skipUsers">skip_users</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Ignore users sync. This is a temporary solution until 'users' field is supported in all the app-like resources. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.status">status</a></code> | <code>str</code> | Status of application. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeouts">AppAutoLoginTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.userNameTemplate">user_name_template</a></code> | <code>str</code> | Username template. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.userNameTemplatePushStatus">user_name_template_push_status</a></code> | <code>str</code> | Push username on update. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.userNameTemplateSuffix">user_name_template_suffix</a></code> | <code>str</code> | Username template suffix. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.userNameTemplateType">user_name_template_type</a></code> | <code>str</code> | Username template type. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.users">users</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsers">AppAutoLoginUsers</a>]]</code> | users block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.label"></a>

```python
label: str
```

- *Type:* str

Pretty name of app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_auto_login#label AppAutoLogin#label}

---

##### `accessibility_error_redirect_url`<sup>Optional</sup> <a name="accessibility_error_redirect_url" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.accessibilityErrorRedirectUrl"></a>

```python
accessibility_error_redirect_url: str
```

- *Type:* str

Custom error page URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_auto_login#accessibility_error_redirect_url AppAutoLogin#accessibility_error_redirect_url}

---

##### `accessibility_login_redirect_url`<sup>Optional</sup> <a name="accessibility_login_redirect_url" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.accessibilityLoginRedirectUrl"></a>

```python
accessibility_login_redirect_url: str
```

- *Type:* str

Custom login page URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_auto_login#accessibility_login_redirect_url AppAutoLogin#accessibility_login_redirect_url}

---

##### `accessibility_self_service`<sup>Optional</sup> <a name="accessibility_self_service" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.accessibilitySelfService"></a>

```python
accessibility_self_service: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable self service.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_auto_login#accessibility_self_service AppAutoLogin#accessibility_self_service}

---

##### `admin_note`<sup>Optional</sup> <a name="admin_note" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.adminNote"></a>

```python
admin_note: str
```

- *Type:* str

Application notes for admins.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_auto_login#admin_note AppAutoLogin#admin_note}

---

##### `app_links_json`<sup>Optional</sup> <a name="app_links_json" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.appLinksJson"></a>

```python
app_links_json: str
```

- *Type:* str

Displays specific appLinks for the app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_auto_login#app_links_json AppAutoLogin#app_links_json}

---

##### `app_settings_json`<sup>Optional</sup> <a name="app_settings_json" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.appSettingsJson"></a>

```python
app_settings_json: str
```

- *Type:* str

Application settings in JSON format.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_auto_login#app_settings_json AppAutoLogin#app_settings_json}

---

##### `auto_submit_toolbar`<sup>Optional</sup> <a name="auto_submit_toolbar" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.autoSubmitToolbar"></a>

```python
auto_submit_toolbar: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Display auto submit toolbar.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_auto_login#auto_submit_toolbar AppAutoLogin#auto_submit_toolbar}

---

##### `credentials_scheme`<sup>Optional</sup> <a name="credentials_scheme" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.credentialsScheme"></a>

```python
credentials_scheme: str
```

- *Type:* str

Application credentials scheme.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_auto_login#credentials_scheme AppAutoLogin#credentials_scheme}

---

##### `enduser_note`<sup>Optional</sup> <a name="enduser_note" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.enduserNote"></a>

```python
enduser_note: str
```

- *Type:* str

Application notes for end users.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_auto_login#enduser_note AppAutoLogin#enduser_note}

---

##### `groups`<sup>Optional</sup> <a name="groups" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.groups"></a>

```python
groups: typing.List[str]
```

- *Type:* typing.List[str]

Groups associated with the application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_auto_login#groups AppAutoLogin#groups}

---

##### `hide_ios`<sup>Optional</sup> <a name="hide_ios" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.hideIos"></a>

```python
hide_ios: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Do not display application icon on mobile app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_auto_login#hide_ios AppAutoLogin#hide_ios}

---

##### `hide_web`<sup>Optional</sup> <a name="hide_web" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.hideWeb"></a>

```python
hide_web: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Do not display application icon to users.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_auto_login#hide_web AppAutoLogin#hide_web}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_auto_login#id AppAutoLogin#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logo`<sup>Optional</sup> <a name="logo" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.logo"></a>

```python
logo: str
```

- *Type:* str

Local path to logo of the application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_auto_login#logo AppAutoLogin#logo}

---

##### `preconfigured_app`<sup>Optional</sup> <a name="preconfigured_app" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.preconfiguredApp"></a>

```python
preconfigured_app: str
```

- *Type:* str

Preconfigured app name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_auto_login#preconfigured_app AppAutoLogin#preconfigured_app}

---

##### `reveal_password`<sup>Optional</sup> <a name="reveal_password" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.revealPassword"></a>

```python
reveal_password: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow user to reveal password.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_auto_login#reveal_password AppAutoLogin#reveal_password}

---

##### `shared_password`<sup>Optional</sup> <a name="shared_password" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.sharedPassword"></a>

```python
shared_password: str
```

- *Type:* str

Shared password, required for certain schemes.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_auto_login#shared_password AppAutoLogin#shared_password}

---

##### `shared_username`<sup>Optional</sup> <a name="shared_username" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.sharedUsername"></a>

```python
shared_username: str
```

- *Type:* str

Shared username, required for certain schemes.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_auto_login#shared_username AppAutoLogin#shared_username}

---

##### `sign_on_redirect_url`<sup>Optional</sup> <a name="sign_on_redirect_url" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.signOnRedirectUrl"></a>

```python
sign_on_redirect_url: str
```

- *Type:* str

Post login redirect URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_auto_login#sign_on_redirect_url AppAutoLogin#sign_on_redirect_url}

---

##### `sign_on_url`<sup>Optional</sup> <a name="sign_on_url" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.signOnUrl"></a>

```python
sign_on_url: str
```

- *Type:* str

Login URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_auto_login#sign_on_url AppAutoLogin#sign_on_url}

---

##### `skip_groups`<sup>Optional</sup> <a name="skip_groups" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.skipGroups"></a>

```python
skip_groups: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Ignore groups sync. This is a temporary solution until 'groups' field is supported in all the app-like resources.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_auto_login#skip_groups AppAutoLogin#skip_groups}

---

##### `skip_users`<sup>Optional</sup> <a name="skip_users" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.skipUsers"></a>

```python
skip_users: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Ignore users sync. This is a temporary solution until 'users' field is supported in all the app-like resources.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_auto_login#skip_users AppAutoLogin#skip_users}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.status"></a>

```python
status: str
```

- *Type:* str

Status of application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_auto_login#status AppAutoLogin#status}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.timeouts"></a>

```python
timeouts: AppAutoLoginTimeouts
```

- *Type:* <a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeouts">AppAutoLoginTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_auto_login#timeouts AppAutoLogin#timeouts}

---

##### `user_name_template`<sup>Optional</sup> <a name="user_name_template" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.userNameTemplate"></a>

```python
user_name_template: str
```

- *Type:* str

Username template.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_auto_login#user_name_template AppAutoLogin#user_name_template}

---

##### `user_name_template_push_status`<sup>Optional</sup> <a name="user_name_template_push_status" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.userNameTemplatePushStatus"></a>

```python
user_name_template_push_status: str
```

- *Type:* str

Push username on update.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_auto_login#user_name_template_push_status AppAutoLogin#user_name_template_push_status}

---

##### `user_name_template_suffix`<sup>Optional</sup> <a name="user_name_template_suffix" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.userNameTemplateSuffix"></a>

```python
user_name_template_suffix: str
```

- *Type:* str

Username template suffix.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_auto_login#user_name_template_suffix AppAutoLogin#user_name_template_suffix}

---

##### `user_name_template_type`<sup>Optional</sup> <a name="user_name_template_type" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.userNameTemplateType"></a>

```python
user_name_template_type: str
```

- *Type:* str

Username template type.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_auto_login#user_name_template_type AppAutoLogin#user_name_template_type}

---

##### `users`<sup>Optional</sup> <a name="users" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginConfig.property.users"></a>

```python
users: typing.Union[IResolvable, typing.List[AppAutoLoginUsers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsers">AppAutoLoginUsers</a>]]

users block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_auto_login#users AppAutoLogin#users}

---

### AppAutoLoginTimeouts <a name="AppAutoLoginTimeouts" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import app_auto_login

appAutoLogin.AppAutoLoginTimeouts(
  create: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_auto_login#create AppAutoLogin#create}. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_auto_login#read AppAutoLogin#read}. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_auto_login#update AppAutoLogin#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_auto_login#create AppAutoLogin#create}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_auto_login#read AppAutoLogin#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_auto_login#update AppAutoLogin#update}.

---

### AppAutoLoginUsers <a name="AppAutoLoginUsers" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsers.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import app_auto_login

appAutoLogin.AppAutoLoginUsers(
  id: str = None,
  password: str = None,
  username: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsers.property.id">id</a></code> | <code>str</code> | User ID. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsers.property.password">password</a></code> | <code>str</code> | Password for user application. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsers.property.username">username</a></code> | <code>str</code> | Username for user. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsers.property.id"></a>

```python
id: str
```

- *Type:* str

User ID.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_auto_login#id AppAutoLogin#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsers.property.password"></a>

```python
password: str
```

- *Type:* str

Password for user application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_auto_login#password AppAutoLogin#password}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsers.property.username"></a>

```python
username: str
```

- *Type:* str

Username for user.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_auto_login#username AppAutoLogin#username}

---

## Classes <a name="Classes" id="Classes"></a>

### AppAutoLoginTimeoutsOutputReference <a name="AppAutoLoginTimeoutsOutputReference" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import app_auto_login

appAutoLogin.AppAutoLoginTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeouts">AppAutoLoginTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[AppAutoLoginTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginTimeouts">AppAutoLoginTimeouts</a>, cdktf.IResolvable]

---


### AppAutoLoginUsersList <a name="AppAutoLoginUsersList" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsersList.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import app_auto_login

appAutoLogin.AppAutoLoginUsersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsersList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppAutoLoginUsersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsers">AppAutoLoginUsers</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AppAutoLoginUsers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsers">AppAutoLoginUsers</a>]]

---


### AppAutoLoginUsersOutputReference <a name="AppAutoLoginUsersOutputReference" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import app_auto_login

appAutoLogin.AppAutoLoginUsersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsersOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsersOutputReference.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsersOutputReference.resetUsername">reset_username</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_id` <a name="reset_id" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsersOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_password` <a name="reset_password" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsersOutputReference.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_username` <a name="reset_username" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsersOutputReference.resetUsername"></a>

```python
def reset_username() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsersOutputReference.property.scope">scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsersOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsersOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsersOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsersOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsersOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsersOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsers">AppAutoLoginUsers</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsersOutputReference.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsersOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsersOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsersOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsersOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsersOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsersOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[AppAutoLoginUsers, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-okta.appAutoLogin.AppAutoLoginUsers">AppAutoLoginUsers</a>, cdktf.IResolvable]

---



