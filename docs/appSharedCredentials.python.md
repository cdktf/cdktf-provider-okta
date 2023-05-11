# `okta_app_shared_credentials`

Refer to the Terraform Registory for docs: [`okta_app_shared_credentials`](https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/app_shared_credentials).

# `appSharedCredentials` Submodule <a name="`appSharedCredentials` Submodule" id="@cdktf/provider-okta.appSharedCredentials"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppSharedCredentials <a name="AppSharedCredentials" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/app_shared_credentials okta_app_shared_credentials}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import app_shared_credentials

appSharedCredentials.AppSharedCredentials(
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
  accessibility_error_redirect_url: str = None,
  accessibility_login_redirect_url: str = None,
  accessibility_self_service: typing.Union[bool, IResolvable] = None,
  admin_note: str = None,
  app_links_json: str = None,
  auto_submit_toolbar: typing.Union[bool, IResolvable] = None,
  button_field: str = None,
  checkbox: str = None,
  enduser_note: str = None,
  hide_ios: typing.Union[bool, IResolvable] = None,
  hide_web: typing.Union[bool, IResolvable] = None,
  id: str = None,
  logo: str = None,
  password_field: str = None,
  preconfigured_app: str = None,
  redirect_url: str = None,
  shared_password: str = None,
  shared_username: str = None,
  status: str = None,
  timeouts: AppSharedCredentialsTimeouts = None,
  url: str = None,
  url_regex: str = None,
  username_field: str = None,
  user_name_template: str = None,
  user_name_template_push_status: str = None,
  user_name_template_suffix: str = None,
  user_name_template_type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.label">label</a></code> | <code>str</code> | Pretty name of app. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.accessibilityErrorRedirectUrl">accessibility_error_redirect_url</a></code> | <code>str</code> | Custom error page URL. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.accessibilityLoginRedirectUrl">accessibility_login_redirect_url</a></code> | <code>str</code> | Custom login page URL. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.accessibilitySelfService">accessibility_self_service</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable self service. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.adminNote">admin_note</a></code> | <code>str</code> | Application notes for admins. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.appLinksJson">app_links_json</a></code> | <code>str</code> | Displays specific appLinks for the app. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.autoSubmitToolbar">auto_submit_toolbar</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Display auto submit toolbar. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.buttonField">button_field</a></code> | <code>str</code> | Login button field. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.checkbox">checkbox</a></code> | <code>str</code> | CSS selector for the checkbox. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.enduserNote">enduser_note</a></code> | <code>str</code> | Application notes for end users. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.hideIos">hide_ios</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Do not display application icon on mobile app. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.hideWeb">hide_web</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Do not display application icon to users. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/app_shared_credentials#id AppSharedCredentials#id}. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.logo">logo</a></code> | <code>str</code> | Local path to logo of the application. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.passwordField">password_field</a></code> | <code>str</code> | Login password field. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.preconfiguredApp">preconfigured_app</a></code> | <code>str</code> | Preconfigured app name. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.redirectUrl">redirect_url</a></code> | <code>str</code> | Secondary URL of the sign-in page for this app. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.sharedPassword">shared_password</a></code> | <code>str</code> | Shared password, required for certain schemes. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.sharedUsername">shared_username</a></code> | <code>str</code> | Shared username, required for certain schemes. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.status">status</a></code> | <code>str</code> | Status of application. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeouts">AppSharedCredentialsTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.url">url</a></code> | <code>str</code> | Login URL. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.urlRegex">url_regex</a></code> | <code>str</code> | A regex that further restricts URL to the specified regex. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.usernameField">username_field</a></code> | <code>str</code> | Login username field. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.userNameTemplate">user_name_template</a></code> | <code>str</code> | Username template. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.userNameTemplatePushStatus">user_name_template_push_status</a></code> | <code>str</code> | Push username on update. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.userNameTemplateSuffix">user_name_template_suffix</a></code> | <code>str</code> | Username template suffix. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.userNameTemplateType">user_name_template_type</a></code> | <code>str</code> | Username template type. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.label"></a>

- *Type:* str

Pretty name of app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/app_shared_credentials#label AppSharedCredentials#label}

---

##### `accessibility_error_redirect_url`<sup>Optional</sup> <a name="accessibility_error_redirect_url" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.accessibilityErrorRedirectUrl"></a>

- *Type:* str

Custom error page URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/app_shared_credentials#accessibility_error_redirect_url AppSharedCredentials#accessibility_error_redirect_url}

---

##### `accessibility_login_redirect_url`<sup>Optional</sup> <a name="accessibility_login_redirect_url" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.accessibilityLoginRedirectUrl"></a>

- *Type:* str

Custom login page URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/app_shared_credentials#accessibility_login_redirect_url AppSharedCredentials#accessibility_login_redirect_url}

---

##### `accessibility_self_service`<sup>Optional</sup> <a name="accessibility_self_service" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.accessibilitySelfService"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable self service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/app_shared_credentials#accessibility_self_service AppSharedCredentials#accessibility_self_service}

---

##### `admin_note`<sup>Optional</sup> <a name="admin_note" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.adminNote"></a>

- *Type:* str

Application notes for admins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/app_shared_credentials#admin_note AppSharedCredentials#admin_note}

---

##### `app_links_json`<sup>Optional</sup> <a name="app_links_json" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.appLinksJson"></a>

- *Type:* str

Displays specific appLinks for the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/app_shared_credentials#app_links_json AppSharedCredentials#app_links_json}

---

##### `auto_submit_toolbar`<sup>Optional</sup> <a name="auto_submit_toolbar" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.autoSubmitToolbar"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Display auto submit toolbar.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/app_shared_credentials#auto_submit_toolbar AppSharedCredentials#auto_submit_toolbar}

---

##### `button_field`<sup>Optional</sup> <a name="button_field" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.buttonField"></a>

- *Type:* str

Login button field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/app_shared_credentials#button_field AppSharedCredentials#button_field}

---

##### `checkbox`<sup>Optional</sup> <a name="checkbox" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.checkbox"></a>

- *Type:* str

CSS selector for the checkbox.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/app_shared_credentials#checkbox AppSharedCredentials#checkbox}

---

##### `enduser_note`<sup>Optional</sup> <a name="enduser_note" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.enduserNote"></a>

- *Type:* str

Application notes for end users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/app_shared_credentials#enduser_note AppSharedCredentials#enduser_note}

---

##### `hide_ios`<sup>Optional</sup> <a name="hide_ios" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.hideIos"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Do not display application icon on mobile app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/app_shared_credentials#hide_ios AppSharedCredentials#hide_ios}

---

##### `hide_web`<sup>Optional</sup> <a name="hide_web" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.hideWeb"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Do not display application icon to users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/app_shared_credentials#hide_web AppSharedCredentials#hide_web}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/app_shared_credentials#id AppSharedCredentials#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logo`<sup>Optional</sup> <a name="logo" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.logo"></a>

- *Type:* str

Local path to logo of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/app_shared_credentials#logo AppSharedCredentials#logo}

---

##### `password_field`<sup>Optional</sup> <a name="password_field" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.passwordField"></a>

- *Type:* str

Login password field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/app_shared_credentials#password_field AppSharedCredentials#password_field}

---

##### `preconfigured_app`<sup>Optional</sup> <a name="preconfigured_app" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.preconfiguredApp"></a>

- *Type:* str

Preconfigured app name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/app_shared_credentials#preconfigured_app AppSharedCredentials#preconfigured_app}

---

##### `redirect_url`<sup>Optional</sup> <a name="redirect_url" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.redirectUrl"></a>

- *Type:* str

Secondary URL of the sign-in page for this app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/app_shared_credentials#redirect_url AppSharedCredentials#redirect_url}

---

##### `shared_password`<sup>Optional</sup> <a name="shared_password" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.sharedPassword"></a>

- *Type:* str

Shared password, required for certain schemes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/app_shared_credentials#shared_password AppSharedCredentials#shared_password}

---

##### `shared_username`<sup>Optional</sup> <a name="shared_username" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.sharedUsername"></a>

- *Type:* str

Shared username, required for certain schemes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/app_shared_credentials#shared_username AppSharedCredentials#shared_username}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.status"></a>

- *Type:* str

Status of application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/app_shared_credentials#status AppSharedCredentials#status}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeouts">AppSharedCredentialsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/app_shared_credentials#timeouts AppSharedCredentials#timeouts}

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.url"></a>

- *Type:* str

Login URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/app_shared_credentials#url AppSharedCredentials#url}

---

##### `url_regex`<sup>Optional</sup> <a name="url_regex" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.urlRegex"></a>

- *Type:* str

A regex that further restricts URL to the specified regex.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/app_shared_credentials#url_regex AppSharedCredentials#url_regex}

---

##### `username_field`<sup>Optional</sup> <a name="username_field" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.usernameField"></a>

- *Type:* str

Login username field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/app_shared_credentials#username_field AppSharedCredentials#username_field}

---

##### `user_name_template`<sup>Optional</sup> <a name="user_name_template" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.userNameTemplate"></a>

- *Type:* str

Username template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/app_shared_credentials#user_name_template AppSharedCredentials#user_name_template}

---

##### `user_name_template_push_status`<sup>Optional</sup> <a name="user_name_template_push_status" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.userNameTemplatePushStatus"></a>

- *Type:* str

Push username on update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/app_shared_credentials#user_name_template_push_status AppSharedCredentials#user_name_template_push_status}

---

##### `user_name_template_suffix`<sup>Optional</sup> <a name="user_name_template_suffix" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.userNameTemplateSuffix"></a>

- *Type:* str

Username template suffix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/app_shared_credentials#user_name_template_suffix AppSharedCredentials#user_name_template_suffix}

---

##### `user_name_template_type`<sup>Optional</sup> <a name="user_name_template_type" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.userNameTemplateType"></a>

- *Type:* str

Username template type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/app_shared_credentials#user_name_template_type AppSharedCredentials#user_name_template_type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetAccessibilityErrorRedirectUrl">reset_accessibility_error_redirect_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetAccessibilityLoginRedirectUrl">reset_accessibility_login_redirect_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetAccessibilitySelfService">reset_accessibility_self_service</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetAdminNote">reset_admin_note</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetAppLinksJson">reset_app_links_json</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetAutoSubmitToolbar">reset_auto_submit_toolbar</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetButtonField">reset_button_field</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetCheckbox">reset_checkbox</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetEnduserNote">reset_enduser_note</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetHideIos">reset_hide_ios</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetHideWeb">reset_hide_web</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetLogo">reset_logo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetPasswordField">reset_password_field</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetPreconfiguredApp">reset_preconfigured_app</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetRedirectUrl">reset_redirect_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetSharedPassword">reset_shared_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetSharedUsername">reset_shared_username</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetUrl">reset_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetUrlRegex">reset_url_regex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetUsernameField">reset_username_field</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetUserNameTemplate">reset_user_name_template</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetUserNameTemplatePushStatus">reset_user_name_template_push_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetUserNameTemplateSuffix">reset_user_name_template_suffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetUserNameTemplateType">reset_user_name_template_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/app_shared_credentials#create AppSharedCredentials#create}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/app_shared_credentials#read AppSharedCredentials#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/app_shared_credentials#update AppSharedCredentials#update}.

---

##### `reset_accessibility_error_redirect_url` <a name="reset_accessibility_error_redirect_url" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetAccessibilityErrorRedirectUrl"></a>

```python
def reset_accessibility_error_redirect_url() -> None
```

##### `reset_accessibility_login_redirect_url` <a name="reset_accessibility_login_redirect_url" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetAccessibilityLoginRedirectUrl"></a>

```python
def reset_accessibility_login_redirect_url() -> None
```

##### `reset_accessibility_self_service` <a name="reset_accessibility_self_service" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetAccessibilitySelfService"></a>

```python
def reset_accessibility_self_service() -> None
```

##### `reset_admin_note` <a name="reset_admin_note" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetAdminNote"></a>

```python
def reset_admin_note() -> None
```

##### `reset_app_links_json` <a name="reset_app_links_json" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetAppLinksJson"></a>

```python
def reset_app_links_json() -> None
```

##### `reset_auto_submit_toolbar` <a name="reset_auto_submit_toolbar" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetAutoSubmitToolbar"></a>

```python
def reset_auto_submit_toolbar() -> None
```

##### `reset_button_field` <a name="reset_button_field" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetButtonField"></a>

```python
def reset_button_field() -> None
```

##### `reset_checkbox` <a name="reset_checkbox" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetCheckbox"></a>

```python
def reset_checkbox() -> None
```

##### `reset_enduser_note` <a name="reset_enduser_note" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetEnduserNote"></a>

```python
def reset_enduser_note() -> None
```

##### `reset_hide_ios` <a name="reset_hide_ios" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetHideIos"></a>

```python
def reset_hide_ios() -> None
```

##### `reset_hide_web` <a name="reset_hide_web" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetHideWeb"></a>

```python
def reset_hide_web() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_logo` <a name="reset_logo" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetLogo"></a>

```python
def reset_logo() -> None
```

##### `reset_password_field` <a name="reset_password_field" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetPasswordField"></a>

```python
def reset_password_field() -> None
```

##### `reset_preconfigured_app` <a name="reset_preconfigured_app" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetPreconfiguredApp"></a>

```python
def reset_preconfigured_app() -> None
```

##### `reset_redirect_url` <a name="reset_redirect_url" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetRedirectUrl"></a>

```python
def reset_redirect_url() -> None
```

##### `reset_shared_password` <a name="reset_shared_password" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetSharedPassword"></a>

```python
def reset_shared_password() -> None
```

##### `reset_shared_username` <a name="reset_shared_username" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetSharedUsername"></a>

```python
def reset_shared_username() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_url` <a name="reset_url" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetUrl"></a>

```python
def reset_url() -> None
```

##### `reset_url_regex` <a name="reset_url_regex" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetUrlRegex"></a>

```python
def reset_url_regex() -> None
```

##### `reset_username_field` <a name="reset_username_field" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetUsernameField"></a>

```python
def reset_username_field() -> None
```

##### `reset_user_name_template` <a name="reset_user_name_template" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetUserNameTemplate"></a>

```python
def reset_user_name_template() -> None
```

##### `reset_user_name_template_push_status` <a name="reset_user_name_template_push_status" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetUserNameTemplatePushStatus"></a>

```python
def reset_user_name_template_push_status() -> None
```

##### `reset_user_name_template_suffix` <a name="reset_user_name_template_suffix" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetUserNameTemplateSuffix"></a>

```python
def reset_user_name_template_suffix() -> None
```

##### `reset_user_name_template_type` <a name="reset_user_name_template_type" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetUserNameTemplateType"></a>

```python
def reset_user_name_template_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.isConstruct"></a>

```python
from cdktf_cdktf_provider_okta import app_shared_credentials

appSharedCredentials.AppSharedCredentials.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_okta import app_shared_credentials

appSharedCredentials.AppSharedCredentials.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_okta import app_shared_credentials

appSharedCredentials.AppSharedCredentials.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.logoUrl">logo_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.signOnMode">sign_on_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference">AppSharedCredentialsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.accessibilityErrorRedirectUrlInput">accessibility_error_redirect_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.accessibilityLoginRedirectUrlInput">accessibility_login_redirect_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.accessibilitySelfServiceInput">accessibility_self_service_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.adminNoteInput">admin_note_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.appLinksJsonInput">app_links_json_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.autoSubmitToolbarInput">auto_submit_toolbar_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.buttonFieldInput">button_field_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.checkboxInput">checkbox_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.enduserNoteInput">enduser_note_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.hideIosInput">hide_ios_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.hideWebInput">hide_web_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.labelInput">label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.logoInput">logo_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.passwordFieldInput">password_field_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.preconfiguredAppInput">preconfigured_app_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.redirectUrlInput">redirect_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.sharedPasswordInput">shared_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.sharedUsernameInput">shared_username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeouts">AppSharedCredentialsTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.urlRegexInput">url_regex_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.usernameFieldInput">username_field_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.userNameTemplateInput">user_name_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.userNameTemplatePushStatusInput">user_name_template_push_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.userNameTemplateSuffixInput">user_name_template_suffix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.userNameTemplateTypeInput">user_name_template_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.accessibilityErrorRedirectUrl">accessibility_error_redirect_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.accessibilityLoginRedirectUrl">accessibility_login_redirect_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.accessibilitySelfService">accessibility_self_service</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.adminNote">admin_note</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.appLinksJson">app_links_json</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.autoSubmitToolbar">auto_submit_toolbar</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.buttonField">button_field</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.checkbox">checkbox</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.enduserNote">enduser_note</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.hideIos">hide_ios</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.hideWeb">hide_web</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.label">label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.logo">logo</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.passwordField">password_field</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.preconfiguredApp">preconfigured_app</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.redirectUrl">redirect_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.sharedPassword">shared_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.sharedUsername">shared_username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.urlRegex">url_regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.usernameField">username_field</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.userNameTemplate">user_name_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.userNameTemplatePushStatus">user_name_template_push_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.userNameTemplateSuffix">user_name_template_suffix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.userNameTemplateType">user_name_template_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `logo_url`<sup>Required</sup> <a name="logo_url" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.logoUrl"></a>

```python
logo_url: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `sign_on_mode`<sup>Required</sup> <a name="sign_on_mode" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.signOnMode"></a>

```python
sign_on_mode: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.timeouts"></a>

```python
timeouts: AppSharedCredentialsTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference">AppSharedCredentialsTimeoutsOutputReference</a>

---

##### `accessibility_error_redirect_url_input`<sup>Optional</sup> <a name="accessibility_error_redirect_url_input" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.accessibilityErrorRedirectUrlInput"></a>

```python
accessibility_error_redirect_url_input: str
```

- *Type:* str

---

##### `accessibility_login_redirect_url_input`<sup>Optional</sup> <a name="accessibility_login_redirect_url_input" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.accessibilityLoginRedirectUrlInput"></a>

```python
accessibility_login_redirect_url_input: str
```

- *Type:* str

---

##### `accessibility_self_service_input`<sup>Optional</sup> <a name="accessibility_self_service_input" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.accessibilitySelfServiceInput"></a>

```python
accessibility_self_service_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `admin_note_input`<sup>Optional</sup> <a name="admin_note_input" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.adminNoteInput"></a>

```python
admin_note_input: str
```

- *Type:* str

---

##### `app_links_json_input`<sup>Optional</sup> <a name="app_links_json_input" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.appLinksJsonInput"></a>

```python
app_links_json_input: str
```

- *Type:* str

---

##### `auto_submit_toolbar_input`<sup>Optional</sup> <a name="auto_submit_toolbar_input" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.autoSubmitToolbarInput"></a>

```python
auto_submit_toolbar_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `button_field_input`<sup>Optional</sup> <a name="button_field_input" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.buttonFieldInput"></a>

```python
button_field_input: str
```

- *Type:* str

---

##### `checkbox_input`<sup>Optional</sup> <a name="checkbox_input" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.checkboxInput"></a>

```python
checkbox_input: str
```

- *Type:* str

---

##### `enduser_note_input`<sup>Optional</sup> <a name="enduser_note_input" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.enduserNoteInput"></a>

```python
enduser_note_input: str
```

- *Type:* str

---

##### `hide_ios_input`<sup>Optional</sup> <a name="hide_ios_input" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.hideIosInput"></a>

```python
hide_ios_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `hide_web_input`<sup>Optional</sup> <a name="hide_web_input" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.hideWebInput"></a>

```python
hide_web_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `label_input`<sup>Optional</sup> <a name="label_input" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.labelInput"></a>

```python
label_input: str
```

- *Type:* str

---

##### `logo_input`<sup>Optional</sup> <a name="logo_input" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.logoInput"></a>

```python
logo_input: str
```

- *Type:* str

---

##### `password_field_input`<sup>Optional</sup> <a name="password_field_input" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.passwordFieldInput"></a>

```python
password_field_input: str
```

- *Type:* str

---

##### `preconfigured_app_input`<sup>Optional</sup> <a name="preconfigured_app_input" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.preconfiguredAppInput"></a>

```python
preconfigured_app_input: str
```

- *Type:* str

---

##### `redirect_url_input`<sup>Optional</sup> <a name="redirect_url_input" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.redirectUrlInput"></a>

```python
redirect_url_input: str
```

- *Type:* str

---

##### `shared_password_input`<sup>Optional</sup> <a name="shared_password_input" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.sharedPasswordInput"></a>

```python
shared_password_input: str
```

- *Type:* str

---

##### `shared_username_input`<sup>Optional</sup> <a name="shared_username_input" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.sharedUsernameInput"></a>

```python
shared_username_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[AppSharedCredentialsTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeouts">AppSharedCredentialsTimeouts</a>, cdktf.IResolvable]

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `url_regex_input`<sup>Optional</sup> <a name="url_regex_input" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.urlRegexInput"></a>

```python
url_regex_input: str
```

- *Type:* str

---

##### `username_field_input`<sup>Optional</sup> <a name="username_field_input" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.usernameFieldInput"></a>

```python
username_field_input: str
```

- *Type:* str

---

##### `user_name_template_input`<sup>Optional</sup> <a name="user_name_template_input" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.userNameTemplateInput"></a>

```python
user_name_template_input: str
```

- *Type:* str

---

##### `user_name_template_push_status_input`<sup>Optional</sup> <a name="user_name_template_push_status_input" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.userNameTemplatePushStatusInput"></a>

```python
user_name_template_push_status_input: str
```

- *Type:* str

---

##### `user_name_template_suffix_input`<sup>Optional</sup> <a name="user_name_template_suffix_input" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.userNameTemplateSuffixInput"></a>

```python
user_name_template_suffix_input: str
```

- *Type:* str

---

##### `user_name_template_type_input`<sup>Optional</sup> <a name="user_name_template_type_input" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.userNameTemplateTypeInput"></a>

```python
user_name_template_type_input: str
```

- *Type:* str

---

##### `accessibility_error_redirect_url`<sup>Required</sup> <a name="accessibility_error_redirect_url" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.accessibilityErrorRedirectUrl"></a>

```python
accessibility_error_redirect_url: str
```

- *Type:* str

---

##### `accessibility_login_redirect_url`<sup>Required</sup> <a name="accessibility_login_redirect_url" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.accessibilityLoginRedirectUrl"></a>

```python
accessibility_login_redirect_url: str
```

- *Type:* str

---

##### `accessibility_self_service`<sup>Required</sup> <a name="accessibility_self_service" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.accessibilitySelfService"></a>

```python
accessibility_self_service: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `admin_note`<sup>Required</sup> <a name="admin_note" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.adminNote"></a>

```python
admin_note: str
```

- *Type:* str

---

##### `app_links_json`<sup>Required</sup> <a name="app_links_json" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.appLinksJson"></a>

```python
app_links_json: str
```

- *Type:* str

---

##### `auto_submit_toolbar`<sup>Required</sup> <a name="auto_submit_toolbar" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.autoSubmitToolbar"></a>

```python
auto_submit_toolbar: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `button_field`<sup>Required</sup> <a name="button_field" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.buttonField"></a>

```python
button_field: str
```

- *Type:* str

---

##### `checkbox`<sup>Required</sup> <a name="checkbox" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.checkbox"></a>

```python
checkbox: str
```

- *Type:* str

---

##### `enduser_note`<sup>Required</sup> <a name="enduser_note" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.enduserNote"></a>

```python
enduser_note: str
```

- *Type:* str

---

##### `hide_ios`<sup>Required</sup> <a name="hide_ios" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.hideIos"></a>

```python
hide_ios: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `hide_web`<sup>Required</sup> <a name="hide_web" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.hideWeb"></a>

```python
hide_web: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.label"></a>

```python
label: str
```

- *Type:* str

---

##### `logo`<sup>Required</sup> <a name="logo" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.logo"></a>

```python
logo: str
```

- *Type:* str

---

##### `password_field`<sup>Required</sup> <a name="password_field" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.passwordField"></a>

```python
password_field: str
```

- *Type:* str

---

##### `preconfigured_app`<sup>Required</sup> <a name="preconfigured_app" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.preconfiguredApp"></a>

```python
preconfigured_app: str
```

- *Type:* str

---

##### `redirect_url`<sup>Required</sup> <a name="redirect_url" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.redirectUrl"></a>

```python
redirect_url: str
```

- *Type:* str

---

##### `shared_password`<sup>Required</sup> <a name="shared_password" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.sharedPassword"></a>

```python
shared_password: str
```

- *Type:* str

---

##### `shared_username`<sup>Required</sup> <a name="shared_username" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.sharedUsername"></a>

```python
shared_username: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `url_regex`<sup>Required</sup> <a name="url_regex" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.urlRegex"></a>

```python
url_regex: str
```

- *Type:* str

---

##### `username_field`<sup>Required</sup> <a name="username_field" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.usernameField"></a>

```python
username_field: str
```

- *Type:* str

---

##### `user_name_template`<sup>Required</sup> <a name="user_name_template" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.userNameTemplate"></a>

```python
user_name_template: str
```

- *Type:* str

---

##### `user_name_template_push_status`<sup>Required</sup> <a name="user_name_template_push_status" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.userNameTemplatePushStatus"></a>

```python
user_name_template_push_status: str
```

- *Type:* str

---

##### `user_name_template_suffix`<sup>Required</sup> <a name="user_name_template_suffix" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.userNameTemplateSuffix"></a>

```python
user_name_template_suffix: str
```

- *Type:* str

---

##### `user_name_template_type`<sup>Required</sup> <a name="user_name_template_type" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.userNameTemplateType"></a>

```python
user_name_template_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AppSharedCredentialsConfig <a name="AppSharedCredentialsConfig" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import app_shared_credentials

appSharedCredentials.AppSharedCredentialsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
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
  auto_submit_toolbar: typing.Union[bool, IResolvable] = None,
  button_field: str = None,
  checkbox: str = None,
  enduser_note: str = None,
  hide_ios: typing.Union[bool, IResolvable] = None,
  hide_web: typing.Union[bool, IResolvable] = None,
  id: str = None,
  logo: str = None,
  password_field: str = None,
  preconfigured_app: str = None,
  redirect_url: str = None,
  shared_password: str = None,
  shared_username: str = None,
  status: str = None,
  timeouts: AppSharedCredentialsTimeouts = None,
  url: str = None,
  url_regex: str = None,
  username_field: str = None,
  user_name_template: str = None,
  user_name_template_push_status: str = None,
  user_name_template_suffix: str = None,
  user_name_template_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.label">label</a></code> | <code>str</code> | Pretty name of app. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.accessibilityErrorRedirectUrl">accessibility_error_redirect_url</a></code> | <code>str</code> | Custom error page URL. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.accessibilityLoginRedirectUrl">accessibility_login_redirect_url</a></code> | <code>str</code> | Custom login page URL. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.accessibilitySelfService">accessibility_self_service</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable self service. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.adminNote">admin_note</a></code> | <code>str</code> | Application notes for admins. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.appLinksJson">app_links_json</a></code> | <code>str</code> | Displays specific appLinks for the app. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.autoSubmitToolbar">auto_submit_toolbar</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Display auto submit toolbar. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.buttonField">button_field</a></code> | <code>str</code> | Login button field. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.checkbox">checkbox</a></code> | <code>str</code> | CSS selector for the checkbox. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.enduserNote">enduser_note</a></code> | <code>str</code> | Application notes for end users. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.hideIos">hide_ios</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Do not display application icon on mobile app. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.hideWeb">hide_web</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Do not display application icon to users. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/app_shared_credentials#id AppSharedCredentials#id}. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.logo">logo</a></code> | <code>str</code> | Local path to logo of the application. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.passwordField">password_field</a></code> | <code>str</code> | Login password field. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.preconfiguredApp">preconfigured_app</a></code> | <code>str</code> | Preconfigured app name. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.redirectUrl">redirect_url</a></code> | <code>str</code> | Secondary URL of the sign-in page for this app. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.sharedPassword">shared_password</a></code> | <code>str</code> | Shared password, required for certain schemes. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.sharedUsername">shared_username</a></code> | <code>str</code> | Shared username, required for certain schemes. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.status">status</a></code> | <code>str</code> | Status of application. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeouts">AppSharedCredentialsTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.url">url</a></code> | <code>str</code> | Login URL. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.urlRegex">url_regex</a></code> | <code>str</code> | A regex that further restricts URL to the specified regex. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.usernameField">username_field</a></code> | <code>str</code> | Login username field. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.userNameTemplate">user_name_template</a></code> | <code>str</code> | Username template. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.userNameTemplatePushStatus">user_name_template_push_status</a></code> | <code>str</code> | Push username on update. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.userNameTemplateSuffix">user_name_template_suffix</a></code> | <code>str</code> | Username template suffix. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.userNameTemplateType">user_name_template_type</a></code> | <code>str</code> | Username template type. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.label"></a>

```python
label: str
```

- *Type:* str

Pretty name of app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/app_shared_credentials#label AppSharedCredentials#label}

---

##### `accessibility_error_redirect_url`<sup>Optional</sup> <a name="accessibility_error_redirect_url" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.accessibilityErrorRedirectUrl"></a>

```python
accessibility_error_redirect_url: str
```

- *Type:* str

Custom error page URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/app_shared_credentials#accessibility_error_redirect_url AppSharedCredentials#accessibility_error_redirect_url}

---

##### `accessibility_login_redirect_url`<sup>Optional</sup> <a name="accessibility_login_redirect_url" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.accessibilityLoginRedirectUrl"></a>

```python
accessibility_login_redirect_url: str
```

- *Type:* str

Custom login page URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/app_shared_credentials#accessibility_login_redirect_url AppSharedCredentials#accessibility_login_redirect_url}

---

##### `accessibility_self_service`<sup>Optional</sup> <a name="accessibility_self_service" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.accessibilitySelfService"></a>

```python
accessibility_self_service: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable self service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/app_shared_credentials#accessibility_self_service AppSharedCredentials#accessibility_self_service}

---

##### `admin_note`<sup>Optional</sup> <a name="admin_note" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.adminNote"></a>

```python
admin_note: str
```

- *Type:* str

Application notes for admins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/app_shared_credentials#admin_note AppSharedCredentials#admin_note}

---

##### `app_links_json`<sup>Optional</sup> <a name="app_links_json" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.appLinksJson"></a>

```python
app_links_json: str
```

- *Type:* str

Displays specific appLinks for the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/app_shared_credentials#app_links_json AppSharedCredentials#app_links_json}

---

##### `auto_submit_toolbar`<sup>Optional</sup> <a name="auto_submit_toolbar" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.autoSubmitToolbar"></a>

```python
auto_submit_toolbar: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Display auto submit toolbar.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/app_shared_credentials#auto_submit_toolbar AppSharedCredentials#auto_submit_toolbar}

---

##### `button_field`<sup>Optional</sup> <a name="button_field" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.buttonField"></a>

```python
button_field: str
```

- *Type:* str

Login button field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/app_shared_credentials#button_field AppSharedCredentials#button_field}

---

##### `checkbox`<sup>Optional</sup> <a name="checkbox" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.checkbox"></a>

```python
checkbox: str
```

- *Type:* str

CSS selector for the checkbox.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/app_shared_credentials#checkbox AppSharedCredentials#checkbox}

---

##### `enduser_note`<sup>Optional</sup> <a name="enduser_note" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.enduserNote"></a>

```python
enduser_note: str
```

- *Type:* str

Application notes for end users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/app_shared_credentials#enduser_note AppSharedCredentials#enduser_note}

---

##### `hide_ios`<sup>Optional</sup> <a name="hide_ios" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.hideIos"></a>

```python
hide_ios: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Do not display application icon on mobile app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/app_shared_credentials#hide_ios AppSharedCredentials#hide_ios}

---

##### `hide_web`<sup>Optional</sup> <a name="hide_web" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.hideWeb"></a>

```python
hide_web: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Do not display application icon to users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/app_shared_credentials#hide_web AppSharedCredentials#hide_web}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/app_shared_credentials#id AppSharedCredentials#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logo`<sup>Optional</sup> <a name="logo" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.logo"></a>

```python
logo: str
```

- *Type:* str

Local path to logo of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/app_shared_credentials#logo AppSharedCredentials#logo}

---

##### `password_field`<sup>Optional</sup> <a name="password_field" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.passwordField"></a>

```python
password_field: str
```

- *Type:* str

Login password field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/app_shared_credentials#password_field AppSharedCredentials#password_field}

---

##### `preconfigured_app`<sup>Optional</sup> <a name="preconfigured_app" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.preconfiguredApp"></a>

```python
preconfigured_app: str
```

- *Type:* str

Preconfigured app name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/app_shared_credentials#preconfigured_app AppSharedCredentials#preconfigured_app}

---

##### `redirect_url`<sup>Optional</sup> <a name="redirect_url" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.redirectUrl"></a>

```python
redirect_url: str
```

- *Type:* str

Secondary URL of the sign-in page for this app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/app_shared_credentials#redirect_url AppSharedCredentials#redirect_url}

---

##### `shared_password`<sup>Optional</sup> <a name="shared_password" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.sharedPassword"></a>

```python
shared_password: str
```

- *Type:* str

Shared password, required for certain schemes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/app_shared_credentials#shared_password AppSharedCredentials#shared_password}

---

##### `shared_username`<sup>Optional</sup> <a name="shared_username" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.sharedUsername"></a>

```python
shared_username: str
```

- *Type:* str

Shared username, required for certain schemes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/app_shared_credentials#shared_username AppSharedCredentials#shared_username}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.status"></a>

```python
status: str
```

- *Type:* str

Status of application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/app_shared_credentials#status AppSharedCredentials#status}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.timeouts"></a>

```python
timeouts: AppSharedCredentialsTimeouts
```

- *Type:* <a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeouts">AppSharedCredentialsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/app_shared_credentials#timeouts AppSharedCredentials#timeouts}

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.url"></a>

```python
url: str
```

- *Type:* str

Login URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/app_shared_credentials#url AppSharedCredentials#url}

---

##### `url_regex`<sup>Optional</sup> <a name="url_regex" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.urlRegex"></a>

```python
url_regex: str
```

- *Type:* str

A regex that further restricts URL to the specified regex.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/app_shared_credentials#url_regex AppSharedCredentials#url_regex}

---

##### `username_field`<sup>Optional</sup> <a name="username_field" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.usernameField"></a>

```python
username_field: str
```

- *Type:* str

Login username field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/app_shared_credentials#username_field AppSharedCredentials#username_field}

---

##### `user_name_template`<sup>Optional</sup> <a name="user_name_template" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.userNameTemplate"></a>

```python
user_name_template: str
```

- *Type:* str

Username template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/app_shared_credentials#user_name_template AppSharedCredentials#user_name_template}

---

##### `user_name_template_push_status`<sup>Optional</sup> <a name="user_name_template_push_status" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.userNameTemplatePushStatus"></a>

```python
user_name_template_push_status: str
```

- *Type:* str

Push username on update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/app_shared_credentials#user_name_template_push_status AppSharedCredentials#user_name_template_push_status}

---

##### `user_name_template_suffix`<sup>Optional</sup> <a name="user_name_template_suffix" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.userNameTemplateSuffix"></a>

```python
user_name_template_suffix: str
```

- *Type:* str

Username template suffix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/app_shared_credentials#user_name_template_suffix AppSharedCredentials#user_name_template_suffix}

---

##### `user_name_template_type`<sup>Optional</sup> <a name="user_name_template_type" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.userNameTemplateType"></a>

```python
user_name_template_type: str
```

- *Type:* str

Username template type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/app_shared_credentials#user_name_template_type AppSharedCredentials#user_name_template_type}

---

### AppSharedCredentialsTimeouts <a name="AppSharedCredentialsTimeouts" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import app_shared_credentials

appSharedCredentials.AppSharedCredentialsTimeouts(
  create: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/app_shared_credentials#create AppSharedCredentials#create}. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/app_shared_credentials#read AppSharedCredentials#read}. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/app_shared_credentials#update AppSharedCredentials#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/app_shared_credentials#create AppSharedCredentials#create}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/app_shared_credentials#read AppSharedCredentials#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/app_shared_credentials#update AppSharedCredentials#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppSharedCredentialsTimeoutsOutputReference <a name="AppSharedCredentialsTimeoutsOutputReference" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import app_shared_credentials

appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeouts">AppSharedCredentialsTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[AppSharedCredentialsTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeouts">AppSharedCredentialsTimeouts</a>, cdktf.IResolvable]

---



