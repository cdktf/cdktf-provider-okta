# `okta_secure_password_store_app`

Refer to the Terraform Registory for docs: [`okta_secure_password_store_app`](https://www.terraform.io/docs/providers/okta/r/secure_password_store_app).

# `securePasswordStoreApp` Submodule <a name="`securePasswordStoreApp` Submodule" id="@cdktf/provider-okta.securePasswordStoreApp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurePasswordStoreApp <a name="SecurePasswordStoreApp" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp"></a>

Represents a {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app okta_secure_password_store_app}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import secure_password_store_app

securePasswordStoreApp.SecurePasswordStoreApp(
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
  password_field: str,
  url: str,
  username_field: str,
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
  optional_field1: str = None,
  optional_field1_value: str = None,
  optional_field2: str = None,
  optional_field2_value: str = None,
  optional_field3: str = None,
  optional_field3_value: str = None,
  reveal_password: typing.Union[bool, IResolvable] = None,
  shared_password: str = None,
  shared_username: str = None,
  skip_groups: typing.Union[bool, IResolvable] = None,
  skip_users: typing.Union[bool, IResolvable] = None,
  status: str = None,
  timeouts: SecurePasswordStoreAppTimeouts = None,
  user_name_template: str = None,
  user_name_template_push_status: str = None,
  user_name_template_suffix: str = None,
  user_name_template_type: str = None,
  users: typing.Union[IResolvable, typing.List[SecurePasswordStoreAppUsers]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.label">label</a></code> | <code>str</code> | Pretty name of app. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.passwordField">password_field</a></code> | <code>str</code> | Login password field. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.url">url</a></code> | <code>str</code> | Login URL. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.usernameField">username_field</a></code> | <code>str</code> | Login username field. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.accessibilityErrorRedirectUrl">accessibility_error_redirect_url</a></code> | <code>str</code> | Custom error page URL. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.accessibilityLoginRedirectUrl">accessibility_login_redirect_url</a></code> | <code>str</code> | Custom login page URL. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.accessibilitySelfService">accessibility_self_service</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable self service. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.adminNote">admin_note</a></code> | <code>str</code> | Application notes for admins. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.appLinksJson">app_links_json</a></code> | <code>str</code> | Displays specific appLinks for the app. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.autoSubmitToolbar">auto_submit_toolbar</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Display auto submit toolbar. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.credentialsScheme">credentials_scheme</a></code> | <code>str</code> | Application credentials scheme. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.enduserNote">enduser_note</a></code> | <code>str</code> | Application notes for end users. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.groups">groups</a></code> | <code>typing.List[str]</code> | Groups associated with the application. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.hideIos">hide_ios</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Do not display application icon on mobile app. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.hideWeb">hide_web</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Do not display application icon to users. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#id SecurePasswordStoreApp#id}. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.logo">logo</a></code> | <code>str</code> | Local path to logo of the application. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.optionalField1">optional_field1</a></code> | <code>str</code> | Name of optional param in the login form. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.optionalField1Value">optional_field1_value</a></code> | <code>str</code> | Name of optional value in login form. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.optionalField2">optional_field2</a></code> | <code>str</code> | Name of optional param in the login form. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.optionalField2Value">optional_field2_value</a></code> | <code>str</code> | Name of optional value in login form. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.optionalField3">optional_field3</a></code> | <code>str</code> | Name of optional param in the login form. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.optionalField3Value">optional_field3_value</a></code> | <code>str</code> | Name of optional value in login form. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.revealPassword">reveal_password</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allow user to reveal password. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.sharedPassword">shared_password</a></code> | <code>str</code> | Shared password, required for certain schemes. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.sharedUsername">shared_username</a></code> | <code>str</code> | Shared username, required for certain schemes. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.skipGroups">skip_groups</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Ignore groups sync. This is a temporary solution until 'groups' field is supported in all the app-like resources. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.skipUsers">skip_users</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Ignore users sync. This is a temporary solution until 'users' field is supported in all the app-like resources. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.status">status</a></code> | <code>str</code> | Status of application. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeouts">SecurePasswordStoreAppTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.userNameTemplate">user_name_template</a></code> | <code>str</code> | Username template. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.userNameTemplatePushStatus">user_name_template_push_status</a></code> | <code>str</code> | Push username on update. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.userNameTemplateSuffix">user_name_template_suffix</a></code> | <code>str</code> | Username template suffix. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.userNameTemplateType">user_name_template_type</a></code> | <code>str</code> | Username template type. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.users">users</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsers">SecurePasswordStoreAppUsers</a>]]</code> | users block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.label"></a>

- *Type:* str

Pretty name of app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#label SecurePasswordStoreApp#label}

---

##### `password_field`<sup>Required</sup> <a name="password_field" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.passwordField"></a>

- *Type:* str

Login password field.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#password_field SecurePasswordStoreApp#password_field}

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.url"></a>

- *Type:* str

Login URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#url SecurePasswordStoreApp#url}

---

##### `username_field`<sup>Required</sup> <a name="username_field" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.usernameField"></a>

- *Type:* str

Login username field.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#username_field SecurePasswordStoreApp#username_field}

---

##### `accessibility_error_redirect_url`<sup>Optional</sup> <a name="accessibility_error_redirect_url" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.accessibilityErrorRedirectUrl"></a>

- *Type:* str

Custom error page URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#accessibility_error_redirect_url SecurePasswordStoreApp#accessibility_error_redirect_url}

---

##### `accessibility_login_redirect_url`<sup>Optional</sup> <a name="accessibility_login_redirect_url" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.accessibilityLoginRedirectUrl"></a>

- *Type:* str

Custom login page URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#accessibility_login_redirect_url SecurePasswordStoreApp#accessibility_login_redirect_url}

---

##### `accessibility_self_service`<sup>Optional</sup> <a name="accessibility_self_service" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.accessibilitySelfService"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable self service.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#accessibility_self_service SecurePasswordStoreApp#accessibility_self_service}

---

##### `admin_note`<sup>Optional</sup> <a name="admin_note" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.adminNote"></a>

- *Type:* str

Application notes for admins.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#admin_note SecurePasswordStoreApp#admin_note}

---

##### `app_links_json`<sup>Optional</sup> <a name="app_links_json" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.appLinksJson"></a>

- *Type:* str

Displays specific appLinks for the app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#app_links_json SecurePasswordStoreApp#app_links_json}

---

##### `auto_submit_toolbar`<sup>Optional</sup> <a name="auto_submit_toolbar" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.autoSubmitToolbar"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Display auto submit toolbar.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#auto_submit_toolbar SecurePasswordStoreApp#auto_submit_toolbar}

---

##### `credentials_scheme`<sup>Optional</sup> <a name="credentials_scheme" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.credentialsScheme"></a>

- *Type:* str

Application credentials scheme.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#credentials_scheme SecurePasswordStoreApp#credentials_scheme}

---

##### `enduser_note`<sup>Optional</sup> <a name="enduser_note" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.enduserNote"></a>

- *Type:* str

Application notes for end users.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#enduser_note SecurePasswordStoreApp#enduser_note}

---

##### `groups`<sup>Optional</sup> <a name="groups" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.groups"></a>

- *Type:* typing.List[str]

Groups associated with the application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#groups SecurePasswordStoreApp#groups}

---

##### `hide_ios`<sup>Optional</sup> <a name="hide_ios" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.hideIos"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Do not display application icon on mobile app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#hide_ios SecurePasswordStoreApp#hide_ios}

---

##### `hide_web`<sup>Optional</sup> <a name="hide_web" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.hideWeb"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Do not display application icon to users.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#hide_web SecurePasswordStoreApp#hide_web}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#id SecurePasswordStoreApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logo`<sup>Optional</sup> <a name="logo" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.logo"></a>

- *Type:* str

Local path to logo of the application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#logo SecurePasswordStoreApp#logo}

---

##### `optional_field1`<sup>Optional</sup> <a name="optional_field1" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.optionalField1"></a>

- *Type:* str

Name of optional param in the login form.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#optional_field1 SecurePasswordStoreApp#optional_field1}

---

##### `optional_field1_value`<sup>Optional</sup> <a name="optional_field1_value" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.optionalField1Value"></a>

- *Type:* str

Name of optional value in login form.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#optional_field1_value SecurePasswordStoreApp#optional_field1_value}

---

##### `optional_field2`<sup>Optional</sup> <a name="optional_field2" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.optionalField2"></a>

- *Type:* str

Name of optional param in the login form.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#optional_field2 SecurePasswordStoreApp#optional_field2}

---

##### `optional_field2_value`<sup>Optional</sup> <a name="optional_field2_value" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.optionalField2Value"></a>

- *Type:* str

Name of optional value in login form.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#optional_field2_value SecurePasswordStoreApp#optional_field2_value}

---

##### `optional_field3`<sup>Optional</sup> <a name="optional_field3" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.optionalField3"></a>

- *Type:* str

Name of optional param in the login form.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#optional_field3 SecurePasswordStoreApp#optional_field3}

---

##### `optional_field3_value`<sup>Optional</sup> <a name="optional_field3_value" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.optionalField3Value"></a>

- *Type:* str

Name of optional value in login form.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#optional_field3_value SecurePasswordStoreApp#optional_field3_value}

---

##### `reveal_password`<sup>Optional</sup> <a name="reveal_password" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.revealPassword"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow user to reveal password.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#reveal_password SecurePasswordStoreApp#reveal_password}

---

##### `shared_password`<sup>Optional</sup> <a name="shared_password" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.sharedPassword"></a>

- *Type:* str

Shared password, required for certain schemes.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#shared_password SecurePasswordStoreApp#shared_password}

---

##### `shared_username`<sup>Optional</sup> <a name="shared_username" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.sharedUsername"></a>

- *Type:* str

Shared username, required for certain schemes.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#shared_username SecurePasswordStoreApp#shared_username}

---

##### `skip_groups`<sup>Optional</sup> <a name="skip_groups" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.skipGroups"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Ignore groups sync. This is a temporary solution until 'groups' field is supported in all the app-like resources.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#skip_groups SecurePasswordStoreApp#skip_groups}

---

##### `skip_users`<sup>Optional</sup> <a name="skip_users" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.skipUsers"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Ignore users sync. This is a temporary solution until 'users' field is supported in all the app-like resources.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#skip_users SecurePasswordStoreApp#skip_users}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.status"></a>

- *Type:* str

Status of application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#status SecurePasswordStoreApp#status}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeouts">SecurePasswordStoreAppTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#timeouts SecurePasswordStoreApp#timeouts}

---

##### `user_name_template`<sup>Optional</sup> <a name="user_name_template" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.userNameTemplate"></a>

- *Type:* str

Username template.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#user_name_template SecurePasswordStoreApp#user_name_template}

---

##### `user_name_template_push_status`<sup>Optional</sup> <a name="user_name_template_push_status" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.userNameTemplatePushStatus"></a>

- *Type:* str

Push username on update.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#user_name_template_push_status SecurePasswordStoreApp#user_name_template_push_status}

---

##### `user_name_template_suffix`<sup>Optional</sup> <a name="user_name_template_suffix" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.userNameTemplateSuffix"></a>

- *Type:* str

Username template suffix.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#user_name_template_suffix SecurePasswordStoreApp#user_name_template_suffix}

---

##### `user_name_template_type`<sup>Optional</sup> <a name="user_name_template_type" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.userNameTemplateType"></a>

- *Type:* str

Username template type.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#user_name_template_type SecurePasswordStoreApp#user_name_template_type}

---

##### `users`<sup>Optional</sup> <a name="users" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.users"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsers">SecurePasswordStoreAppUsers</a>]]

users block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#users SecurePasswordStoreApp#users}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.putUsers">put_users</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetAccessibilityErrorRedirectUrl">reset_accessibility_error_redirect_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetAccessibilityLoginRedirectUrl">reset_accessibility_login_redirect_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetAccessibilitySelfService">reset_accessibility_self_service</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetAdminNote">reset_admin_note</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetAppLinksJson">reset_app_links_json</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetAutoSubmitToolbar">reset_auto_submit_toolbar</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetCredentialsScheme">reset_credentials_scheme</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetEnduserNote">reset_enduser_note</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetGroups">reset_groups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetHideIos">reset_hide_ios</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetHideWeb">reset_hide_web</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetLogo">reset_logo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetOptionalField1">reset_optional_field1</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetOptionalField1Value">reset_optional_field1_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetOptionalField2">reset_optional_field2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetOptionalField2Value">reset_optional_field2_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetOptionalField3">reset_optional_field3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetOptionalField3Value">reset_optional_field3_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetRevealPassword">reset_reveal_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetSharedPassword">reset_shared_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetSharedUsername">reset_shared_username</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetSkipGroups">reset_skip_groups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetSkipUsers">reset_skip_users</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetUserNameTemplate">reset_user_name_template</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetUserNameTemplatePushStatus">reset_user_name_template_push_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetUserNameTemplateSuffix">reset_user_name_template_suffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetUserNameTemplateType">reset_user_name_template_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetUsers">reset_users</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#create SecurePasswordStoreApp#create}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#read SecurePasswordStoreApp#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#update SecurePasswordStoreApp#update}.

---

##### `put_users` <a name="put_users" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.putUsers"></a>

```python
def put_users(
  value: typing.Union[IResolvable, typing.List[SecurePasswordStoreAppUsers]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.putUsers.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsers">SecurePasswordStoreAppUsers</a>]]

---

##### `reset_accessibility_error_redirect_url` <a name="reset_accessibility_error_redirect_url" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetAccessibilityErrorRedirectUrl"></a>

```python
def reset_accessibility_error_redirect_url() -> None
```

##### `reset_accessibility_login_redirect_url` <a name="reset_accessibility_login_redirect_url" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetAccessibilityLoginRedirectUrl"></a>

```python
def reset_accessibility_login_redirect_url() -> None
```

##### `reset_accessibility_self_service` <a name="reset_accessibility_self_service" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetAccessibilitySelfService"></a>

```python
def reset_accessibility_self_service() -> None
```

##### `reset_admin_note` <a name="reset_admin_note" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetAdminNote"></a>

```python
def reset_admin_note() -> None
```

##### `reset_app_links_json` <a name="reset_app_links_json" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetAppLinksJson"></a>

```python
def reset_app_links_json() -> None
```

##### `reset_auto_submit_toolbar` <a name="reset_auto_submit_toolbar" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetAutoSubmitToolbar"></a>

```python
def reset_auto_submit_toolbar() -> None
```

##### `reset_credentials_scheme` <a name="reset_credentials_scheme" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetCredentialsScheme"></a>

```python
def reset_credentials_scheme() -> None
```

##### `reset_enduser_note` <a name="reset_enduser_note" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetEnduserNote"></a>

```python
def reset_enduser_note() -> None
```

##### `reset_groups` <a name="reset_groups" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetGroups"></a>

```python
def reset_groups() -> None
```

##### `reset_hide_ios` <a name="reset_hide_ios" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetHideIos"></a>

```python
def reset_hide_ios() -> None
```

##### `reset_hide_web` <a name="reset_hide_web" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetHideWeb"></a>

```python
def reset_hide_web() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_logo` <a name="reset_logo" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetLogo"></a>

```python
def reset_logo() -> None
```

##### `reset_optional_field1` <a name="reset_optional_field1" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetOptionalField1"></a>

```python
def reset_optional_field1() -> None
```

##### `reset_optional_field1_value` <a name="reset_optional_field1_value" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetOptionalField1Value"></a>

```python
def reset_optional_field1_value() -> None
```

##### `reset_optional_field2` <a name="reset_optional_field2" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetOptionalField2"></a>

```python
def reset_optional_field2() -> None
```

##### `reset_optional_field2_value` <a name="reset_optional_field2_value" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetOptionalField2Value"></a>

```python
def reset_optional_field2_value() -> None
```

##### `reset_optional_field3` <a name="reset_optional_field3" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetOptionalField3"></a>

```python
def reset_optional_field3() -> None
```

##### `reset_optional_field3_value` <a name="reset_optional_field3_value" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetOptionalField3Value"></a>

```python
def reset_optional_field3_value() -> None
```

##### `reset_reveal_password` <a name="reset_reveal_password" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetRevealPassword"></a>

```python
def reset_reveal_password() -> None
```

##### `reset_shared_password` <a name="reset_shared_password" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetSharedPassword"></a>

```python
def reset_shared_password() -> None
```

##### `reset_shared_username` <a name="reset_shared_username" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetSharedUsername"></a>

```python
def reset_shared_username() -> None
```

##### `reset_skip_groups` <a name="reset_skip_groups" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetSkipGroups"></a>

```python
def reset_skip_groups() -> None
```

##### `reset_skip_users` <a name="reset_skip_users" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetSkipUsers"></a>

```python
def reset_skip_users() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_user_name_template` <a name="reset_user_name_template" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetUserNameTemplate"></a>

```python
def reset_user_name_template() -> None
```

##### `reset_user_name_template_push_status` <a name="reset_user_name_template_push_status" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetUserNameTemplatePushStatus"></a>

```python
def reset_user_name_template_push_status() -> None
```

##### `reset_user_name_template_suffix` <a name="reset_user_name_template_suffix" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetUserNameTemplateSuffix"></a>

```python
def reset_user_name_template_suffix() -> None
```

##### `reset_user_name_template_type` <a name="reset_user_name_template_type" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetUserNameTemplateType"></a>

```python
def reset_user_name_template_type() -> None
```

##### `reset_users` <a name="reset_users" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetUsers"></a>

```python
def reset_users() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.isConstruct"></a>

```python
from cdktf_cdktf_provider_okta import secure_password_store_app

securePasswordStoreApp.SecurePasswordStoreApp.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_okta import secure_password_store_app

securePasswordStoreApp.SecurePasswordStoreApp.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_okta import secure_password_store_app

securePasswordStoreApp.SecurePasswordStoreApp.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.logoUrl">logo_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.signOnMode">sign_on_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference">SecurePasswordStoreAppTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.users">users</a></code> | <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList">SecurePasswordStoreAppUsersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.accessibilityErrorRedirectUrlInput">accessibility_error_redirect_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.accessibilityLoginRedirectUrlInput">accessibility_login_redirect_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.accessibilitySelfServiceInput">accessibility_self_service_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.adminNoteInput">admin_note_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.appLinksJsonInput">app_links_json_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.autoSubmitToolbarInput">auto_submit_toolbar_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.credentialsSchemeInput">credentials_scheme_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.enduserNoteInput">enduser_note_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.groupsInput">groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.hideIosInput">hide_ios_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.hideWebInput">hide_web_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.labelInput">label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.logoInput">logo_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField1Input">optional_field1_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField1ValueInput">optional_field1_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField2Input">optional_field2_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField2ValueInput">optional_field2_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField3Input">optional_field3_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField3ValueInput">optional_field3_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.passwordFieldInput">password_field_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.revealPasswordInput">reveal_password_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.sharedPasswordInput">shared_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.sharedUsernameInput">shared_username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.skipGroupsInput">skip_groups_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.skipUsersInput">skip_users_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeouts">SecurePasswordStoreAppTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.usernameFieldInput">username_field_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.userNameTemplateInput">user_name_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.userNameTemplatePushStatusInput">user_name_template_push_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.userNameTemplateSuffixInput">user_name_template_suffix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.userNameTemplateTypeInput">user_name_template_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.usersInput">users_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsers">SecurePasswordStoreAppUsers</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.accessibilityErrorRedirectUrl">accessibility_error_redirect_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.accessibilityLoginRedirectUrl">accessibility_login_redirect_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.accessibilitySelfService">accessibility_self_service</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.adminNote">admin_note</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.appLinksJson">app_links_json</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.autoSubmitToolbar">auto_submit_toolbar</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.credentialsScheme">credentials_scheme</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.enduserNote">enduser_note</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.groups">groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.hideIos">hide_ios</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.hideWeb">hide_web</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.label">label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.logo">logo</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField1">optional_field1</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField1Value">optional_field1_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField2">optional_field2</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField2Value">optional_field2_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField3">optional_field3</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField3Value">optional_field3_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.passwordField">password_field</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.revealPassword">reveal_password</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.sharedPassword">shared_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.sharedUsername">shared_username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.skipGroups">skip_groups</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.skipUsers">skip_users</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.usernameField">username_field</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.userNameTemplate">user_name_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.userNameTemplatePushStatus">user_name_template_push_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.userNameTemplateSuffix">user_name_template_suffix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.userNameTemplateType">user_name_template_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `logo_url`<sup>Required</sup> <a name="logo_url" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.logoUrl"></a>

```python
logo_url: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `sign_on_mode`<sup>Required</sup> <a name="sign_on_mode" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.signOnMode"></a>

```python
sign_on_mode: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.timeouts"></a>

```python
timeouts: SecurePasswordStoreAppTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference">SecurePasswordStoreAppTimeoutsOutputReference</a>

---

##### `users`<sup>Required</sup> <a name="users" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.users"></a>

```python
users: SecurePasswordStoreAppUsersList
```

- *Type:* <a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList">SecurePasswordStoreAppUsersList</a>

---

##### `accessibility_error_redirect_url_input`<sup>Optional</sup> <a name="accessibility_error_redirect_url_input" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.accessibilityErrorRedirectUrlInput"></a>

```python
accessibility_error_redirect_url_input: str
```

- *Type:* str

---

##### `accessibility_login_redirect_url_input`<sup>Optional</sup> <a name="accessibility_login_redirect_url_input" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.accessibilityLoginRedirectUrlInput"></a>

```python
accessibility_login_redirect_url_input: str
```

- *Type:* str

---

##### `accessibility_self_service_input`<sup>Optional</sup> <a name="accessibility_self_service_input" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.accessibilitySelfServiceInput"></a>

```python
accessibility_self_service_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `admin_note_input`<sup>Optional</sup> <a name="admin_note_input" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.adminNoteInput"></a>

```python
admin_note_input: str
```

- *Type:* str

---

##### `app_links_json_input`<sup>Optional</sup> <a name="app_links_json_input" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.appLinksJsonInput"></a>

```python
app_links_json_input: str
```

- *Type:* str

---

##### `auto_submit_toolbar_input`<sup>Optional</sup> <a name="auto_submit_toolbar_input" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.autoSubmitToolbarInput"></a>

```python
auto_submit_toolbar_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `credentials_scheme_input`<sup>Optional</sup> <a name="credentials_scheme_input" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.credentialsSchemeInput"></a>

```python
credentials_scheme_input: str
```

- *Type:* str

---

##### `enduser_note_input`<sup>Optional</sup> <a name="enduser_note_input" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.enduserNoteInput"></a>

```python
enduser_note_input: str
```

- *Type:* str

---

##### `groups_input`<sup>Optional</sup> <a name="groups_input" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.groupsInput"></a>

```python
groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `hide_ios_input`<sup>Optional</sup> <a name="hide_ios_input" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.hideIosInput"></a>

```python
hide_ios_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `hide_web_input`<sup>Optional</sup> <a name="hide_web_input" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.hideWebInput"></a>

```python
hide_web_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `label_input`<sup>Optional</sup> <a name="label_input" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.labelInput"></a>

```python
label_input: str
```

- *Type:* str

---

##### `logo_input`<sup>Optional</sup> <a name="logo_input" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.logoInput"></a>

```python
logo_input: str
```

- *Type:* str

---

##### `optional_field1_input`<sup>Optional</sup> <a name="optional_field1_input" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField1Input"></a>

```python
optional_field1_input: str
```

- *Type:* str

---

##### `optional_field1_value_input`<sup>Optional</sup> <a name="optional_field1_value_input" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField1ValueInput"></a>

```python
optional_field1_value_input: str
```

- *Type:* str

---

##### `optional_field2_input`<sup>Optional</sup> <a name="optional_field2_input" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField2Input"></a>

```python
optional_field2_input: str
```

- *Type:* str

---

##### `optional_field2_value_input`<sup>Optional</sup> <a name="optional_field2_value_input" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField2ValueInput"></a>

```python
optional_field2_value_input: str
```

- *Type:* str

---

##### `optional_field3_input`<sup>Optional</sup> <a name="optional_field3_input" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField3Input"></a>

```python
optional_field3_input: str
```

- *Type:* str

---

##### `optional_field3_value_input`<sup>Optional</sup> <a name="optional_field3_value_input" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField3ValueInput"></a>

```python
optional_field3_value_input: str
```

- *Type:* str

---

##### `password_field_input`<sup>Optional</sup> <a name="password_field_input" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.passwordFieldInput"></a>

```python
password_field_input: str
```

- *Type:* str

---

##### `reveal_password_input`<sup>Optional</sup> <a name="reveal_password_input" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.revealPasswordInput"></a>

```python
reveal_password_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `shared_password_input`<sup>Optional</sup> <a name="shared_password_input" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.sharedPasswordInput"></a>

```python
shared_password_input: str
```

- *Type:* str

---

##### `shared_username_input`<sup>Optional</sup> <a name="shared_username_input" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.sharedUsernameInput"></a>

```python
shared_username_input: str
```

- *Type:* str

---

##### `skip_groups_input`<sup>Optional</sup> <a name="skip_groups_input" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.skipGroupsInput"></a>

```python
skip_groups_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `skip_users_input`<sup>Optional</sup> <a name="skip_users_input" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.skipUsersInput"></a>

```python
skip_users_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[SecurePasswordStoreAppTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeouts">SecurePasswordStoreAppTimeouts</a>, cdktf.IResolvable]

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `username_field_input`<sup>Optional</sup> <a name="username_field_input" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.usernameFieldInput"></a>

```python
username_field_input: str
```

- *Type:* str

---

##### `user_name_template_input`<sup>Optional</sup> <a name="user_name_template_input" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.userNameTemplateInput"></a>

```python
user_name_template_input: str
```

- *Type:* str

---

##### `user_name_template_push_status_input`<sup>Optional</sup> <a name="user_name_template_push_status_input" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.userNameTemplatePushStatusInput"></a>

```python
user_name_template_push_status_input: str
```

- *Type:* str

---

##### `user_name_template_suffix_input`<sup>Optional</sup> <a name="user_name_template_suffix_input" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.userNameTemplateSuffixInput"></a>

```python
user_name_template_suffix_input: str
```

- *Type:* str

---

##### `user_name_template_type_input`<sup>Optional</sup> <a name="user_name_template_type_input" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.userNameTemplateTypeInput"></a>

```python
user_name_template_type_input: str
```

- *Type:* str

---

##### `users_input`<sup>Optional</sup> <a name="users_input" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.usersInput"></a>

```python
users_input: typing.Union[IResolvable, typing.List[SecurePasswordStoreAppUsers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsers">SecurePasswordStoreAppUsers</a>]]

---

##### `accessibility_error_redirect_url`<sup>Required</sup> <a name="accessibility_error_redirect_url" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.accessibilityErrorRedirectUrl"></a>

```python
accessibility_error_redirect_url: str
```

- *Type:* str

---

##### `accessibility_login_redirect_url`<sup>Required</sup> <a name="accessibility_login_redirect_url" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.accessibilityLoginRedirectUrl"></a>

```python
accessibility_login_redirect_url: str
```

- *Type:* str

---

##### `accessibility_self_service`<sup>Required</sup> <a name="accessibility_self_service" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.accessibilitySelfService"></a>

```python
accessibility_self_service: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `admin_note`<sup>Required</sup> <a name="admin_note" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.adminNote"></a>

```python
admin_note: str
```

- *Type:* str

---

##### `app_links_json`<sup>Required</sup> <a name="app_links_json" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.appLinksJson"></a>

```python
app_links_json: str
```

- *Type:* str

---

##### `auto_submit_toolbar`<sup>Required</sup> <a name="auto_submit_toolbar" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.autoSubmitToolbar"></a>

```python
auto_submit_toolbar: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `credentials_scheme`<sup>Required</sup> <a name="credentials_scheme" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.credentialsScheme"></a>

```python
credentials_scheme: str
```

- *Type:* str

---

##### `enduser_note`<sup>Required</sup> <a name="enduser_note" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.enduserNote"></a>

```python
enduser_note: str
```

- *Type:* str

---

##### `groups`<sup>Required</sup> <a name="groups" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.groups"></a>

```python
groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `hide_ios`<sup>Required</sup> <a name="hide_ios" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.hideIos"></a>

```python
hide_ios: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `hide_web`<sup>Required</sup> <a name="hide_web" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.hideWeb"></a>

```python
hide_web: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.label"></a>

```python
label: str
```

- *Type:* str

---

##### `logo`<sup>Required</sup> <a name="logo" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.logo"></a>

```python
logo: str
```

- *Type:* str

---

##### `optional_field1`<sup>Required</sup> <a name="optional_field1" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField1"></a>

```python
optional_field1: str
```

- *Type:* str

---

##### `optional_field1_value`<sup>Required</sup> <a name="optional_field1_value" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField1Value"></a>

```python
optional_field1_value: str
```

- *Type:* str

---

##### `optional_field2`<sup>Required</sup> <a name="optional_field2" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField2"></a>

```python
optional_field2: str
```

- *Type:* str

---

##### `optional_field2_value`<sup>Required</sup> <a name="optional_field2_value" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField2Value"></a>

```python
optional_field2_value: str
```

- *Type:* str

---

##### `optional_field3`<sup>Required</sup> <a name="optional_field3" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField3"></a>

```python
optional_field3: str
```

- *Type:* str

---

##### `optional_field3_value`<sup>Required</sup> <a name="optional_field3_value" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField3Value"></a>

```python
optional_field3_value: str
```

- *Type:* str

---

##### `password_field`<sup>Required</sup> <a name="password_field" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.passwordField"></a>

```python
password_field: str
```

- *Type:* str

---

##### `reveal_password`<sup>Required</sup> <a name="reveal_password" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.revealPassword"></a>

```python
reveal_password: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `shared_password`<sup>Required</sup> <a name="shared_password" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.sharedPassword"></a>

```python
shared_password: str
```

- *Type:* str

---

##### `shared_username`<sup>Required</sup> <a name="shared_username" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.sharedUsername"></a>

```python
shared_username: str
```

- *Type:* str

---

##### `skip_groups`<sup>Required</sup> <a name="skip_groups" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.skipGroups"></a>

```python
skip_groups: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `skip_users`<sup>Required</sup> <a name="skip_users" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.skipUsers"></a>

```python
skip_users: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `username_field`<sup>Required</sup> <a name="username_field" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.usernameField"></a>

```python
username_field: str
```

- *Type:* str

---

##### `user_name_template`<sup>Required</sup> <a name="user_name_template" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.userNameTemplate"></a>

```python
user_name_template: str
```

- *Type:* str

---

##### `user_name_template_push_status`<sup>Required</sup> <a name="user_name_template_push_status" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.userNameTemplatePushStatus"></a>

```python
user_name_template_push_status: str
```

- *Type:* str

---

##### `user_name_template_suffix`<sup>Required</sup> <a name="user_name_template_suffix" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.userNameTemplateSuffix"></a>

```python
user_name_template_suffix: str
```

- *Type:* str

---

##### `user_name_template_type`<sup>Required</sup> <a name="user_name_template_type" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.userNameTemplateType"></a>

```python
user_name_template_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SecurePasswordStoreAppConfig <a name="SecurePasswordStoreAppConfig" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import secure_password_store_app

securePasswordStoreApp.SecurePasswordStoreAppConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  label: str,
  password_field: str,
  url: str,
  username_field: str,
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
  optional_field1: str = None,
  optional_field1_value: str = None,
  optional_field2: str = None,
  optional_field2_value: str = None,
  optional_field3: str = None,
  optional_field3_value: str = None,
  reveal_password: typing.Union[bool, IResolvable] = None,
  shared_password: str = None,
  shared_username: str = None,
  skip_groups: typing.Union[bool, IResolvable] = None,
  skip_users: typing.Union[bool, IResolvable] = None,
  status: str = None,
  timeouts: SecurePasswordStoreAppTimeouts = None,
  user_name_template: str = None,
  user_name_template_push_status: str = None,
  user_name_template_suffix: str = None,
  user_name_template_type: str = None,
  users: typing.Union[IResolvable, typing.List[SecurePasswordStoreAppUsers]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.label">label</a></code> | <code>str</code> | Pretty name of app. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.passwordField">password_field</a></code> | <code>str</code> | Login password field. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.url">url</a></code> | <code>str</code> | Login URL. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.usernameField">username_field</a></code> | <code>str</code> | Login username field. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.accessibilityErrorRedirectUrl">accessibility_error_redirect_url</a></code> | <code>str</code> | Custom error page URL. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.accessibilityLoginRedirectUrl">accessibility_login_redirect_url</a></code> | <code>str</code> | Custom login page URL. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.accessibilitySelfService">accessibility_self_service</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable self service. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.adminNote">admin_note</a></code> | <code>str</code> | Application notes for admins. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.appLinksJson">app_links_json</a></code> | <code>str</code> | Displays specific appLinks for the app. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.autoSubmitToolbar">auto_submit_toolbar</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Display auto submit toolbar. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.credentialsScheme">credentials_scheme</a></code> | <code>str</code> | Application credentials scheme. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.enduserNote">enduser_note</a></code> | <code>str</code> | Application notes for end users. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.groups">groups</a></code> | <code>typing.List[str]</code> | Groups associated with the application. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.hideIos">hide_ios</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Do not display application icon on mobile app. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.hideWeb">hide_web</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Do not display application icon to users. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#id SecurePasswordStoreApp#id}. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.logo">logo</a></code> | <code>str</code> | Local path to logo of the application. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.optionalField1">optional_field1</a></code> | <code>str</code> | Name of optional param in the login form. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.optionalField1Value">optional_field1_value</a></code> | <code>str</code> | Name of optional value in login form. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.optionalField2">optional_field2</a></code> | <code>str</code> | Name of optional param in the login form. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.optionalField2Value">optional_field2_value</a></code> | <code>str</code> | Name of optional value in login form. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.optionalField3">optional_field3</a></code> | <code>str</code> | Name of optional param in the login form. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.optionalField3Value">optional_field3_value</a></code> | <code>str</code> | Name of optional value in login form. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.revealPassword">reveal_password</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allow user to reveal password. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.sharedPassword">shared_password</a></code> | <code>str</code> | Shared password, required for certain schemes. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.sharedUsername">shared_username</a></code> | <code>str</code> | Shared username, required for certain schemes. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.skipGroups">skip_groups</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Ignore groups sync. This is a temporary solution until 'groups' field is supported in all the app-like resources. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.skipUsers">skip_users</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Ignore users sync. This is a temporary solution until 'users' field is supported in all the app-like resources. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.status">status</a></code> | <code>str</code> | Status of application. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeouts">SecurePasswordStoreAppTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.userNameTemplate">user_name_template</a></code> | <code>str</code> | Username template. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.userNameTemplatePushStatus">user_name_template_push_status</a></code> | <code>str</code> | Push username on update. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.userNameTemplateSuffix">user_name_template_suffix</a></code> | <code>str</code> | Username template suffix. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.userNameTemplateType">user_name_template_type</a></code> | <code>str</code> | Username template type. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.users">users</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsers">SecurePasswordStoreAppUsers</a>]]</code> | users block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.label"></a>

```python
label: str
```

- *Type:* str

Pretty name of app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#label SecurePasswordStoreApp#label}

---

##### `password_field`<sup>Required</sup> <a name="password_field" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.passwordField"></a>

```python
password_field: str
```

- *Type:* str

Login password field.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#password_field SecurePasswordStoreApp#password_field}

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.url"></a>

```python
url: str
```

- *Type:* str

Login URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#url SecurePasswordStoreApp#url}

---

##### `username_field`<sup>Required</sup> <a name="username_field" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.usernameField"></a>

```python
username_field: str
```

- *Type:* str

Login username field.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#username_field SecurePasswordStoreApp#username_field}

---

##### `accessibility_error_redirect_url`<sup>Optional</sup> <a name="accessibility_error_redirect_url" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.accessibilityErrorRedirectUrl"></a>

```python
accessibility_error_redirect_url: str
```

- *Type:* str

Custom error page URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#accessibility_error_redirect_url SecurePasswordStoreApp#accessibility_error_redirect_url}

---

##### `accessibility_login_redirect_url`<sup>Optional</sup> <a name="accessibility_login_redirect_url" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.accessibilityLoginRedirectUrl"></a>

```python
accessibility_login_redirect_url: str
```

- *Type:* str

Custom login page URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#accessibility_login_redirect_url SecurePasswordStoreApp#accessibility_login_redirect_url}

---

##### `accessibility_self_service`<sup>Optional</sup> <a name="accessibility_self_service" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.accessibilitySelfService"></a>

```python
accessibility_self_service: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable self service.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#accessibility_self_service SecurePasswordStoreApp#accessibility_self_service}

---

##### `admin_note`<sup>Optional</sup> <a name="admin_note" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.adminNote"></a>

```python
admin_note: str
```

- *Type:* str

Application notes for admins.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#admin_note SecurePasswordStoreApp#admin_note}

---

##### `app_links_json`<sup>Optional</sup> <a name="app_links_json" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.appLinksJson"></a>

```python
app_links_json: str
```

- *Type:* str

Displays specific appLinks for the app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#app_links_json SecurePasswordStoreApp#app_links_json}

---

##### `auto_submit_toolbar`<sup>Optional</sup> <a name="auto_submit_toolbar" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.autoSubmitToolbar"></a>

```python
auto_submit_toolbar: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Display auto submit toolbar.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#auto_submit_toolbar SecurePasswordStoreApp#auto_submit_toolbar}

---

##### `credentials_scheme`<sup>Optional</sup> <a name="credentials_scheme" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.credentialsScheme"></a>

```python
credentials_scheme: str
```

- *Type:* str

Application credentials scheme.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#credentials_scheme SecurePasswordStoreApp#credentials_scheme}

---

##### `enduser_note`<sup>Optional</sup> <a name="enduser_note" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.enduserNote"></a>

```python
enduser_note: str
```

- *Type:* str

Application notes for end users.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#enduser_note SecurePasswordStoreApp#enduser_note}

---

##### `groups`<sup>Optional</sup> <a name="groups" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.groups"></a>

```python
groups: typing.List[str]
```

- *Type:* typing.List[str]

Groups associated with the application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#groups SecurePasswordStoreApp#groups}

---

##### `hide_ios`<sup>Optional</sup> <a name="hide_ios" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.hideIos"></a>

```python
hide_ios: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Do not display application icon on mobile app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#hide_ios SecurePasswordStoreApp#hide_ios}

---

##### `hide_web`<sup>Optional</sup> <a name="hide_web" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.hideWeb"></a>

```python
hide_web: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Do not display application icon to users.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#hide_web SecurePasswordStoreApp#hide_web}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#id SecurePasswordStoreApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logo`<sup>Optional</sup> <a name="logo" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.logo"></a>

```python
logo: str
```

- *Type:* str

Local path to logo of the application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#logo SecurePasswordStoreApp#logo}

---

##### `optional_field1`<sup>Optional</sup> <a name="optional_field1" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.optionalField1"></a>

```python
optional_field1: str
```

- *Type:* str

Name of optional param in the login form.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#optional_field1 SecurePasswordStoreApp#optional_field1}

---

##### `optional_field1_value`<sup>Optional</sup> <a name="optional_field1_value" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.optionalField1Value"></a>

```python
optional_field1_value: str
```

- *Type:* str

Name of optional value in login form.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#optional_field1_value SecurePasswordStoreApp#optional_field1_value}

---

##### `optional_field2`<sup>Optional</sup> <a name="optional_field2" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.optionalField2"></a>

```python
optional_field2: str
```

- *Type:* str

Name of optional param in the login form.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#optional_field2 SecurePasswordStoreApp#optional_field2}

---

##### `optional_field2_value`<sup>Optional</sup> <a name="optional_field2_value" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.optionalField2Value"></a>

```python
optional_field2_value: str
```

- *Type:* str

Name of optional value in login form.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#optional_field2_value SecurePasswordStoreApp#optional_field2_value}

---

##### `optional_field3`<sup>Optional</sup> <a name="optional_field3" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.optionalField3"></a>

```python
optional_field3: str
```

- *Type:* str

Name of optional param in the login form.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#optional_field3 SecurePasswordStoreApp#optional_field3}

---

##### `optional_field3_value`<sup>Optional</sup> <a name="optional_field3_value" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.optionalField3Value"></a>

```python
optional_field3_value: str
```

- *Type:* str

Name of optional value in login form.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#optional_field3_value SecurePasswordStoreApp#optional_field3_value}

---

##### `reveal_password`<sup>Optional</sup> <a name="reveal_password" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.revealPassword"></a>

```python
reveal_password: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow user to reveal password.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#reveal_password SecurePasswordStoreApp#reveal_password}

---

##### `shared_password`<sup>Optional</sup> <a name="shared_password" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.sharedPassword"></a>

```python
shared_password: str
```

- *Type:* str

Shared password, required for certain schemes.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#shared_password SecurePasswordStoreApp#shared_password}

---

##### `shared_username`<sup>Optional</sup> <a name="shared_username" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.sharedUsername"></a>

```python
shared_username: str
```

- *Type:* str

Shared username, required for certain schemes.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#shared_username SecurePasswordStoreApp#shared_username}

---

##### `skip_groups`<sup>Optional</sup> <a name="skip_groups" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.skipGroups"></a>

```python
skip_groups: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Ignore groups sync. This is a temporary solution until 'groups' field is supported in all the app-like resources.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#skip_groups SecurePasswordStoreApp#skip_groups}

---

##### `skip_users`<sup>Optional</sup> <a name="skip_users" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.skipUsers"></a>

```python
skip_users: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Ignore users sync. This is a temporary solution until 'users' field is supported in all the app-like resources.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#skip_users SecurePasswordStoreApp#skip_users}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.status"></a>

```python
status: str
```

- *Type:* str

Status of application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#status SecurePasswordStoreApp#status}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.timeouts"></a>

```python
timeouts: SecurePasswordStoreAppTimeouts
```

- *Type:* <a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeouts">SecurePasswordStoreAppTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#timeouts SecurePasswordStoreApp#timeouts}

---

##### `user_name_template`<sup>Optional</sup> <a name="user_name_template" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.userNameTemplate"></a>

```python
user_name_template: str
```

- *Type:* str

Username template.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#user_name_template SecurePasswordStoreApp#user_name_template}

---

##### `user_name_template_push_status`<sup>Optional</sup> <a name="user_name_template_push_status" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.userNameTemplatePushStatus"></a>

```python
user_name_template_push_status: str
```

- *Type:* str

Push username on update.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#user_name_template_push_status SecurePasswordStoreApp#user_name_template_push_status}

---

##### `user_name_template_suffix`<sup>Optional</sup> <a name="user_name_template_suffix" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.userNameTemplateSuffix"></a>

```python
user_name_template_suffix: str
```

- *Type:* str

Username template suffix.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#user_name_template_suffix SecurePasswordStoreApp#user_name_template_suffix}

---

##### `user_name_template_type`<sup>Optional</sup> <a name="user_name_template_type" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.userNameTemplateType"></a>

```python
user_name_template_type: str
```

- *Type:* str

Username template type.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#user_name_template_type SecurePasswordStoreApp#user_name_template_type}

---

##### `users`<sup>Optional</sup> <a name="users" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.users"></a>

```python
users: typing.Union[IResolvable, typing.List[SecurePasswordStoreAppUsers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsers">SecurePasswordStoreAppUsers</a>]]

users block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#users SecurePasswordStoreApp#users}

---

### SecurePasswordStoreAppTimeouts <a name="SecurePasswordStoreAppTimeouts" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import secure_password_store_app

securePasswordStoreApp.SecurePasswordStoreAppTimeouts(
  create: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#create SecurePasswordStoreApp#create}. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#read SecurePasswordStoreApp#read}. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#update SecurePasswordStoreApp#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#create SecurePasswordStoreApp#create}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#read SecurePasswordStoreApp#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#update SecurePasswordStoreApp#update}.

---

### SecurePasswordStoreAppUsers <a name="SecurePasswordStoreAppUsers" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsers.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import secure_password_store_app

securePasswordStoreApp.SecurePasswordStoreAppUsers(
  id: str = None,
  password: str = None,
  username: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsers.property.id">id</a></code> | <code>str</code> | User ID. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsers.property.password">password</a></code> | <code>str</code> | Password for user application. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsers.property.username">username</a></code> | <code>str</code> | Username for user. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsers.property.id"></a>

```python
id: str
```

- *Type:* str

User ID.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#id SecurePasswordStoreApp#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsers.property.password"></a>

```python
password: str
```

- *Type:* str

Password for user application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#password SecurePasswordStoreApp#password}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsers.property.username"></a>

```python
username: str
```

- *Type:* str

Username for user.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/secure_password_store_app#username SecurePasswordStoreApp#username}

---

## Classes <a name="Classes" id="Classes"></a>

### SecurePasswordStoreAppTimeoutsOutputReference <a name="SecurePasswordStoreAppTimeoutsOutputReference" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import secure_password_store_app

securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeouts">SecurePasswordStoreAppTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[SecurePasswordStoreAppTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeouts">SecurePasswordStoreAppTimeouts</a>, cdktf.IResolvable]

---


### SecurePasswordStoreAppUsersList <a name="SecurePasswordStoreAppUsersList" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import secure_password_store_app

securePasswordStoreApp.SecurePasswordStoreAppUsersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SecurePasswordStoreAppUsersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsers">SecurePasswordStoreAppUsers</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SecurePasswordStoreAppUsers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsers">SecurePasswordStoreAppUsers</a>]]

---


### SecurePasswordStoreAppUsersOutputReference <a name="SecurePasswordStoreAppUsersOutputReference" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import secure_password_store_app

securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.resetUsername">reset_username</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_id` <a name="reset_id" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_password` <a name="reset_password" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_username` <a name="reset_username" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.resetUsername"></a>

```python
def reset_username() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.property.scope">scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsers">SecurePasswordStoreAppUsers</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[SecurePasswordStoreAppUsers, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsers">SecurePasswordStoreAppUsers</a>, cdktf.IResolvable]

---



