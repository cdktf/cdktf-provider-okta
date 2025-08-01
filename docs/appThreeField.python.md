# `appThreeField` Submodule <a name="`appThreeField` Submodule" id="@cdktf/provider-okta.appThreeField"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppThreeField <a name="AppThreeField" id="@cdktf/provider-okta.appThreeField.AppThreeField"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_three_field okta_app_three_field}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appThreeField.AppThreeField.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import app_three_field

appThreeField.AppThreeField(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  button_selector: str,
  extra_field_selector: str,
  extra_field_value: str,
  label: str,
  password_selector: str,
  url: str,
  username_selector: str,
  accessibility_error_redirect_url: str = None,
  accessibility_login_redirect_url: str = None,
  accessibility_self_service: typing.Union[bool, IResolvable] = None,
  admin_note: str = None,
  app_links_json: str = None,
  auto_submit_toolbar: typing.Union[bool, IResolvable] = None,
  credentials_scheme: str = None,
  enduser_note: str = None,
  hide_ios: typing.Union[bool, IResolvable] = None,
  hide_web: typing.Union[bool, IResolvable] = None,
  id: str = None,
  logo: str = None,
  reveal_password: typing.Union[bool, IResolvable] = None,
  shared_password: str = None,
  shared_username: str = None,
  status: str = None,
  timeouts: AppThreeFieldTimeouts = None,
  url_regex: str = None,
  user_name_template: str = None,
  user_name_template_push_status: str = None,
  user_name_template_suffix: str = None,
  user_name_template_type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.Initializer.parameter.buttonSelector">button_selector</a></code> | <code>str</code> | Login button field CSS selector. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.Initializer.parameter.extraFieldSelector">extra_field_selector</a></code> | <code>str</code> | Extra field CSS selector. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.Initializer.parameter.extraFieldValue">extra_field_value</a></code> | <code>str</code> | Value for extra form field. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.Initializer.parameter.label">label</a></code> | <code>str</code> | The Application's display name. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.Initializer.parameter.passwordSelector">password_selector</a></code> | <code>str</code> | Login password field CSS selector. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.Initializer.parameter.url">url</a></code> | <code>str</code> | Login URL. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.Initializer.parameter.usernameSelector">username_selector</a></code> | <code>str</code> | Login username field CSS selector. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.Initializer.parameter.accessibilityErrorRedirectUrl">accessibility_error_redirect_url</a></code> | <code>str</code> | Custom error page URL. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.Initializer.parameter.accessibilityLoginRedirectUrl">accessibility_login_redirect_url</a></code> | <code>str</code> | Custom login page URL. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.Initializer.parameter.accessibilitySelfService">accessibility_self_service</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable self service. Default is `false`. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.Initializer.parameter.adminNote">admin_note</a></code> | <code>str</code> | Application notes for admins. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.Initializer.parameter.appLinksJson">app_links_json</a></code> | <code>str</code> | Displays specific appLinks for the app. The value for each application link should be boolean. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.Initializer.parameter.autoSubmitToolbar">auto_submit_toolbar</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Display auto submit toolbar. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.Initializer.parameter.credentialsScheme">credentials_scheme</a></code> | <code>str</code> | Application credentials scheme. One of: `EDIT_USERNAME_AND_PASSWORD`, `ADMIN_SETS_CREDENTIALS`, `EDIT_PASSWORD_ONLY`, `EXTERNAL_PASSWORD_SYNC`, or `SHARED_USERNAME_AND_PASSWORD`. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.Initializer.parameter.enduserNote">enduser_note</a></code> | <code>str</code> | Application notes for end users. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.Initializer.parameter.hideIos">hide_ios</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Do not display application icon on mobile app. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.Initializer.parameter.hideWeb">hide_web</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Do not display application icon to users. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_three_field#id AppThreeField#id}. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.Initializer.parameter.logo">logo</a></code> | <code>str</code> | Local file path to the logo. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.Initializer.parameter.revealPassword">reveal_password</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allow user to reveal password. It can not be set to `true` if `credentials_scheme` is `ADMIN_SETS_CREDENTIALS`, `SHARED_USERNAME_AND_PASSWORD` or `EXTERNAL_PASSWORD_SYNC`. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.Initializer.parameter.sharedPassword">shared_password</a></code> | <code>str</code> | Shared password, required for certain schemes. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.Initializer.parameter.sharedUsername">shared_username</a></code> | <code>str</code> | Shared username, required for certain schemes. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.Initializer.parameter.status">status</a></code> | <code>str</code> | Status of application. By default, it is `ACTIVE`. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldTimeouts">AppThreeFieldTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.Initializer.parameter.urlRegex">url_regex</a></code> | <code>str</code> | A regex that further restricts URL to the specified regex. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.Initializer.parameter.userNameTemplate">user_name_template</a></code> | <code>str</code> | Username template. Default: `${source.login}`. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.Initializer.parameter.userNameTemplatePushStatus">user_name_template_push_status</a></code> | <code>str</code> | Push username on update. Valid values: `PUSH` and `DONT_PUSH`. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.Initializer.parameter.userNameTemplateSuffix">user_name_template_suffix</a></code> | <code>str</code> | Username template suffix. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.Initializer.parameter.userNameTemplateType">user_name_template_type</a></code> | <code>str</code> | Username template type. Default: `BUILT_IN`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.appThreeField.AppThreeField.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appThreeField.AppThreeField.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.appThreeField.AppThreeField.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.appThreeField.AppThreeField.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.appThreeField.AppThreeField.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.appThreeField.AppThreeField.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.appThreeField.AppThreeField.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appThreeField.AppThreeField.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.appThreeField.AppThreeField.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `button_selector`<sup>Required</sup> <a name="button_selector" id="@cdktf/provider-okta.appThreeField.AppThreeField.Initializer.parameter.buttonSelector"></a>

- *Type:* str

Login button field CSS selector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_three_field#button_selector AppThreeField#button_selector}

---

##### `extra_field_selector`<sup>Required</sup> <a name="extra_field_selector" id="@cdktf/provider-okta.appThreeField.AppThreeField.Initializer.parameter.extraFieldSelector"></a>

- *Type:* str

Extra field CSS selector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_three_field#extra_field_selector AppThreeField#extra_field_selector}

---

##### `extra_field_value`<sup>Required</sup> <a name="extra_field_value" id="@cdktf/provider-okta.appThreeField.AppThreeField.Initializer.parameter.extraFieldValue"></a>

- *Type:* str

Value for extra form field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_three_field#extra_field_value AppThreeField#extra_field_value}

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-okta.appThreeField.AppThreeField.Initializer.parameter.label"></a>

- *Type:* str

The Application's display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_three_field#label AppThreeField#label}

---

##### `password_selector`<sup>Required</sup> <a name="password_selector" id="@cdktf/provider-okta.appThreeField.AppThreeField.Initializer.parameter.passwordSelector"></a>

- *Type:* str

Login password field CSS selector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_three_field#password_selector AppThreeField#password_selector}

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-okta.appThreeField.AppThreeField.Initializer.parameter.url"></a>

- *Type:* str

Login URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_three_field#url AppThreeField#url}

---

##### `username_selector`<sup>Required</sup> <a name="username_selector" id="@cdktf/provider-okta.appThreeField.AppThreeField.Initializer.parameter.usernameSelector"></a>

- *Type:* str

Login username field CSS selector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_three_field#username_selector AppThreeField#username_selector}

---

##### `accessibility_error_redirect_url`<sup>Optional</sup> <a name="accessibility_error_redirect_url" id="@cdktf/provider-okta.appThreeField.AppThreeField.Initializer.parameter.accessibilityErrorRedirectUrl"></a>

- *Type:* str

Custom error page URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_three_field#accessibility_error_redirect_url AppThreeField#accessibility_error_redirect_url}

---

##### `accessibility_login_redirect_url`<sup>Optional</sup> <a name="accessibility_login_redirect_url" id="@cdktf/provider-okta.appThreeField.AppThreeField.Initializer.parameter.accessibilityLoginRedirectUrl"></a>

- *Type:* str

Custom login page URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_three_field#accessibility_login_redirect_url AppThreeField#accessibility_login_redirect_url}

---

##### `accessibility_self_service`<sup>Optional</sup> <a name="accessibility_self_service" id="@cdktf/provider-okta.appThreeField.AppThreeField.Initializer.parameter.accessibilitySelfService"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable self service. Default is `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_three_field#accessibility_self_service AppThreeField#accessibility_self_service}

---

##### `admin_note`<sup>Optional</sup> <a name="admin_note" id="@cdktf/provider-okta.appThreeField.AppThreeField.Initializer.parameter.adminNote"></a>

- *Type:* str

Application notes for admins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_three_field#admin_note AppThreeField#admin_note}

---

##### `app_links_json`<sup>Optional</sup> <a name="app_links_json" id="@cdktf/provider-okta.appThreeField.AppThreeField.Initializer.parameter.appLinksJson"></a>

- *Type:* str

Displays specific appLinks for the app. The value for each application link should be boolean.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_three_field#app_links_json AppThreeField#app_links_json}

---

##### `auto_submit_toolbar`<sup>Optional</sup> <a name="auto_submit_toolbar" id="@cdktf/provider-okta.appThreeField.AppThreeField.Initializer.parameter.autoSubmitToolbar"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Display auto submit toolbar.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_three_field#auto_submit_toolbar AppThreeField#auto_submit_toolbar}

---

##### `credentials_scheme`<sup>Optional</sup> <a name="credentials_scheme" id="@cdktf/provider-okta.appThreeField.AppThreeField.Initializer.parameter.credentialsScheme"></a>

- *Type:* str

Application credentials scheme. One of: `EDIT_USERNAME_AND_PASSWORD`, `ADMIN_SETS_CREDENTIALS`, `EDIT_PASSWORD_ONLY`, `EXTERNAL_PASSWORD_SYNC`, or `SHARED_USERNAME_AND_PASSWORD`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_three_field#credentials_scheme AppThreeField#credentials_scheme}

---

##### `enduser_note`<sup>Optional</sup> <a name="enduser_note" id="@cdktf/provider-okta.appThreeField.AppThreeField.Initializer.parameter.enduserNote"></a>

- *Type:* str

Application notes for end users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_three_field#enduser_note AppThreeField#enduser_note}

---

##### `hide_ios`<sup>Optional</sup> <a name="hide_ios" id="@cdktf/provider-okta.appThreeField.AppThreeField.Initializer.parameter.hideIos"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Do not display application icon on mobile app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_three_field#hide_ios AppThreeField#hide_ios}

---

##### `hide_web`<sup>Optional</sup> <a name="hide_web" id="@cdktf/provider-okta.appThreeField.AppThreeField.Initializer.parameter.hideWeb"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Do not display application icon to users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_three_field#hide_web AppThreeField#hide_web}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.appThreeField.AppThreeField.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_three_field#id AppThreeField#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logo`<sup>Optional</sup> <a name="logo" id="@cdktf/provider-okta.appThreeField.AppThreeField.Initializer.parameter.logo"></a>

- *Type:* str

Local file path to the logo.

The file must be in PNG, JPG, or GIF format, and less than 1 MB in size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_three_field#logo AppThreeField#logo}

---

##### `reveal_password`<sup>Optional</sup> <a name="reveal_password" id="@cdktf/provider-okta.appThreeField.AppThreeField.Initializer.parameter.revealPassword"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow user to reveal password. It can not be set to `true` if `credentials_scheme` is `ADMIN_SETS_CREDENTIALS`, `SHARED_USERNAME_AND_PASSWORD` or `EXTERNAL_PASSWORD_SYNC`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_three_field#reveal_password AppThreeField#reveal_password}

---

##### `shared_password`<sup>Optional</sup> <a name="shared_password" id="@cdktf/provider-okta.appThreeField.AppThreeField.Initializer.parameter.sharedPassword"></a>

- *Type:* str

Shared password, required for certain schemes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_three_field#shared_password AppThreeField#shared_password}

---

##### `shared_username`<sup>Optional</sup> <a name="shared_username" id="@cdktf/provider-okta.appThreeField.AppThreeField.Initializer.parameter.sharedUsername"></a>

- *Type:* str

Shared username, required for certain schemes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_three_field#shared_username AppThreeField#shared_username}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.appThreeField.AppThreeField.Initializer.parameter.status"></a>

- *Type:* str

Status of application. By default, it is `ACTIVE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_three_field#status AppThreeField#status}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-okta.appThreeField.AppThreeField.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldTimeouts">AppThreeFieldTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_three_field#timeouts AppThreeField#timeouts}

---

##### `url_regex`<sup>Optional</sup> <a name="url_regex" id="@cdktf/provider-okta.appThreeField.AppThreeField.Initializer.parameter.urlRegex"></a>

- *Type:* str

A regex that further restricts URL to the specified regex.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_three_field#url_regex AppThreeField#url_regex}

---

##### `user_name_template`<sup>Optional</sup> <a name="user_name_template" id="@cdktf/provider-okta.appThreeField.AppThreeField.Initializer.parameter.userNameTemplate"></a>

- *Type:* str

Username template. Default: `${source.login}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_three_field#user_name_template AppThreeField#user_name_template}

---

##### `user_name_template_push_status`<sup>Optional</sup> <a name="user_name_template_push_status" id="@cdktf/provider-okta.appThreeField.AppThreeField.Initializer.parameter.userNameTemplatePushStatus"></a>

- *Type:* str

Push username on update. Valid values: `PUSH` and `DONT_PUSH`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_three_field#user_name_template_push_status AppThreeField#user_name_template_push_status}

---

##### `user_name_template_suffix`<sup>Optional</sup> <a name="user_name_template_suffix" id="@cdktf/provider-okta.appThreeField.AppThreeField.Initializer.parameter.userNameTemplateSuffix"></a>

- *Type:* str

Username template suffix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_three_field#user_name_template_suffix AppThreeField#user_name_template_suffix}

---

##### `user_name_template_type`<sup>Optional</sup> <a name="user_name_template_type" id="@cdktf/provider-okta.appThreeField.AppThreeField.Initializer.parameter.userNameTemplateType"></a>

- *Type:* str

Username template type. Default: `BUILT_IN`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_three_field#user_name_template_type AppThreeField#user_name_template_type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.resetAccessibilityErrorRedirectUrl">reset_accessibility_error_redirect_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.resetAccessibilityLoginRedirectUrl">reset_accessibility_login_redirect_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.resetAccessibilitySelfService">reset_accessibility_self_service</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.resetAdminNote">reset_admin_note</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.resetAppLinksJson">reset_app_links_json</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.resetAutoSubmitToolbar">reset_auto_submit_toolbar</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.resetCredentialsScheme">reset_credentials_scheme</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.resetEnduserNote">reset_enduser_note</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.resetHideIos">reset_hide_ios</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.resetHideWeb">reset_hide_web</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.resetLogo">reset_logo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.resetRevealPassword">reset_reveal_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.resetSharedPassword">reset_shared_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.resetSharedUsername">reset_shared_username</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.resetUrlRegex">reset_url_regex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.resetUserNameTemplate">reset_user_name_template</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.resetUserNameTemplatePushStatus">reset_user_name_template_push_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.resetUserNameTemplateSuffix">reset_user_name_template_suffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.resetUserNameTemplateType">reset_user_name_template_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.appThreeField.AppThreeField.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-okta.appThreeField.AppThreeField.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.appThreeField.AppThreeField.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.appThreeField.AppThreeField.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-okta.appThreeField.AppThreeField.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-okta.appThreeField.AppThreeField.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-okta.appThreeField.AppThreeField.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-okta.appThreeField.AppThreeField.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-okta.appThreeField.AppThreeField.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-okta.appThreeField.AppThreeField.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-okta.appThreeField.AppThreeField.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-okta.appThreeField.AppThreeField.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.appThreeField.AppThreeField.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appThreeField.AppThreeField.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.appThreeField.AppThreeField.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appThreeField.AppThreeField.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.appThreeField.AppThreeField.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appThreeField.AppThreeField.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.appThreeField.AppThreeField.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appThreeField.AppThreeField.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.appThreeField.AppThreeField.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appThreeField.AppThreeField.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.appThreeField.AppThreeField.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appThreeField.AppThreeField.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.appThreeField.AppThreeField.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appThreeField.AppThreeField.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.appThreeField.AppThreeField.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appThreeField.AppThreeField.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.appThreeField.AppThreeField.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appThreeField.AppThreeField.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-okta.appThreeField.AppThreeField.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-okta.appThreeField.AppThreeField.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appThreeField.AppThreeField.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appThreeField.AppThreeField.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.appThreeField.AppThreeField.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appThreeField.AppThreeField.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-okta.appThreeField.AppThreeField.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appThreeField.AppThreeField.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-okta.appThreeField.AppThreeField.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-okta.appThreeField.AppThreeField.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.appThreeField.AppThreeField.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-okta.appThreeField.AppThreeField.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appThreeField.AppThreeField.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-okta.appThreeField.AppThreeField.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-okta.appThreeField.AppThreeField.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_three_field#create AppThreeField#create}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-okta.appThreeField.AppThreeField.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_three_field#read AppThreeField#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-okta.appThreeField.AppThreeField.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_three_field#update AppThreeField#update}.

---

##### `reset_accessibility_error_redirect_url` <a name="reset_accessibility_error_redirect_url" id="@cdktf/provider-okta.appThreeField.AppThreeField.resetAccessibilityErrorRedirectUrl"></a>

```python
def reset_accessibility_error_redirect_url() -> None
```

##### `reset_accessibility_login_redirect_url` <a name="reset_accessibility_login_redirect_url" id="@cdktf/provider-okta.appThreeField.AppThreeField.resetAccessibilityLoginRedirectUrl"></a>

```python
def reset_accessibility_login_redirect_url() -> None
```

##### `reset_accessibility_self_service` <a name="reset_accessibility_self_service" id="@cdktf/provider-okta.appThreeField.AppThreeField.resetAccessibilitySelfService"></a>

```python
def reset_accessibility_self_service() -> None
```

##### `reset_admin_note` <a name="reset_admin_note" id="@cdktf/provider-okta.appThreeField.AppThreeField.resetAdminNote"></a>

```python
def reset_admin_note() -> None
```

##### `reset_app_links_json` <a name="reset_app_links_json" id="@cdktf/provider-okta.appThreeField.AppThreeField.resetAppLinksJson"></a>

```python
def reset_app_links_json() -> None
```

##### `reset_auto_submit_toolbar` <a name="reset_auto_submit_toolbar" id="@cdktf/provider-okta.appThreeField.AppThreeField.resetAutoSubmitToolbar"></a>

```python
def reset_auto_submit_toolbar() -> None
```

##### `reset_credentials_scheme` <a name="reset_credentials_scheme" id="@cdktf/provider-okta.appThreeField.AppThreeField.resetCredentialsScheme"></a>

```python
def reset_credentials_scheme() -> None
```

##### `reset_enduser_note` <a name="reset_enduser_note" id="@cdktf/provider-okta.appThreeField.AppThreeField.resetEnduserNote"></a>

```python
def reset_enduser_note() -> None
```

##### `reset_hide_ios` <a name="reset_hide_ios" id="@cdktf/provider-okta.appThreeField.AppThreeField.resetHideIos"></a>

```python
def reset_hide_ios() -> None
```

##### `reset_hide_web` <a name="reset_hide_web" id="@cdktf/provider-okta.appThreeField.AppThreeField.resetHideWeb"></a>

```python
def reset_hide_web() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-okta.appThreeField.AppThreeField.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_logo` <a name="reset_logo" id="@cdktf/provider-okta.appThreeField.AppThreeField.resetLogo"></a>

```python
def reset_logo() -> None
```

##### `reset_reveal_password` <a name="reset_reveal_password" id="@cdktf/provider-okta.appThreeField.AppThreeField.resetRevealPassword"></a>

```python
def reset_reveal_password() -> None
```

##### `reset_shared_password` <a name="reset_shared_password" id="@cdktf/provider-okta.appThreeField.AppThreeField.resetSharedPassword"></a>

```python
def reset_shared_password() -> None
```

##### `reset_shared_username` <a name="reset_shared_username" id="@cdktf/provider-okta.appThreeField.AppThreeField.resetSharedUsername"></a>

```python
def reset_shared_username() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktf/provider-okta.appThreeField.AppThreeField.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-okta.appThreeField.AppThreeField.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_url_regex` <a name="reset_url_regex" id="@cdktf/provider-okta.appThreeField.AppThreeField.resetUrlRegex"></a>

```python
def reset_url_regex() -> None
```

##### `reset_user_name_template` <a name="reset_user_name_template" id="@cdktf/provider-okta.appThreeField.AppThreeField.resetUserNameTemplate"></a>

```python
def reset_user_name_template() -> None
```

##### `reset_user_name_template_push_status` <a name="reset_user_name_template_push_status" id="@cdktf/provider-okta.appThreeField.AppThreeField.resetUserNameTemplatePushStatus"></a>

```python
def reset_user_name_template_push_status() -> None
```

##### `reset_user_name_template_suffix` <a name="reset_user_name_template_suffix" id="@cdktf/provider-okta.appThreeField.AppThreeField.resetUserNameTemplateSuffix"></a>

```python
def reset_user_name_template_suffix() -> None
```

##### `reset_user_name_template_type` <a name="reset_user_name_template_type" id="@cdktf/provider-okta.appThreeField.AppThreeField.resetUserNameTemplateType"></a>

```python
def reset_user_name_template_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AppThreeField resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-okta.appThreeField.AppThreeField.isConstruct"></a>

```python
from cdktf_cdktf_provider_okta import app_three_field

appThreeField.AppThreeField.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appThreeField.AppThreeField.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-okta.appThreeField.AppThreeField.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_okta import app_three_field

appThreeField.AppThreeField.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appThreeField.AppThreeField.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-okta.appThreeField.AppThreeField.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_okta import app_three_field

appThreeField.AppThreeField.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appThreeField.AppThreeField.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-okta.appThreeField.AppThreeField.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_okta import app_three_field

appThreeField.AppThreeField.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AppThreeField resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.appThreeField.AppThreeField.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-okta.appThreeField.AppThreeField.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AppThreeField to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-okta.appThreeField.AppThreeField.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AppThreeField that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_three_field#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appThreeField.AppThreeField.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AppThreeField to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.logoUrl">logo_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.signOnMode">sign_on_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference">AppThreeFieldTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.accessibilityErrorRedirectUrlInput">accessibility_error_redirect_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.accessibilityLoginRedirectUrlInput">accessibility_login_redirect_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.accessibilitySelfServiceInput">accessibility_self_service_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.adminNoteInput">admin_note_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.appLinksJsonInput">app_links_json_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.autoSubmitToolbarInput">auto_submit_toolbar_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.buttonSelectorInput">button_selector_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.credentialsSchemeInput">credentials_scheme_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.enduserNoteInput">enduser_note_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.extraFieldSelectorInput">extra_field_selector_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.extraFieldValueInput">extra_field_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.hideIosInput">hide_ios_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.hideWebInput">hide_web_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.labelInput">label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.logoInput">logo_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.passwordSelectorInput">password_selector_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.revealPasswordInput">reveal_password_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.sharedPasswordInput">shared_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.sharedUsernameInput">shared_username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldTimeouts">AppThreeFieldTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.urlRegexInput">url_regex_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.usernameSelectorInput">username_selector_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.userNameTemplateInput">user_name_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.userNameTemplatePushStatusInput">user_name_template_push_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.userNameTemplateSuffixInput">user_name_template_suffix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.userNameTemplateTypeInput">user_name_template_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.accessibilityErrorRedirectUrl">accessibility_error_redirect_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.accessibilityLoginRedirectUrl">accessibility_login_redirect_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.accessibilitySelfService">accessibility_self_service</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.adminNote">admin_note</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.appLinksJson">app_links_json</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.autoSubmitToolbar">auto_submit_toolbar</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.buttonSelector">button_selector</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.credentialsScheme">credentials_scheme</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.enduserNote">enduser_note</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.extraFieldSelector">extra_field_selector</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.extraFieldValue">extra_field_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.hideIos">hide_ios</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.hideWeb">hide_web</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.label">label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.logo">logo</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.passwordSelector">password_selector</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.revealPassword">reveal_password</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.sharedPassword">shared_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.sharedUsername">shared_username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.urlRegex">url_regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.usernameSelector">username_selector</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.userNameTemplate">user_name_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.userNameTemplatePushStatus">user_name_template_push_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.userNameTemplateSuffix">user_name_template_suffix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.userNameTemplateType">user_name_template_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `logo_url`<sup>Required</sup> <a name="logo_url" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.logoUrl"></a>

```python
logo_url: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `sign_on_mode`<sup>Required</sup> <a name="sign_on_mode" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.signOnMode"></a>

```python
sign_on_mode: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.timeouts"></a>

```python
timeouts: AppThreeFieldTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference">AppThreeFieldTimeoutsOutputReference</a>

---

##### `accessibility_error_redirect_url_input`<sup>Optional</sup> <a name="accessibility_error_redirect_url_input" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.accessibilityErrorRedirectUrlInput"></a>

```python
accessibility_error_redirect_url_input: str
```

- *Type:* str

---

##### `accessibility_login_redirect_url_input`<sup>Optional</sup> <a name="accessibility_login_redirect_url_input" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.accessibilityLoginRedirectUrlInput"></a>

```python
accessibility_login_redirect_url_input: str
```

- *Type:* str

---

##### `accessibility_self_service_input`<sup>Optional</sup> <a name="accessibility_self_service_input" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.accessibilitySelfServiceInput"></a>

```python
accessibility_self_service_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `admin_note_input`<sup>Optional</sup> <a name="admin_note_input" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.adminNoteInput"></a>

```python
admin_note_input: str
```

- *Type:* str

---

##### `app_links_json_input`<sup>Optional</sup> <a name="app_links_json_input" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.appLinksJsonInput"></a>

```python
app_links_json_input: str
```

- *Type:* str

---

##### `auto_submit_toolbar_input`<sup>Optional</sup> <a name="auto_submit_toolbar_input" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.autoSubmitToolbarInput"></a>

```python
auto_submit_toolbar_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `button_selector_input`<sup>Optional</sup> <a name="button_selector_input" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.buttonSelectorInput"></a>

```python
button_selector_input: str
```

- *Type:* str

---

##### `credentials_scheme_input`<sup>Optional</sup> <a name="credentials_scheme_input" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.credentialsSchemeInput"></a>

```python
credentials_scheme_input: str
```

- *Type:* str

---

##### `enduser_note_input`<sup>Optional</sup> <a name="enduser_note_input" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.enduserNoteInput"></a>

```python
enduser_note_input: str
```

- *Type:* str

---

##### `extra_field_selector_input`<sup>Optional</sup> <a name="extra_field_selector_input" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.extraFieldSelectorInput"></a>

```python
extra_field_selector_input: str
```

- *Type:* str

---

##### `extra_field_value_input`<sup>Optional</sup> <a name="extra_field_value_input" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.extraFieldValueInput"></a>

```python
extra_field_value_input: str
```

- *Type:* str

---

##### `hide_ios_input`<sup>Optional</sup> <a name="hide_ios_input" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.hideIosInput"></a>

```python
hide_ios_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `hide_web_input`<sup>Optional</sup> <a name="hide_web_input" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.hideWebInput"></a>

```python
hide_web_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `label_input`<sup>Optional</sup> <a name="label_input" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.labelInput"></a>

```python
label_input: str
```

- *Type:* str

---

##### `logo_input`<sup>Optional</sup> <a name="logo_input" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.logoInput"></a>

```python
logo_input: str
```

- *Type:* str

---

##### `password_selector_input`<sup>Optional</sup> <a name="password_selector_input" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.passwordSelectorInput"></a>

```python
password_selector_input: str
```

- *Type:* str

---

##### `reveal_password_input`<sup>Optional</sup> <a name="reveal_password_input" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.revealPasswordInput"></a>

```python
reveal_password_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `shared_password_input`<sup>Optional</sup> <a name="shared_password_input" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.sharedPasswordInput"></a>

```python
shared_password_input: str
```

- *Type:* str

---

##### `shared_username_input`<sup>Optional</sup> <a name="shared_username_input" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.sharedUsernameInput"></a>

```python
shared_username_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, AppThreeFieldTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldTimeouts">AppThreeFieldTimeouts</a>]

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `url_regex_input`<sup>Optional</sup> <a name="url_regex_input" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.urlRegexInput"></a>

```python
url_regex_input: str
```

- *Type:* str

---

##### `username_selector_input`<sup>Optional</sup> <a name="username_selector_input" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.usernameSelectorInput"></a>

```python
username_selector_input: str
```

- *Type:* str

---

##### `user_name_template_input`<sup>Optional</sup> <a name="user_name_template_input" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.userNameTemplateInput"></a>

```python
user_name_template_input: str
```

- *Type:* str

---

##### `user_name_template_push_status_input`<sup>Optional</sup> <a name="user_name_template_push_status_input" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.userNameTemplatePushStatusInput"></a>

```python
user_name_template_push_status_input: str
```

- *Type:* str

---

##### `user_name_template_suffix_input`<sup>Optional</sup> <a name="user_name_template_suffix_input" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.userNameTemplateSuffixInput"></a>

```python
user_name_template_suffix_input: str
```

- *Type:* str

---

##### `user_name_template_type_input`<sup>Optional</sup> <a name="user_name_template_type_input" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.userNameTemplateTypeInput"></a>

```python
user_name_template_type_input: str
```

- *Type:* str

---

##### `accessibility_error_redirect_url`<sup>Required</sup> <a name="accessibility_error_redirect_url" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.accessibilityErrorRedirectUrl"></a>

```python
accessibility_error_redirect_url: str
```

- *Type:* str

---

##### `accessibility_login_redirect_url`<sup>Required</sup> <a name="accessibility_login_redirect_url" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.accessibilityLoginRedirectUrl"></a>

```python
accessibility_login_redirect_url: str
```

- *Type:* str

---

##### `accessibility_self_service`<sup>Required</sup> <a name="accessibility_self_service" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.accessibilitySelfService"></a>

```python
accessibility_self_service: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `admin_note`<sup>Required</sup> <a name="admin_note" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.adminNote"></a>

```python
admin_note: str
```

- *Type:* str

---

##### `app_links_json`<sup>Required</sup> <a name="app_links_json" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.appLinksJson"></a>

```python
app_links_json: str
```

- *Type:* str

---

##### `auto_submit_toolbar`<sup>Required</sup> <a name="auto_submit_toolbar" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.autoSubmitToolbar"></a>

```python
auto_submit_toolbar: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `button_selector`<sup>Required</sup> <a name="button_selector" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.buttonSelector"></a>

```python
button_selector: str
```

- *Type:* str

---

##### `credentials_scheme`<sup>Required</sup> <a name="credentials_scheme" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.credentialsScheme"></a>

```python
credentials_scheme: str
```

- *Type:* str

---

##### `enduser_note`<sup>Required</sup> <a name="enduser_note" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.enduserNote"></a>

```python
enduser_note: str
```

- *Type:* str

---

##### `extra_field_selector`<sup>Required</sup> <a name="extra_field_selector" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.extraFieldSelector"></a>

```python
extra_field_selector: str
```

- *Type:* str

---

##### `extra_field_value`<sup>Required</sup> <a name="extra_field_value" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.extraFieldValue"></a>

```python
extra_field_value: str
```

- *Type:* str

---

##### `hide_ios`<sup>Required</sup> <a name="hide_ios" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.hideIos"></a>

```python
hide_ios: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `hide_web`<sup>Required</sup> <a name="hide_web" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.hideWeb"></a>

```python
hide_web: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.label"></a>

```python
label: str
```

- *Type:* str

---

##### `logo`<sup>Required</sup> <a name="logo" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.logo"></a>

```python
logo: str
```

- *Type:* str

---

##### `password_selector`<sup>Required</sup> <a name="password_selector" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.passwordSelector"></a>

```python
password_selector: str
```

- *Type:* str

---

##### `reveal_password`<sup>Required</sup> <a name="reveal_password" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.revealPassword"></a>

```python
reveal_password: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `shared_password`<sup>Required</sup> <a name="shared_password" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.sharedPassword"></a>

```python
shared_password: str
```

- *Type:* str

---

##### `shared_username`<sup>Required</sup> <a name="shared_username" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.sharedUsername"></a>

```python
shared_username: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `url_regex`<sup>Required</sup> <a name="url_regex" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.urlRegex"></a>

```python
url_regex: str
```

- *Type:* str

---

##### `username_selector`<sup>Required</sup> <a name="username_selector" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.usernameSelector"></a>

```python
username_selector: str
```

- *Type:* str

---

##### `user_name_template`<sup>Required</sup> <a name="user_name_template" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.userNameTemplate"></a>

```python
user_name_template: str
```

- *Type:* str

---

##### `user_name_template_push_status`<sup>Required</sup> <a name="user_name_template_push_status" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.userNameTemplatePushStatus"></a>

```python
user_name_template_push_status: str
```

- *Type:* str

---

##### `user_name_template_suffix`<sup>Required</sup> <a name="user_name_template_suffix" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.userNameTemplateSuffix"></a>

```python
user_name_template_suffix: str
```

- *Type:* str

---

##### `user_name_template_type`<sup>Required</sup> <a name="user_name_template_type" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.userNameTemplateType"></a>

```python
user_name_template_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeField.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.appThreeField.AppThreeField.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AppThreeFieldConfig <a name="AppThreeFieldConfig" id="@cdktf/provider-okta.appThreeField.AppThreeFieldConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import app_three_field

appThreeField.AppThreeFieldConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  button_selector: str,
  extra_field_selector: str,
  extra_field_value: str,
  label: str,
  password_selector: str,
  url: str,
  username_selector: str,
  accessibility_error_redirect_url: str = None,
  accessibility_login_redirect_url: str = None,
  accessibility_self_service: typing.Union[bool, IResolvable] = None,
  admin_note: str = None,
  app_links_json: str = None,
  auto_submit_toolbar: typing.Union[bool, IResolvable] = None,
  credentials_scheme: str = None,
  enduser_note: str = None,
  hide_ios: typing.Union[bool, IResolvable] = None,
  hide_web: typing.Union[bool, IResolvable] = None,
  id: str = None,
  logo: str = None,
  reveal_password: typing.Union[bool, IResolvable] = None,
  shared_password: str = None,
  shared_username: str = None,
  status: str = None,
  timeouts: AppThreeFieldTimeouts = None,
  url_regex: str = None,
  user_name_template: str = None,
  user_name_template_push_status: str = None,
  user_name_template_suffix: str = None,
  user_name_template_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.buttonSelector">button_selector</a></code> | <code>str</code> | Login button field CSS selector. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.extraFieldSelector">extra_field_selector</a></code> | <code>str</code> | Extra field CSS selector. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.extraFieldValue">extra_field_value</a></code> | <code>str</code> | Value for extra form field. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.label">label</a></code> | <code>str</code> | The Application's display name. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.passwordSelector">password_selector</a></code> | <code>str</code> | Login password field CSS selector. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.url">url</a></code> | <code>str</code> | Login URL. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.usernameSelector">username_selector</a></code> | <code>str</code> | Login username field CSS selector. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.accessibilityErrorRedirectUrl">accessibility_error_redirect_url</a></code> | <code>str</code> | Custom error page URL. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.accessibilityLoginRedirectUrl">accessibility_login_redirect_url</a></code> | <code>str</code> | Custom login page URL. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.accessibilitySelfService">accessibility_self_service</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable self service. Default is `false`. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.adminNote">admin_note</a></code> | <code>str</code> | Application notes for admins. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.appLinksJson">app_links_json</a></code> | <code>str</code> | Displays specific appLinks for the app. The value for each application link should be boolean. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.autoSubmitToolbar">auto_submit_toolbar</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Display auto submit toolbar. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.credentialsScheme">credentials_scheme</a></code> | <code>str</code> | Application credentials scheme. One of: `EDIT_USERNAME_AND_PASSWORD`, `ADMIN_SETS_CREDENTIALS`, `EDIT_PASSWORD_ONLY`, `EXTERNAL_PASSWORD_SYNC`, or `SHARED_USERNAME_AND_PASSWORD`. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.enduserNote">enduser_note</a></code> | <code>str</code> | Application notes for end users. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.hideIos">hide_ios</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Do not display application icon on mobile app. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.hideWeb">hide_web</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Do not display application icon to users. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_three_field#id AppThreeField#id}. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.logo">logo</a></code> | <code>str</code> | Local file path to the logo. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.revealPassword">reveal_password</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allow user to reveal password. It can not be set to `true` if `credentials_scheme` is `ADMIN_SETS_CREDENTIALS`, `SHARED_USERNAME_AND_PASSWORD` or `EXTERNAL_PASSWORD_SYNC`. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.sharedPassword">shared_password</a></code> | <code>str</code> | Shared password, required for certain schemes. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.sharedUsername">shared_username</a></code> | <code>str</code> | Shared username, required for certain schemes. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.status">status</a></code> | <code>str</code> | Status of application. By default, it is `ACTIVE`. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldTimeouts">AppThreeFieldTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.urlRegex">url_regex</a></code> | <code>str</code> | A regex that further restricts URL to the specified regex. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.userNameTemplate">user_name_template</a></code> | <code>str</code> | Username template. Default: `${source.login}`. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.userNameTemplatePushStatus">user_name_template_push_status</a></code> | <code>str</code> | Push username on update. Valid values: `PUSH` and `DONT_PUSH`. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.userNameTemplateSuffix">user_name_template_suffix</a></code> | <code>str</code> | Username template suffix. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.userNameTemplateType">user_name_template_type</a></code> | <code>str</code> | Username template type. Default: `BUILT_IN`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `button_selector`<sup>Required</sup> <a name="button_selector" id="@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.buttonSelector"></a>

```python
button_selector: str
```

- *Type:* str

Login button field CSS selector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_three_field#button_selector AppThreeField#button_selector}

---

##### `extra_field_selector`<sup>Required</sup> <a name="extra_field_selector" id="@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.extraFieldSelector"></a>

```python
extra_field_selector: str
```

- *Type:* str

Extra field CSS selector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_three_field#extra_field_selector AppThreeField#extra_field_selector}

---

##### `extra_field_value`<sup>Required</sup> <a name="extra_field_value" id="@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.extraFieldValue"></a>

```python
extra_field_value: str
```

- *Type:* str

Value for extra form field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_three_field#extra_field_value AppThreeField#extra_field_value}

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.label"></a>

```python
label: str
```

- *Type:* str

The Application's display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_three_field#label AppThreeField#label}

---

##### `password_selector`<sup>Required</sup> <a name="password_selector" id="@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.passwordSelector"></a>

```python
password_selector: str
```

- *Type:* str

Login password field CSS selector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_three_field#password_selector AppThreeField#password_selector}

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.url"></a>

```python
url: str
```

- *Type:* str

Login URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_three_field#url AppThreeField#url}

---

##### `username_selector`<sup>Required</sup> <a name="username_selector" id="@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.usernameSelector"></a>

```python
username_selector: str
```

- *Type:* str

Login username field CSS selector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_three_field#username_selector AppThreeField#username_selector}

---

##### `accessibility_error_redirect_url`<sup>Optional</sup> <a name="accessibility_error_redirect_url" id="@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.accessibilityErrorRedirectUrl"></a>

```python
accessibility_error_redirect_url: str
```

- *Type:* str

Custom error page URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_three_field#accessibility_error_redirect_url AppThreeField#accessibility_error_redirect_url}

---

##### `accessibility_login_redirect_url`<sup>Optional</sup> <a name="accessibility_login_redirect_url" id="@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.accessibilityLoginRedirectUrl"></a>

```python
accessibility_login_redirect_url: str
```

- *Type:* str

Custom login page URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_three_field#accessibility_login_redirect_url AppThreeField#accessibility_login_redirect_url}

---

##### `accessibility_self_service`<sup>Optional</sup> <a name="accessibility_self_service" id="@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.accessibilitySelfService"></a>

```python
accessibility_self_service: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable self service. Default is `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_three_field#accessibility_self_service AppThreeField#accessibility_self_service}

---

##### `admin_note`<sup>Optional</sup> <a name="admin_note" id="@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.adminNote"></a>

```python
admin_note: str
```

- *Type:* str

Application notes for admins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_three_field#admin_note AppThreeField#admin_note}

---

##### `app_links_json`<sup>Optional</sup> <a name="app_links_json" id="@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.appLinksJson"></a>

```python
app_links_json: str
```

- *Type:* str

Displays specific appLinks for the app. The value for each application link should be boolean.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_three_field#app_links_json AppThreeField#app_links_json}

---

##### `auto_submit_toolbar`<sup>Optional</sup> <a name="auto_submit_toolbar" id="@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.autoSubmitToolbar"></a>

```python
auto_submit_toolbar: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Display auto submit toolbar.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_three_field#auto_submit_toolbar AppThreeField#auto_submit_toolbar}

---

##### `credentials_scheme`<sup>Optional</sup> <a name="credentials_scheme" id="@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.credentialsScheme"></a>

```python
credentials_scheme: str
```

- *Type:* str

Application credentials scheme. One of: `EDIT_USERNAME_AND_PASSWORD`, `ADMIN_SETS_CREDENTIALS`, `EDIT_PASSWORD_ONLY`, `EXTERNAL_PASSWORD_SYNC`, or `SHARED_USERNAME_AND_PASSWORD`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_three_field#credentials_scheme AppThreeField#credentials_scheme}

---

##### `enduser_note`<sup>Optional</sup> <a name="enduser_note" id="@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.enduserNote"></a>

```python
enduser_note: str
```

- *Type:* str

Application notes for end users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_three_field#enduser_note AppThreeField#enduser_note}

---

##### `hide_ios`<sup>Optional</sup> <a name="hide_ios" id="@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.hideIos"></a>

```python
hide_ios: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Do not display application icon on mobile app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_three_field#hide_ios AppThreeField#hide_ios}

---

##### `hide_web`<sup>Optional</sup> <a name="hide_web" id="@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.hideWeb"></a>

```python
hide_web: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Do not display application icon to users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_three_field#hide_web AppThreeField#hide_web}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_three_field#id AppThreeField#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logo`<sup>Optional</sup> <a name="logo" id="@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.logo"></a>

```python
logo: str
```

- *Type:* str

Local file path to the logo.

The file must be in PNG, JPG, or GIF format, and less than 1 MB in size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_three_field#logo AppThreeField#logo}

---

##### `reveal_password`<sup>Optional</sup> <a name="reveal_password" id="@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.revealPassword"></a>

```python
reveal_password: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow user to reveal password. It can not be set to `true` if `credentials_scheme` is `ADMIN_SETS_CREDENTIALS`, `SHARED_USERNAME_AND_PASSWORD` or `EXTERNAL_PASSWORD_SYNC`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_three_field#reveal_password AppThreeField#reveal_password}

---

##### `shared_password`<sup>Optional</sup> <a name="shared_password" id="@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.sharedPassword"></a>

```python
shared_password: str
```

- *Type:* str

Shared password, required for certain schemes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_three_field#shared_password AppThreeField#shared_password}

---

##### `shared_username`<sup>Optional</sup> <a name="shared_username" id="@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.sharedUsername"></a>

```python
shared_username: str
```

- *Type:* str

Shared username, required for certain schemes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_three_field#shared_username AppThreeField#shared_username}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.status"></a>

```python
status: str
```

- *Type:* str

Status of application. By default, it is `ACTIVE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_three_field#status AppThreeField#status}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.timeouts"></a>

```python
timeouts: AppThreeFieldTimeouts
```

- *Type:* <a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldTimeouts">AppThreeFieldTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_three_field#timeouts AppThreeField#timeouts}

---

##### `url_regex`<sup>Optional</sup> <a name="url_regex" id="@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.urlRegex"></a>

```python
url_regex: str
```

- *Type:* str

A regex that further restricts URL to the specified regex.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_three_field#url_regex AppThreeField#url_regex}

---

##### `user_name_template`<sup>Optional</sup> <a name="user_name_template" id="@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.userNameTemplate"></a>

```python
user_name_template: str
```

- *Type:* str

Username template. Default: `${source.login}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_three_field#user_name_template AppThreeField#user_name_template}

---

##### `user_name_template_push_status`<sup>Optional</sup> <a name="user_name_template_push_status" id="@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.userNameTemplatePushStatus"></a>

```python
user_name_template_push_status: str
```

- *Type:* str

Push username on update. Valid values: `PUSH` and `DONT_PUSH`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_three_field#user_name_template_push_status AppThreeField#user_name_template_push_status}

---

##### `user_name_template_suffix`<sup>Optional</sup> <a name="user_name_template_suffix" id="@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.userNameTemplateSuffix"></a>

```python
user_name_template_suffix: str
```

- *Type:* str

Username template suffix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_three_field#user_name_template_suffix AppThreeField#user_name_template_suffix}

---

##### `user_name_template_type`<sup>Optional</sup> <a name="user_name_template_type" id="@cdktf/provider-okta.appThreeField.AppThreeFieldConfig.property.userNameTemplateType"></a>

```python
user_name_template_type: str
```

- *Type:* str

Username template type. Default: `BUILT_IN`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_three_field#user_name_template_type AppThreeField#user_name_template_type}

---

### AppThreeFieldTimeouts <a name="AppThreeFieldTimeouts" id="@cdktf/provider-okta.appThreeField.AppThreeFieldTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appThreeField.AppThreeFieldTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import app_three_field

appThreeField.AppThreeFieldTimeouts(
  create: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_three_field#create AppThreeField#create}. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_three_field#read AppThreeField#read}. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_three_field#update AppThreeField#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-okta.appThreeField.AppThreeFieldTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_three_field#create AppThreeField#create}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-okta.appThreeField.AppThreeFieldTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_three_field#read AppThreeField#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-okta.appThreeField.AppThreeFieldTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/app_three_field#update AppThreeField#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppThreeFieldTimeoutsOutputReference <a name="AppThreeFieldTimeoutsOutputReference" id="@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import app_three_field

appThreeField.AppThreeFieldTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldTimeouts">AppThreeFieldTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-okta.appThreeField.AppThreeFieldTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AppThreeFieldTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-okta.appThreeField.AppThreeFieldTimeouts">AppThreeFieldTimeouts</a>]

---



