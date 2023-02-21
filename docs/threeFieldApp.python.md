# `threeFieldApp` Submodule <a name="`threeFieldApp` Submodule" id="@cdktf/provider-okta.threeFieldApp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ThreeFieldApp <a name="ThreeFieldApp" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp"></a>

Represents a {@link https://www.terraform.io/docs/providers/okta/r/three_field_app okta_three_field_app}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import three_field_app

threeFieldApp.ThreeFieldApp(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
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
  groups: typing.List[str] = None,
  hide_ios: typing.Union[bool, IResolvable] = None,
  hide_web: typing.Union[bool, IResolvable] = None,
  id: str = None,
  logo: str = None,
  reveal_password: typing.Union[bool, IResolvable] = None,
  shared_password: str = None,
  shared_username: str = None,
  skip_groups: typing.Union[bool, IResolvable] = None,
  skip_users: typing.Union[bool, IResolvable] = None,
  status: str = None,
  timeouts: ThreeFieldAppTimeouts = None,
  url_regex: str = None,
  user_name_template: str = None,
  user_name_template_push_status: str = None,
  user_name_template_suffix: str = None,
  user_name_template_type: str = None,
  users: typing.Union[IResolvable, typing.List[ThreeFieldAppUsers]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.Initializer.parameter.buttonSelector">button_selector</a></code> | <code>str</code> | Login button field CSS selector. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.Initializer.parameter.extraFieldSelector">extra_field_selector</a></code> | <code>str</code> | Extra field CSS selector. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.Initializer.parameter.extraFieldValue">extra_field_value</a></code> | <code>str</code> | Value for extra form field. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.Initializer.parameter.label">label</a></code> | <code>str</code> | Pretty name of app. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.Initializer.parameter.passwordSelector">password_selector</a></code> | <code>str</code> | Login password field CSS selector. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.Initializer.parameter.url">url</a></code> | <code>str</code> | Login URL. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.Initializer.parameter.usernameSelector">username_selector</a></code> | <code>str</code> | Login username field CSS selector. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.Initializer.parameter.accessibilityErrorRedirectUrl">accessibility_error_redirect_url</a></code> | <code>str</code> | Custom error page URL. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.Initializer.parameter.accessibilityLoginRedirectUrl">accessibility_login_redirect_url</a></code> | <code>str</code> | Custom login page URL. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.Initializer.parameter.accessibilitySelfService">accessibility_self_service</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable self service. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.Initializer.parameter.adminNote">admin_note</a></code> | <code>str</code> | Application notes for admins. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.Initializer.parameter.appLinksJson">app_links_json</a></code> | <code>str</code> | Displays specific appLinks for the app. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.Initializer.parameter.autoSubmitToolbar">auto_submit_toolbar</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Display auto submit toolbar. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.Initializer.parameter.credentialsScheme">credentials_scheme</a></code> | <code>str</code> | Application credentials scheme. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.Initializer.parameter.enduserNote">enduser_note</a></code> | <code>str</code> | Application notes for end users. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.Initializer.parameter.groups">groups</a></code> | <code>typing.List[str]</code> | Groups associated with the application. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.Initializer.parameter.hideIos">hide_ios</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Do not display application icon on mobile app. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.Initializer.parameter.hideWeb">hide_web</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Do not display application icon to users. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#id ThreeFieldApp#id}. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.Initializer.parameter.logo">logo</a></code> | <code>str</code> | Local path to logo of the application. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.Initializer.parameter.revealPassword">reveal_password</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allow user to reveal password. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.Initializer.parameter.sharedPassword">shared_password</a></code> | <code>str</code> | Shared password, required for certain schemes. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.Initializer.parameter.sharedUsername">shared_username</a></code> | <code>str</code> | Shared username, required for certain schemes. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.Initializer.parameter.skipGroups">skip_groups</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Ignore groups sync. This is a temporary solution until 'groups' field is supported in all the app-like resources. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.Initializer.parameter.skipUsers">skip_users</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Ignore users sync. This is a temporary solution until 'users' field is supported in all the app-like resources. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.Initializer.parameter.status">status</a></code> | <code>str</code> | Status of application. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeouts">ThreeFieldAppTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.Initializer.parameter.urlRegex">url_regex</a></code> | <code>str</code> | A regex that further restricts URL to the specified regex. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.Initializer.parameter.userNameTemplate">user_name_template</a></code> | <code>str</code> | Username template. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.Initializer.parameter.userNameTemplatePushStatus">user_name_template_push_status</a></code> | <code>str</code> | Push username on update. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.Initializer.parameter.userNameTemplateSuffix">user_name_template_suffix</a></code> | <code>str</code> | Username template suffix. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.Initializer.parameter.userNameTemplateType">user_name_template_type</a></code> | <code>str</code> | Username template type. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.Initializer.parameter.users">users</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsers">ThreeFieldAppUsers</a>]]</code> | users block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `button_selector`<sup>Required</sup> <a name="button_selector" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.Initializer.parameter.buttonSelector"></a>

- *Type:* str

Login button field CSS selector.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#button_selector ThreeFieldApp#button_selector}

---

##### `extra_field_selector`<sup>Required</sup> <a name="extra_field_selector" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.Initializer.parameter.extraFieldSelector"></a>

- *Type:* str

Extra field CSS selector.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#extra_field_selector ThreeFieldApp#extra_field_selector}

---

##### `extra_field_value`<sup>Required</sup> <a name="extra_field_value" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.Initializer.parameter.extraFieldValue"></a>

- *Type:* str

Value for extra form field.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#extra_field_value ThreeFieldApp#extra_field_value}

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.Initializer.parameter.label"></a>

- *Type:* str

Pretty name of app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#label ThreeFieldApp#label}

---

##### `password_selector`<sup>Required</sup> <a name="password_selector" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.Initializer.parameter.passwordSelector"></a>

- *Type:* str

Login password field CSS selector.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#password_selector ThreeFieldApp#password_selector}

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.Initializer.parameter.url"></a>

- *Type:* str

Login URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#url ThreeFieldApp#url}

---

##### `username_selector`<sup>Required</sup> <a name="username_selector" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.Initializer.parameter.usernameSelector"></a>

- *Type:* str

Login username field CSS selector.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#username_selector ThreeFieldApp#username_selector}

---

##### `accessibility_error_redirect_url`<sup>Optional</sup> <a name="accessibility_error_redirect_url" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.Initializer.parameter.accessibilityErrorRedirectUrl"></a>

- *Type:* str

Custom error page URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#accessibility_error_redirect_url ThreeFieldApp#accessibility_error_redirect_url}

---

##### `accessibility_login_redirect_url`<sup>Optional</sup> <a name="accessibility_login_redirect_url" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.Initializer.parameter.accessibilityLoginRedirectUrl"></a>

- *Type:* str

Custom login page URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#accessibility_login_redirect_url ThreeFieldApp#accessibility_login_redirect_url}

---

##### `accessibility_self_service`<sup>Optional</sup> <a name="accessibility_self_service" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.Initializer.parameter.accessibilitySelfService"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable self service.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#accessibility_self_service ThreeFieldApp#accessibility_self_service}

---

##### `admin_note`<sup>Optional</sup> <a name="admin_note" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.Initializer.parameter.adminNote"></a>

- *Type:* str

Application notes for admins.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#admin_note ThreeFieldApp#admin_note}

---

##### `app_links_json`<sup>Optional</sup> <a name="app_links_json" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.Initializer.parameter.appLinksJson"></a>

- *Type:* str

Displays specific appLinks for the app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#app_links_json ThreeFieldApp#app_links_json}

---

##### `auto_submit_toolbar`<sup>Optional</sup> <a name="auto_submit_toolbar" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.Initializer.parameter.autoSubmitToolbar"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Display auto submit toolbar.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#auto_submit_toolbar ThreeFieldApp#auto_submit_toolbar}

---

##### `credentials_scheme`<sup>Optional</sup> <a name="credentials_scheme" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.Initializer.parameter.credentialsScheme"></a>

- *Type:* str

Application credentials scheme.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#credentials_scheme ThreeFieldApp#credentials_scheme}

---

##### `enduser_note`<sup>Optional</sup> <a name="enduser_note" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.Initializer.parameter.enduserNote"></a>

- *Type:* str

Application notes for end users.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#enduser_note ThreeFieldApp#enduser_note}

---

##### `groups`<sup>Optional</sup> <a name="groups" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.Initializer.parameter.groups"></a>

- *Type:* typing.List[str]

Groups associated with the application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#groups ThreeFieldApp#groups}

---

##### `hide_ios`<sup>Optional</sup> <a name="hide_ios" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.Initializer.parameter.hideIos"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Do not display application icon on mobile app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#hide_ios ThreeFieldApp#hide_ios}

---

##### `hide_web`<sup>Optional</sup> <a name="hide_web" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.Initializer.parameter.hideWeb"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Do not display application icon to users.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#hide_web ThreeFieldApp#hide_web}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#id ThreeFieldApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logo`<sup>Optional</sup> <a name="logo" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.Initializer.parameter.logo"></a>

- *Type:* str

Local path to logo of the application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#logo ThreeFieldApp#logo}

---

##### `reveal_password`<sup>Optional</sup> <a name="reveal_password" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.Initializer.parameter.revealPassword"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow user to reveal password.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#reveal_password ThreeFieldApp#reveal_password}

---

##### `shared_password`<sup>Optional</sup> <a name="shared_password" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.Initializer.parameter.sharedPassword"></a>

- *Type:* str

Shared password, required for certain schemes.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#shared_password ThreeFieldApp#shared_password}

---

##### `shared_username`<sup>Optional</sup> <a name="shared_username" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.Initializer.parameter.sharedUsername"></a>

- *Type:* str

Shared username, required for certain schemes.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#shared_username ThreeFieldApp#shared_username}

---

##### `skip_groups`<sup>Optional</sup> <a name="skip_groups" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.Initializer.parameter.skipGroups"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Ignore groups sync. This is a temporary solution until 'groups' field is supported in all the app-like resources.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#skip_groups ThreeFieldApp#skip_groups}

---

##### `skip_users`<sup>Optional</sup> <a name="skip_users" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.Initializer.parameter.skipUsers"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Ignore users sync. This is a temporary solution until 'users' field is supported in all the app-like resources.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#skip_users ThreeFieldApp#skip_users}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.Initializer.parameter.status"></a>

- *Type:* str

Status of application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#status ThreeFieldApp#status}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeouts">ThreeFieldAppTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#timeouts ThreeFieldApp#timeouts}

---

##### `url_regex`<sup>Optional</sup> <a name="url_regex" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.Initializer.parameter.urlRegex"></a>

- *Type:* str

A regex that further restricts URL to the specified regex.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#url_regex ThreeFieldApp#url_regex}

---

##### `user_name_template`<sup>Optional</sup> <a name="user_name_template" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.Initializer.parameter.userNameTemplate"></a>

- *Type:* str

Username template.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#user_name_template ThreeFieldApp#user_name_template}

---

##### `user_name_template_push_status`<sup>Optional</sup> <a name="user_name_template_push_status" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.Initializer.parameter.userNameTemplatePushStatus"></a>

- *Type:* str

Push username on update.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#user_name_template_push_status ThreeFieldApp#user_name_template_push_status}

---

##### `user_name_template_suffix`<sup>Optional</sup> <a name="user_name_template_suffix" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.Initializer.parameter.userNameTemplateSuffix"></a>

- *Type:* str

Username template suffix.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#user_name_template_suffix ThreeFieldApp#user_name_template_suffix}

---

##### `user_name_template_type`<sup>Optional</sup> <a name="user_name_template_type" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.Initializer.parameter.userNameTemplateType"></a>

- *Type:* str

Username template type.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#user_name_template_type ThreeFieldApp#user_name_template_type}

---

##### `users`<sup>Optional</sup> <a name="users" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.Initializer.parameter.users"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsers">ThreeFieldAppUsers</a>]]

users block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#users ThreeFieldApp#users}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.putUsers">put_users</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetAccessibilityErrorRedirectUrl">reset_accessibility_error_redirect_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetAccessibilityLoginRedirectUrl">reset_accessibility_login_redirect_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetAccessibilitySelfService">reset_accessibility_self_service</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetAdminNote">reset_admin_note</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetAppLinksJson">reset_app_links_json</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetAutoSubmitToolbar">reset_auto_submit_toolbar</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetCredentialsScheme">reset_credentials_scheme</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetEnduserNote">reset_enduser_note</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetGroups">reset_groups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetHideIos">reset_hide_ios</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetHideWeb">reset_hide_web</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetLogo">reset_logo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetRevealPassword">reset_reveal_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetSharedPassword">reset_shared_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetSharedUsername">reset_shared_username</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetSkipGroups">reset_skip_groups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetSkipUsers">reset_skip_users</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetUrlRegex">reset_url_regex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetUserNameTemplate">reset_user_name_template</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetUserNameTemplatePushStatus">reset_user_name_template_push_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetUserNameTemplateSuffix">reset_user_name_template_suffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetUserNameTemplateType">reset_user_name_template_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetUsers">reset_users</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#create ThreeFieldApp#create}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#read ThreeFieldApp#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#update ThreeFieldApp#update}.

---

##### `put_users` <a name="put_users" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.putUsers"></a>

```python
def put_users(
  value: typing.Union[IResolvable, typing.List[ThreeFieldAppUsers]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.putUsers.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsers">ThreeFieldAppUsers</a>]]

---

##### `reset_accessibility_error_redirect_url` <a name="reset_accessibility_error_redirect_url" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetAccessibilityErrorRedirectUrl"></a>

```python
def reset_accessibility_error_redirect_url() -> None
```

##### `reset_accessibility_login_redirect_url` <a name="reset_accessibility_login_redirect_url" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetAccessibilityLoginRedirectUrl"></a>

```python
def reset_accessibility_login_redirect_url() -> None
```

##### `reset_accessibility_self_service` <a name="reset_accessibility_self_service" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetAccessibilitySelfService"></a>

```python
def reset_accessibility_self_service() -> None
```

##### `reset_admin_note` <a name="reset_admin_note" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetAdminNote"></a>

```python
def reset_admin_note() -> None
```

##### `reset_app_links_json` <a name="reset_app_links_json" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetAppLinksJson"></a>

```python
def reset_app_links_json() -> None
```

##### `reset_auto_submit_toolbar` <a name="reset_auto_submit_toolbar" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetAutoSubmitToolbar"></a>

```python
def reset_auto_submit_toolbar() -> None
```

##### `reset_credentials_scheme` <a name="reset_credentials_scheme" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetCredentialsScheme"></a>

```python
def reset_credentials_scheme() -> None
```

##### `reset_enduser_note` <a name="reset_enduser_note" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetEnduserNote"></a>

```python
def reset_enduser_note() -> None
```

##### `reset_groups` <a name="reset_groups" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetGroups"></a>

```python
def reset_groups() -> None
```

##### `reset_hide_ios` <a name="reset_hide_ios" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetHideIos"></a>

```python
def reset_hide_ios() -> None
```

##### `reset_hide_web` <a name="reset_hide_web" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetHideWeb"></a>

```python
def reset_hide_web() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_logo` <a name="reset_logo" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetLogo"></a>

```python
def reset_logo() -> None
```

##### `reset_reveal_password` <a name="reset_reveal_password" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetRevealPassword"></a>

```python
def reset_reveal_password() -> None
```

##### `reset_shared_password` <a name="reset_shared_password" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetSharedPassword"></a>

```python
def reset_shared_password() -> None
```

##### `reset_shared_username` <a name="reset_shared_username" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetSharedUsername"></a>

```python
def reset_shared_username() -> None
```

##### `reset_skip_groups` <a name="reset_skip_groups" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetSkipGroups"></a>

```python
def reset_skip_groups() -> None
```

##### `reset_skip_users` <a name="reset_skip_users" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetSkipUsers"></a>

```python
def reset_skip_users() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_url_regex` <a name="reset_url_regex" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetUrlRegex"></a>

```python
def reset_url_regex() -> None
```

##### `reset_user_name_template` <a name="reset_user_name_template" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetUserNameTemplate"></a>

```python
def reset_user_name_template() -> None
```

##### `reset_user_name_template_push_status` <a name="reset_user_name_template_push_status" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetUserNameTemplatePushStatus"></a>

```python
def reset_user_name_template_push_status() -> None
```

##### `reset_user_name_template_suffix` <a name="reset_user_name_template_suffix" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetUserNameTemplateSuffix"></a>

```python
def reset_user_name_template_suffix() -> None
```

##### `reset_user_name_template_type` <a name="reset_user_name_template_type" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetUserNameTemplateType"></a>

```python
def reset_user_name_template_type() -> None
```

##### `reset_users` <a name="reset_users" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.resetUsers"></a>

```python
def reset_users() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.isConstruct"></a>

```python
from cdktf_cdktf_provider_okta import three_field_app

threeFieldApp.ThreeFieldApp.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_okta import three_field_app

threeFieldApp.ThreeFieldApp.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_okta import three_field_app

threeFieldApp.ThreeFieldApp.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.logoUrl">logo_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.signOnMode">sign_on_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference">ThreeFieldAppTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.users">users</a></code> | <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersList">ThreeFieldAppUsersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.accessibilityErrorRedirectUrlInput">accessibility_error_redirect_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.accessibilityLoginRedirectUrlInput">accessibility_login_redirect_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.accessibilitySelfServiceInput">accessibility_self_service_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.adminNoteInput">admin_note_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.appLinksJsonInput">app_links_json_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.autoSubmitToolbarInput">auto_submit_toolbar_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.buttonSelectorInput">button_selector_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.credentialsSchemeInput">credentials_scheme_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.enduserNoteInput">enduser_note_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.extraFieldSelectorInput">extra_field_selector_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.extraFieldValueInput">extra_field_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.groupsInput">groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.hideIosInput">hide_ios_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.hideWebInput">hide_web_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.labelInput">label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.logoInput">logo_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.passwordSelectorInput">password_selector_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.revealPasswordInput">reveal_password_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.sharedPasswordInput">shared_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.sharedUsernameInput">shared_username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.skipGroupsInput">skip_groups_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.skipUsersInput">skip_users_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeouts">ThreeFieldAppTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.urlRegexInput">url_regex_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.usernameSelectorInput">username_selector_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.userNameTemplateInput">user_name_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.userNameTemplatePushStatusInput">user_name_template_push_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.userNameTemplateSuffixInput">user_name_template_suffix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.userNameTemplateTypeInput">user_name_template_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.usersInput">users_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsers">ThreeFieldAppUsers</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.accessibilityErrorRedirectUrl">accessibility_error_redirect_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.accessibilityLoginRedirectUrl">accessibility_login_redirect_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.accessibilitySelfService">accessibility_self_service</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.adminNote">admin_note</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.appLinksJson">app_links_json</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.autoSubmitToolbar">auto_submit_toolbar</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.buttonSelector">button_selector</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.credentialsScheme">credentials_scheme</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.enduserNote">enduser_note</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.extraFieldSelector">extra_field_selector</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.extraFieldValue">extra_field_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.groups">groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.hideIos">hide_ios</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.hideWeb">hide_web</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.label">label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.logo">logo</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.passwordSelector">password_selector</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.revealPassword">reveal_password</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.sharedPassword">shared_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.sharedUsername">shared_username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.skipGroups">skip_groups</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.skipUsers">skip_users</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.urlRegex">url_regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.usernameSelector">username_selector</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.userNameTemplate">user_name_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.userNameTemplatePushStatus">user_name_template_push_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.userNameTemplateSuffix">user_name_template_suffix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.userNameTemplateType">user_name_template_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `logo_url`<sup>Required</sup> <a name="logo_url" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.logoUrl"></a>

```python
logo_url: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `sign_on_mode`<sup>Required</sup> <a name="sign_on_mode" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.signOnMode"></a>

```python
sign_on_mode: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.timeouts"></a>

```python
timeouts: ThreeFieldAppTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference">ThreeFieldAppTimeoutsOutputReference</a>

---

##### `users`<sup>Required</sup> <a name="users" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.users"></a>

```python
users: ThreeFieldAppUsersList
```

- *Type:* <a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersList">ThreeFieldAppUsersList</a>

---

##### `accessibility_error_redirect_url_input`<sup>Optional</sup> <a name="accessibility_error_redirect_url_input" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.accessibilityErrorRedirectUrlInput"></a>

```python
accessibility_error_redirect_url_input: str
```

- *Type:* str

---

##### `accessibility_login_redirect_url_input`<sup>Optional</sup> <a name="accessibility_login_redirect_url_input" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.accessibilityLoginRedirectUrlInput"></a>

```python
accessibility_login_redirect_url_input: str
```

- *Type:* str

---

##### `accessibility_self_service_input`<sup>Optional</sup> <a name="accessibility_self_service_input" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.accessibilitySelfServiceInput"></a>

```python
accessibility_self_service_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `admin_note_input`<sup>Optional</sup> <a name="admin_note_input" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.adminNoteInput"></a>

```python
admin_note_input: str
```

- *Type:* str

---

##### `app_links_json_input`<sup>Optional</sup> <a name="app_links_json_input" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.appLinksJsonInput"></a>

```python
app_links_json_input: str
```

- *Type:* str

---

##### `auto_submit_toolbar_input`<sup>Optional</sup> <a name="auto_submit_toolbar_input" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.autoSubmitToolbarInput"></a>

```python
auto_submit_toolbar_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `button_selector_input`<sup>Optional</sup> <a name="button_selector_input" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.buttonSelectorInput"></a>

```python
button_selector_input: str
```

- *Type:* str

---

##### `credentials_scheme_input`<sup>Optional</sup> <a name="credentials_scheme_input" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.credentialsSchemeInput"></a>

```python
credentials_scheme_input: str
```

- *Type:* str

---

##### `enduser_note_input`<sup>Optional</sup> <a name="enduser_note_input" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.enduserNoteInput"></a>

```python
enduser_note_input: str
```

- *Type:* str

---

##### `extra_field_selector_input`<sup>Optional</sup> <a name="extra_field_selector_input" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.extraFieldSelectorInput"></a>

```python
extra_field_selector_input: str
```

- *Type:* str

---

##### `extra_field_value_input`<sup>Optional</sup> <a name="extra_field_value_input" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.extraFieldValueInput"></a>

```python
extra_field_value_input: str
```

- *Type:* str

---

##### `groups_input`<sup>Optional</sup> <a name="groups_input" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.groupsInput"></a>

```python
groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `hide_ios_input`<sup>Optional</sup> <a name="hide_ios_input" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.hideIosInput"></a>

```python
hide_ios_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `hide_web_input`<sup>Optional</sup> <a name="hide_web_input" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.hideWebInput"></a>

```python
hide_web_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `label_input`<sup>Optional</sup> <a name="label_input" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.labelInput"></a>

```python
label_input: str
```

- *Type:* str

---

##### `logo_input`<sup>Optional</sup> <a name="logo_input" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.logoInput"></a>

```python
logo_input: str
```

- *Type:* str

---

##### `password_selector_input`<sup>Optional</sup> <a name="password_selector_input" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.passwordSelectorInput"></a>

```python
password_selector_input: str
```

- *Type:* str

---

##### `reveal_password_input`<sup>Optional</sup> <a name="reveal_password_input" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.revealPasswordInput"></a>

```python
reveal_password_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `shared_password_input`<sup>Optional</sup> <a name="shared_password_input" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.sharedPasswordInput"></a>

```python
shared_password_input: str
```

- *Type:* str

---

##### `shared_username_input`<sup>Optional</sup> <a name="shared_username_input" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.sharedUsernameInput"></a>

```python
shared_username_input: str
```

- *Type:* str

---

##### `skip_groups_input`<sup>Optional</sup> <a name="skip_groups_input" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.skipGroupsInput"></a>

```python
skip_groups_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `skip_users_input`<sup>Optional</sup> <a name="skip_users_input" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.skipUsersInput"></a>

```python
skip_users_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[ThreeFieldAppTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeouts">ThreeFieldAppTimeouts</a>, cdktf.IResolvable]

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `url_regex_input`<sup>Optional</sup> <a name="url_regex_input" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.urlRegexInput"></a>

```python
url_regex_input: str
```

- *Type:* str

---

##### `username_selector_input`<sup>Optional</sup> <a name="username_selector_input" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.usernameSelectorInput"></a>

```python
username_selector_input: str
```

- *Type:* str

---

##### `user_name_template_input`<sup>Optional</sup> <a name="user_name_template_input" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.userNameTemplateInput"></a>

```python
user_name_template_input: str
```

- *Type:* str

---

##### `user_name_template_push_status_input`<sup>Optional</sup> <a name="user_name_template_push_status_input" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.userNameTemplatePushStatusInput"></a>

```python
user_name_template_push_status_input: str
```

- *Type:* str

---

##### `user_name_template_suffix_input`<sup>Optional</sup> <a name="user_name_template_suffix_input" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.userNameTemplateSuffixInput"></a>

```python
user_name_template_suffix_input: str
```

- *Type:* str

---

##### `user_name_template_type_input`<sup>Optional</sup> <a name="user_name_template_type_input" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.userNameTemplateTypeInput"></a>

```python
user_name_template_type_input: str
```

- *Type:* str

---

##### `users_input`<sup>Optional</sup> <a name="users_input" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.usersInput"></a>

```python
users_input: typing.Union[IResolvable, typing.List[ThreeFieldAppUsers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsers">ThreeFieldAppUsers</a>]]

---

##### `accessibility_error_redirect_url`<sup>Required</sup> <a name="accessibility_error_redirect_url" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.accessibilityErrorRedirectUrl"></a>

```python
accessibility_error_redirect_url: str
```

- *Type:* str

---

##### `accessibility_login_redirect_url`<sup>Required</sup> <a name="accessibility_login_redirect_url" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.accessibilityLoginRedirectUrl"></a>

```python
accessibility_login_redirect_url: str
```

- *Type:* str

---

##### `accessibility_self_service`<sup>Required</sup> <a name="accessibility_self_service" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.accessibilitySelfService"></a>

```python
accessibility_self_service: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `admin_note`<sup>Required</sup> <a name="admin_note" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.adminNote"></a>

```python
admin_note: str
```

- *Type:* str

---

##### `app_links_json`<sup>Required</sup> <a name="app_links_json" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.appLinksJson"></a>

```python
app_links_json: str
```

- *Type:* str

---

##### `auto_submit_toolbar`<sup>Required</sup> <a name="auto_submit_toolbar" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.autoSubmitToolbar"></a>

```python
auto_submit_toolbar: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `button_selector`<sup>Required</sup> <a name="button_selector" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.buttonSelector"></a>

```python
button_selector: str
```

- *Type:* str

---

##### `credentials_scheme`<sup>Required</sup> <a name="credentials_scheme" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.credentialsScheme"></a>

```python
credentials_scheme: str
```

- *Type:* str

---

##### `enduser_note`<sup>Required</sup> <a name="enduser_note" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.enduserNote"></a>

```python
enduser_note: str
```

- *Type:* str

---

##### `extra_field_selector`<sup>Required</sup> <a name="extra_field_selector" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.extraFieldSelector"></a>

```python
extra_field_selector: str
```

- *Type:* str

---

##### `extra_field_value`<sup>Required</sup> <a name="extra_field_value" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.extraFieldValue"></a>

```python
extra_field_value: str
```

- *Type:* str

---

##### `groups`<sup>Required</sup> <a name="groups" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.groups"></a>

```python
groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `hide_ios`<sup>Required</sup> <a name="hide_ios" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.hideIos"></a>

```python
hide_ios: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `hide_web`<sup>Required</sup> <a name="hide_web" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.hideWeb"></a>

```python
hide_web: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.label"></a>

```python
label: str
```

- *Type:* str

---

##### `logo`<sup>Required</sup> <a name="logo" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.logo"></a>

```python
logo: str
```

- *Type:* str

---

##### `password_selector`<sup>Required</sup> <a name="password_selector" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.passwordSelector"></a>

```python
password_selector: str
```

- *Type:* str

---

##### `reveal_password`<sup>Required</sup> <a name="reveal_password" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.revealPassword"></a>

```python
reveal_password: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `shared_password`<sup>Required</sup> <a name="shared_password" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.sharedPassword"></a>

```python
shared_password: str
```

- *Type:* str

---

##### `shared_username`<sup>Required</sup> <a name="shared_username" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.sharedUsername"></a>

```python
shared_username: str
```

- *Type:* str

---

##### `skip_groups`<sup>Required</sup> <a name="skip_groups" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.skipGroups"></a>

```python
skip_groups: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `skip_users`<sup>Required</sup> <a name="skip_users" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.skipUsers"></a>

```python
skip_users: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `url_regex`<sup>Required</sup> <a name="url_regex" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.urlRegex"></a>

```python
url_regex: str
```

- *Type:* str

---

##### `username_selector`<sup>Required</sup> <a name="username_selector" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.usernameSelector"></a>

```python
username_selector: str
```

- *Type:* str

---

##### `user_name_template`<sup>Required</sup> <a name="user_name_template" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.userNameTemplate"></a>

```python
user_name_template: str
```

- *Type:* str

---

##### `user_name_template_push_status`<sup>Required</sup> <a name="user_name_template_push_status" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.userNameTemplatePushStatus"></a>

```python
user_name_template_push_status: str
```

- *Type:* str

---

##### `user_name_template_suffix`<sup>Required</sup> <a name="user_name_template_suffix" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.userNameTemplateSuffix"></a>

```python
user_name_template_suffix: str
```

- *Type:* str

---

##### `user_name_template_type`<sup>Required</sup> <a name="user_name_template_type" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.userNameTemplateType"></a>

```python
user_name_template_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldApp.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ThreeFieldAppConfig <a name="ThreeFieldAppConfig" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import three_field_app

threeFieldApp.ThreeFieldAppConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
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
  groups: typing.List[str] = None,
  hide_ios: typing.Union[bool, IResolvable] = None,
  hide_web: typing.Union[bool, IResolvable] = None,
  id: str = None,
  logo: str = None,
  reveal_password: typing.Union[bool, IResolvable] = None,
  shared_password: str = None,
  shared_username: str = None,
  skip_groups: typing.Union[bool, IResolvable] = None,
  skip_users: typing.Union[bool, IResolvable] = None,
  status: str = None,
  timeouts: ThreeFieldAppTimeouts = None,
  url_regex: str = None,
  user_name_template: str = None,
  user_name_template_push_status: str = None,
  user_name_template_suffix: str = None,
  user_name_template_type: str = None,
  users: typing.Union[IResolvable, typing.List[ThreeFieldAppUsers]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.buttonSelector">button_selector</a></code> | <code>str</code> | Login button field CSS selector. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.extraFieldSelector">extra_field_selector</a></code> | <code>str</code> | Extra field CSS selector. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.extraFieldValue">extra_field_value</a></code> | <code>str</code> | Value for extra form field. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.label">label</a></code> | <code>str</code> | Pretty name of app. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.passwordSelector">password_selector</a></code> | <code>str</code> | Login password field CSS selector. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.url">url</a></code> | <code>str</code> | Login URL. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.usernameSelector">username_selector</a></code> | <code>str</code> | Login username field CSS selector. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.accessibilityErrorRedirectUrl">accessibility_error_redirect_url</a></code> | <code>str</code> | Custom error page URL. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.accessibilityLoginRedirectUrl">accessibility_login_redirect_url</a></code> | <code>str</code> | Custom login page URL. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.accessibilitySelfService">accessibility_self_service</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable self service. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.adminNote">admin_note</a></code> | <code>str</code> | Application notes for admins. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.appLinksJson">app_links_json</a></code> | <code>str</code> | Displays specific appLinks for the app. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.autoSubmitToolbar">auto_submit_toolbar</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Display auto submit toolbar. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.credentialsScheme">credentials_scheme</a></code> | <code>str</code> | Application credentials scheme. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.enduserNote">enduser_note</a></code> | <code>str</code> | Application notes for end users. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.groups">groups</a></code> | <code>typing.List[str]</code> | Groups associated with the application. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.hideIos">hide_ios</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Do not display application icon on mobile app. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.hideWeb">hide_web</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Do not display application icon to users. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#id ThreeFieldApp#id}. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.logo">logo</a></code> | <code>str</code> | Local path to logo of the application. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.revealPassword">reveal_password</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allow user to reveal password. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.sharedPassword">shared_password</a></code> | <code>str</code> | Shared password, required for certain schemes. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.sharedUsername">shared_username</a></code> | <code>str</code> | Shared username, required for certain schemes. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.skipGroups">skip_groups</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Ignore groups sync. This is a temporary solution until 'groups' field is supported in all the app-like resources. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.skipUsers">skip_users</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Ignore users sync. This is a temporary solution until 'users' field is supported in all the app-like resources. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.status">status</a></code> | <code>str</code> | Status of application. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeouts">ThreeFieldAppTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.urlRegex">url_regex</a></code> | <code>str</code> | A regex that further restricts URL to the specified regex. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.userNameTemplate">user_name_template</a></code> | <code>str</code> | Username template. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.userNameTemplatePushStatus">user_name_template_push_status</a></code> | <code>str</code> | Push username on update. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.userNameTemplateSuffix">user_name_template_suffix</a></code> | <code>str</code> | Username template suffix. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.userNameTemplateType">user_name_template_type</a></code> | <code>str</code> | Username template type. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.users">users</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsers">ThreeFieldAppUsers</a>]]</code> | users block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `button_selector`<sup>Required</sup> <a name="button_selector" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.buttonSelector"></a>

```python
button_selector: str
```

- *Type:* str

Login button field CSS selector.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#button_selector ThreeFieldApp#button_selector}

---

##### `extra_field_selector`<sup>Required</sup> <a name="extra_field_selector" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.extraFieldSelector"></a>

```python
extra_field_selector: str
```

- *Type:* str

Extra field CSS selector.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#extra_field_selector ThreeFieldApp#extra_field_selector}

---

##### `extra_field_value`<sup>Required</sup> <a name="extra_field_value" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.extraFieldValue"></a>

```python
extra_field_value: str
```

- *Type:* str

Value for extra form field.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#extra_field_value ThreeFieldApp#extra_field_value}

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.label"></a>

```python
label: str
```

- *Type:* str

Pretty name of app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#label ThreeFieldApp#label}

---

##### `password_selector`<sup>Required</sup> <a name="password_selector" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.passwordSelector"></a>

```python
password_selector: str
```

- *Type:* str

Login password field CSS selector.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#password_selector ThreeFieldApp#password_selector}

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.url"></a>

```python
url: str
```

- *Type:* str

Login URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#url ThreeFieldApp#url}

---

##### `username_selector`<sup>Required</sup> <a name="username_selector" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.usernameSelector"></a>

```python
username_selector: str
```

- *Type:* str

Login username field CSS selector.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#username_selector ThreeFieldApp#username_selector}

---

##### `accessibility_error_redirect_url`<sup>Optional</sup> <a name="accessibility_error_redirect_url" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.accessibilityErrorRedirectUrl"></a>

```python
accessibility_error_redirect_url: str
```

- *Type:* str

Custom error page URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#accessibility_error_redirect_url ThreeFieldApp#accessibility_error_redirect_url}

---

##### `accessibility_login_redirect_url`<sup>Optional</sup> <a name="accessibility_login_redirect_url" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.accessibilityLoginRedirectUrl"></a>

```python
accessibility_login_redirect_url: str
```

- *Type:* str

Custom login page URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#accessibility_login_redirect_url ThreeFieldApp#accessibility_login_redirect_url}

---

##### `accessibility_self_service`<sup>Optional</sup> <a name="accessibility_self_service" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.accessibilitySelfService"></a>

```python
accessibility_self_service: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable self service.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#accessibility_self_service ThreeFieldApp#accessibility_self_service}

---

##### `admin_note`<sup>Optional</sup> <a name="admin_note" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.adminNote"></a>

```python
admin_note: str
```

- *Type:* str

Application notes for admins.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#admin_note ThreeFieldApp#admin_note}

---

##### `app_links_json`<sup>Optional</sup> <a name="app_links_json" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.appLinksJson"></a>

```python
app_links_json: str
```

- *Type:* str

Displays specific appLinks for the app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#app_links_json ThreeFieldApp#app_links_json}

---

##### `auto_submit_toolbar`<sup>Optional</sup> <a name="auto_submit_toolbar" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.autoSubmitToolbar"></a>

```python
auto_submit_toolbar: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Display auto submit toolbar.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#auto_submit_toolbar ThreeFieldApp#auto_submit_toolbar}

---

##### `credentials_scheme`<sup>Optional</sup> <a name="credentials_scheme" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.credentialsScheme"></a>

```python
credentials_scheme: str
```

- *Type:* str

Application credentials scheme.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#credentials_scheme ThreeFieldApp#credentials_scheme}

---

##### `enduser_note`<sup>Optional</sup> <a name="enduser_note" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.enduserNote"></a>

```python
enduser_note: str
```

- *Type:* str

Application notes for end users.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#enduser_note ThreeFieldApp#enduser_note}

---

##### `groups`<sup>Optional</sup> <a name="groups" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.groups"></a>

```python
groups: typing.List[str]
```

- *Type:* typing.List[str]

Groups associated with the application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#groups ThreeFieldApp#groups}

---

##### `hide_ios`<sup>Optional</sup> <a name="hide_ios" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.hideIos"></a>

```python
hide_ios: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Do not display application icon on mobile app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#hide_ios ThreeFieldApp#hide_ios}

---

##### `hide_web`<sup>Optional</sup> <a name="hide_web" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.hideWeb"></a>

```python
hide_web: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Do not display application icon to users.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#hide_web ThreeFieldApp#hide_web}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#id ThreeFieldApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logo`<sup>Optional</sup> <a name="logo" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.logo"></a>

```python
logo: str
```

- *Type:* str

Local path to logo of the application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#logo ThreeFieldApp#logo}

---

##### `reveal_password`<sup>Optional</sup> <a name="reveal_password" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.revealPassword"></a>

```python
reveal_password: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow user to reveal password.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#reveal_password ThreeFieldApp#reveal_password}

---

##### `shared_password`<sup>Optional</sup> <a name="shared_password" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.sharedPassword"></a>

```python
shared_password: str
```

- *Type:* str

Shared password, required for certain schemes.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#shared_password ThreeFieldApp#shared_password}

---

##### `shared_username`<sup>Optional</sup> <a name="shared_username" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.sharedUsername"></a>

```python
shared_username: str
```

- *Type:* str

Shared username, required for certain schemes.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#shared_username ThreeFieldApp#shared_username}

---

##### `skip_groups`<sup>Optional</sup> <a name="skip_groups" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.skipGroups"></a>

```python
skip_groups: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Ignore groups sync. This is a temporary solution until 'groups' field is supported in all the app-like resources.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#skip_groups ThreeFieldApp#skip_groups}

---

##### `skip_users`<sup>Optional</sup> <a name="skip_users" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.skipUsers"></a>

```python
skip_users: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Ignore users sync. This is a temporary solution until 'users' field is supported in all the app-like resources.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#skip_users ThreeFieldApp#skip_users}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.status"></a>

```python
status: str
```

- *Type:* str

Status of application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#status ThreeFieldApp#status}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.timeouts"></a>

```python
timeouts: ThreeFieldAppTimeouts
```

- *Type:* <a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeouts">ThreeFieldAppTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#timeouts ThreeFieldApp#timeouts}

---

##### `url_regex`<sup>Optional</sup> <a name="url_regex" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.urlRegex"></a>

```python
url_regex: str
```

- *Type:* str

A regex that further restricts URL to the specified regex.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#url_regex ThreeFieldApp#url_regex}

---

##### `user_name_template`<sup>Optional</sup> <a name="user_name_template" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.userNameTemplate"></a>

```python
user_name_template: str
```

- *Type:* str

Username template.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#user_name_template ThreeFieldApp#user_name_template}

---

##### `user_name_template_push_status`<sup>Optional</sup> <a name="user_name_template_push_status" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.userNameTemplatePushStatus"></a>

```python
user_name_template_push_status: str
```

- *Type:* str

Push username on update.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#user_name_template_push_status ThreeFieldApp#user_name_template_push_status}

---

##### `user_name_template_suffix`<sup>Optional</sup> <a name="user_name_template_suffix" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.userNameTemplateSuffix"></a>

```python
user_name_template_suffix: str
```

- *Type:* str

Username template suffix.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#user_name_template_suffix ThreeFieldApp#user_name_template_suffix}

---

##### `user_name_template_type`<sup>Optional</sup> <a name="user_name_template_type" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.userNameTemplateType"></a>

```python
user_name_template_type: str
```

- *Type:* str

Username template type.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#user_name_template_type ThreeFieldApp#user_name_template_type}

---

##### `users`<sup>Optional</sup> <a name="users" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppConfig.property.users"></a>

```python
users: typing.Union[IResolvable, typing.List[ThreeFieldAppUsers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsers">ThreeFieldAppUsers</a>]]

users block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#users ThreeFieldApp#users}

---

### ThreeFieldAppTimeouts <a name="ThreeFieldAppTimeouts" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import three_field_app

threeFieldApp.ThreeFieldAppTimeouts(
  create: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#create ThreeFieldApp#create}. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#read ThreeFieldApp#read}. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#update ThreeFieldApp#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#create ThreeFieldApp#create}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#read ThreeFieldApp#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#update ThreeFieldApp#update}.

---

### ThreeFieldAppUsers <a name="ThreeFieldAppUsers" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsers.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import three_field_app

threeFieldApp.ThreeFieldAppUsers(
  id: str = None,
  password: str = None,
  username: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsers.property.id">id</a></code> | <code>str</code> | User ID. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsers.property.password">password</a></code> | <code>str</code> | Password for user application. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsers.property.username">username</a></code> | <code>str</code> | Username for user. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsers.property.id"></a>

```python
id: str
```

- *Type:* str

User ID.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#id ThreeFieldApp#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsers.property.password"></a>

```python
password: str
```

- *Type:* str

Password for user application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#password ThreeFieldApp#password}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsers.property.username"></a>

```python
username: str
```

- *Type:* str

Username for user.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app#username ThreeFieldApp#username}

---

## Classes <a name="Classes" id="Classes"></a>

### ThreeFieldAppTimeoutsOutputReference <a name="ThreeFieldAppTimeoutsOutputReference" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import three_field_app

threeFieldApp.ThreeFieldAppTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeouts">ThreeFieldAppTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[ThreeFieldAppTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppTimeouts">ThreeFieldAppTimeouts</a>, cdktf.IResolvable]

---


### ThreeFieldAppUsersList <a name="ThreeFieldAppUsersList" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersList.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import three_field_app

threeFieldApp.ThreeFieldAppUsersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ThreeFieldAppUsersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsers">ThreeFieldAppUsers</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ThreeFieldAppUsers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsers">ThreeFieldAppUsers</a>]]

---


### ThreeFieldAppUsersOutputReference <a name="ThreeFieldAppUsersOutputReference" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import three_field_app

threeFieldApp.ThreeFieldAppUsersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.resetUsername">reset_username</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_id` <a name="reset_id" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_password` <a name="reset_password" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_username` <a name="reset_username" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.resetUsername"></a>

```python
def reset_username() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.property.scope">scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsers">ThreeFieldAppUsers</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[ThreeFieldAppUsers, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-okta.threeFieldApp.ThreeFieldAppUsers">ThreeFieldAppUsers</a>, cdktf.IResolvable]

---



