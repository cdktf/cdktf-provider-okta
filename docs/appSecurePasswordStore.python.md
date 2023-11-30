# `appSecurePasswordStore` Submodule <a name="`appSecurePasswordStore` Submodule" id="@cdktf/provider-okta.appSecurePasswordStore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppSecurePasswordStore <a name="AppSecurePasswordStore" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_secure_password_store okta_app_secure_password_store}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import app_secure_password_store

appSecurePasswordStore.AppSecurePasswordStore(
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
  status: str = None,
  timeouts: AppSecurePasswordStoreTimeouts = None,
  user_name_template: str = None,
  user_name_template_push_status: str = None,
  user_name_template_suffix: str = None,
  user_name_template_type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.Initializer.parameter.label">label</a></code> | <code>str</code> | Pretty name of app. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.Initializer.parameter.passwordField">password_field</a></code> | <code>str</code> | Login password field. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.Initializer.parameter.url">url</a></code> | <code>str</code> | Login URL. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.Initializer.parameter.usernameField">username_field</a></code> | <code>str</code> | Login username field. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.Initializer.parameter.accessibilityErrorRedirectUrl">accessibility_error_redirect_url</a></code> | <code>str</code> | Custom error page URL. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.Initializer.parameter.accessibilityLoginRedirectUrl">accessibility_login_redirect_url</a></code> | <code>str</code> | Custom login page URL. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.Initializer.parameter.accessibilitySelfService">accessibility_self_service</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable self service. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.Initializer.parameter.adminNote">admin_note</a></code> | <code>str</code> | Application notes for admins. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.Initializer.parameter.appLinksJson">app_links_json</a></code> | <code>str</code> | Displays specific appLinks for the app. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.Initializer.parameter.autoSubmitToolbar">auto_submit_toolbar</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Display auto submit toolbar. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.Initializer.parameter.credentialsScheme">credentials_scheme</a></code> | <code>str</code> | Application credentials scheme. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.Initializer.parameter.enduserNote">enduser_note</a></code> | <code>str</code> | Application notes for end users. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.Initializer.parameter.hideIos">hide_ios</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Do not display application icon on mobile app. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.Initializer.parameter.hideWeb">hide_web</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Do not display application icon to users. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_secure_password_store#id AppSecurePasswordStore#id}. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.Initializer.parameter.logo">logo</a></code> | <code>str</code> | Local path to logo of the application. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.Initializer.parameter.optionalField1">optional_field1</a></code> | <code>str</code> | Name of optional param in the login form. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.Initializer.parameter.optionalField1Value">optional_field1_value</a></code> | <code>str</code> | Name of optional value in login form. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.Initializer.parameter.optionalField2">optional_field2</a></code> | <code>str</code> | Name of optional param in the login form. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.Initializer.parameter.optionalField2Value">optional_field2_value</a></code> | <code>str</code> | Name of optional value in login form. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.Initializer.parameter.optionalField3">optional_field3</a></code> | <code>str</code> | Name of optional param in the login form. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.Initializer.parameter.optionalField3Value">optional_field3_value</a></code> | <code>str</code> | Name of optional value in login form. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.Initializer.parameter.revealPassword">reveal_password</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allow user to reveal password. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.Initializer.parameter.sharedPassword">shared_password</a></code> | <code>str</code> | Shared password, required for certain schemes. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.Initializer.parameter.sharedUsername">shared_username</a></code> | <code>str</code> | Shared username, required for certain schemes. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.Initializer.parameter.status">status</a></code> | <code>str</code> | Status of application. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeouts">AppSecurePasswordStoreTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.Initializer.parameter.userNameTemplate">user_name_template</a></code> | <code>str</code> | Username template. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.Initializer.parameter.userNameTemplatePushStatus">user_name_template_push_status</a></code> | <code>str</code> | Push username on update. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.Initializer.parameter.userNameTemplateSuffix">user_name_template_suffix</a></code> | <code>str</code> | Username template suffix. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.Initializer.parameter.userNameTemplateType">user_name_template_type</a></code> | <code>str</code> | Username template type. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.Initializer.parameter.label"></a>

- *Type:* str

Pretty name of app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_secure_password_store#label AppSecurePasswordStore#label}

---

##### `password_field`<sup>Required</sup> <a name="password_field" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.Initializer.parameter.passwordField"></a>

- *Type:* str

Login password field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_secure_password_store#password_field AppSecurePasswordStore#password_field}

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.Initializer.parameter.url"></a>

- *Type:* str

Login URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_secure_password_store#url AppSecurePasswordStore#url}

---

##### `username_field`<sup>Required</sup> <a name="username_field" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.Initializer.parameter.usernameField"></a>

- *Type:* str

Login username field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_secure_password_store#username_field AppSecurePasswordStore#username_field}

---

##### `accessibility_error_redirect_url`<sup>Optional</sup> <a name="accessibility_error_redirect_url" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.Initializer.parameter.accessibilityErrorRedirectUrl"></a>

- *Type:* str

Custom error page URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_secure_password_store#accessibility_error_redirect_url AppSecurePasswordStore#accessibility_error_redirect_url}

---

##### `accessibility_login_redirect_url`<sup>Optional</sup> <a name="accessibility_login_redirect_url" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.Initializer.parameter.accessibilityLoginRedirectUrl"></a>

- *Type:* str

Custom login page URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_secure_password_store#accessibility_login_redirect_url AppSecurePasswordStore#accessibility_login_redirect_url}

---

##### `accessibility_self_service`<sup>Optional</sup> <a name="accessibility_self_service" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.Initializer.parameter.accessibilitySelfService"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable self service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_secure_password_store#accessibility_self_service AppSecurePasswordStore#accessibility_self_service}

---

##### `admin_note`<sup>Optional</sup> <a name="admin_note" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.Initializer.parameter.adminNote"></a>

- *Type:* str

Application notes for admins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_secure_password_store#admin_note AppSecurePasswordStore#admin_note}

---

##### `app_links_json`<sup>Optional</sup> <a name="app_links_json" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.Initializer.parameter.appLinksJson"></a>

- *Type:* str

Displays specific appLinks for the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_secure_password_store#app_links_json AppSecurePasswordStore#app_links_json}

---

##### `auto_submit_toolbar`<sup>Optional</sup> <a name="auto_submit_toolbar" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.Initializer.parameter.autoSubmitToolbar"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Display auto submit toolbar.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_secure_password_store#auto_submit_toolbar AppSecurePasswordStore#auto_submit_toolbar}

---

##### `credentials_scheme`<sup>Optional</sup> <a name="credentials_scheme" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.Initializer.parameter.credentialsScheme"></a>

- *Type:* str

Application credentials scheme.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_secure_password_store#credentials_scheme AppSecurePasswordStore#credentials_scheme}

---

##### `enduser_note`<sup>Optional</sup> <a name="enduser_note" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.Initializer.parameter.enduserNote"></a>

- *Type:* str

Application notes for end users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_secure_password_store#enduser_note AppSecurePasswordStore#enduser_note}

---

##### `hide_ios`<sup>Optional</sup> <a name="hide_ios" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.Initializer.parameter.hideIos"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Do not display application icon on mobile app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_secure_password_store#hide_ios AppSecurePasswordStore#hide_ios}

---

##### `hide_web`<sup>Optional</sup> <a name="hide_web" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.Initializer.parameter.hideWeb"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Do not display application icon to users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_secure_password_store#hide_web AppSecurePasswordStore#hide_web}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_secure_password_store#id AppSecurePasswordStore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logo`<sup>Optional</sup> <a name="logo" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.Initializer.parameter.logo"></a>

- *Type:* str

Local path to logo of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_secure_password_store#logo AppSecurePasswordStore#logo}

---

##### `optional_field1`<sup>Optional</sup> <a name="optional_field1" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.Initializer.parameter.optionalField1"></a>

- *Type:* str

Name of optional param in the login form.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_secure_password_store#optional_field1 AppSecurePasswordStore#optional_field1}

---

##### `optional_field1_value`<sup>Optional</sup> <a name="optional_field1_value" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.Initializer.parameter.optionalField1Value"></a>

- *Type:* str

Name of optional value in login form.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_secure_password_store#optional_field1_value AppSecurePasswordStore#optional_field1_value}

---

##### `optional_field2`<sup>Optional</sup> <a name="optional_field2" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.Initializer.parameter.optionalField2"></a>

- *Type:* str

Name of optional param in the login form.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_secure_password_store#optional_field2 AppSecurePasswordStore#optional_field2}

---

##### `optional_field2_value`<sup>Optional</sup> <a name="optional_field2_value" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.Initializer.parameter.optionalField2Value"></a>

- *Type:* str

Name of optional value in login form.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_secure_password_store#optional_field2_value AppSecurePasswordStore#optional_field2_value}

---

##### `optional_field3`<sup>Optional</sup> <a name="optional_field3" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.Initializer.parameter.optionalField3"></a>

- *Type:* str

Name of optional param in the login form.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_secure_password_store#optional_field3 AppSecurePasswordStore#optional_field3}

---

##### `optional_field3_value`<sup>Optional</sup> <a name="optional_field3_value" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.Initializer.parameter.optionalField3Value"></a>

- *Type:* str

Name of optional value in login form.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_secure_password_store#optional_field3_value AppSecurePasswordStore#optional_field3_value}

---

##### `reveal_password`<sup>Optional</sup> <a name="reveal_password" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.Initializer.parameter.revealPassword"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow user to reveal password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_secure_password_store#reveal_password AppSecurePasswordStore#reveal_password}

---

##### `shared_password`<sup>Optional</sup> <a name="shared_password" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.Initializer.parameter.sharedPassword"></a>

- *Type:* str

Shared password, required for certain schemes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_secure_password_store#shared_password AppSecurePasswordStore#shared_password}

---

##### `shared_username`<sup>Optional</sup> <a name="shared_username" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.Initializer.parameter.sharedUsername"></a>

- *Type:* str

Shared username, required for certain schemes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_secure_password_store#shared_username AppSecurePasswordStore#shared_username}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.Initializer.parameter.status"></a>

- *Type:* str

Status of application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_secure_password_store#status AppSecurePasswordStore#status}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeouts">AppSecurePasswordStoreTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_secure_password_store#timeouts AppSecurePasswordStore#timeouts}

---

##### `user_name_template`<sup>Optional</sup> <a name="user_name_template" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.Initializer.parameter.userNameTemplate"></a>

- *Type:* str

Username template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_secure_password_store#user_name_template AppSecurePasswordStore#user_name_template}

---

##### `user_name_template_push_status`<sup>Optional</sup> <a name="user_name_template_push_status" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.Initializer.parameter.userNameTemplatePushStatus"></a>

- *Type:* str

Push username on update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_secure_password_store#user_name_template_push_status AppSecurePasswordStore#user_name_template_push_status}

---

##### `user_name_template_suffix`<sup>Optional</sup> <a name="user_name_template_suffix" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.Initializer.parameter.userNameTemplateSuffix"></a>

- *Type:* str

Username template suffix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_secure_password_store#user_name_template_suffix AppSecurePasswordStore#user_name_template_suffix}

---

##### `user_name_template_type`<sup>Optional</sup> <a name="user_name_template_type" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.Initializer.parameter.userNameTemplateType"></a>

- *Type:* str

Username template type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_secure_password_store#user_name_template_type AppSecurePasswordStore#user_name_template_type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetAccessibilityErrorRedirectUrl">reset_accessibility_error_redirect_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetAccessibilityLoginRedirectUrl">reset_accessibility_login_redirect_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetAccessibilitySelfService">reset_accessibility_self_service</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetAdminNote">reset_admin_note</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetAppLinksJson">reset_app_links_json</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetAutoSubmitToolbar">reset_auto_submit_toolbar</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetCredentialsScheme">reset_credentials_scheme</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetEnduserNote">reset_enduser_note</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetHideIos">reset_hide_ios</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetHideWeb">reset_hide_web</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetLogo">reset_logo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetOptionalField1">reset_optional_field1</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetOptionalField1Value">reset_optional_field1_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetOptionalField2">reset_optional_field2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetOptionalField2Value">reset_optional_field2_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetOptionalField3">reset_optional_field3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetOptionalField3Value">reset_optional_field3_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetRevealPassword">reset_reveal_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetSharedPassword">reset_shared_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetSharedUsername">reset_shared_username</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetUserNameTemplate">reset_user_name_template</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetUserNameTemplatePushStatus">reset_user_name_template_push_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetUserNameTemplateSuffix">reset_user_name_template_suffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetUserNameTemplateType">reset_user_name_template_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `import_from` <a name="import_from" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_to` <a name="move_to" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_secure_password_store#create AppSecurePasswordStore#create}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_secure_password_store#read AppSecurePasswordStore#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_secure_password_store#update AppSecurePasswordStore#update}.

---

##### `reset_accessibility_error_redirect_url` <a name="reset_accessibility_error_redirect_url" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetAccessibilityErrorRedirectUrl"></a>

```python
def reset_accessibility_error_redirect_url() -> None
```

##### `reset_accessibility_login_redirect_url` <a name="reset_accessibility_login_redirect_url" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetAccessibilityLoginRedirectUrl"></a>

```python
def reset_accessibility_login_redirect_url() -> None
```

##### `reset_accessibility_self_service` <a name="reset_accessibility_self_service" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetAccessibilitySelfService"></a>

```python
def reset_accessibility_self_service() -> None
```

##### `reset_admin_note` <a name="reset_admin_note" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetAdminNote"></a>

```python
def reset_admin_note() -> None
```

##### `reset_app_links_json` <a name="reset_app_links_json" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetAppLinksJson"></a>

```python
def reset_app_links_json() -> None
```

##### `reset_auto_submit_toolbar` <a name="reset_auto_submit_toolbar" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetAutoSubmitToolbar"></a>

```python
def reset_auto_submit_toolbar() -> None
```

##### `reset_credentials_scheme` <a name="reset_credentials_scheme" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetCredentialsScheme"></a>

```python
def reset_credentials_scheme() -> None
```

##### `reset_enduser_note` <a name="reset_enduser_note" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetEnduserNote"></a>

```python
def reset_enduser_note() -> None
```

##### `reset_hide_ios` <a name="reset_hide_ios" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetHideIos"></a>

```python
def reset_hide_ios() -> None
```

##### `reset_hide_web` <a name="reset_hide_web" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetHideWeb"></a>

```python
def reset_hide_web() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_logo` <a name="reset_logo" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetLogo"></a>

```python
def reset_logo() -> None
```

##### `reset_optional_field1` <a name="reset_optional_field1" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetOptionalField1"></a>

```python
def reset_optional_field1() -> None
```

##### `reset_optional_field1_value` <a name="reset_optional_field1_value" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetOptionalField1Value"></a>

```python
def reset_optional_field1_value() -> None
```

##### `reset_optional_field2` <a name="reset_optional_field2" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetOptionalField2"></a>

```python
def reset_optional_field2() -> None
```

##### `reset_optional_field2_value` <a name="reset_optional_field2_value" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetOptionalField2Value"></a>

```python
def reset_optional_field2_value() -> None
```

##### `reset_optional_field3` <a name="reset_optional_field3" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetOptionalField3"></a>

```python
def reset_optional_field3() -> None
```

##### `reset_optional_field3_value` <a name="reset_optional_field3_value" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetOptionalField3Value"></a>

```python
def reset_optional_field3_value() -> None
```

##### `reset_reveal_password` <a name="reset_reveal_password" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetRevealPassword"></a>

```python
def reset_reveal_password() -> None
```

##### `reset_shared_password` <a name="reset_shared_password" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetSharedPassword"></a>

```python
def reset_shared_password() -> None
```

##### `reset_shared_username` <a name="reset_shared_username" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetSharedUsername"></a>

```python
def reset_shared_username() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_user_name_template` <a name="reset_user_name_template" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetUserNameTemplate"></a>

```python
def reset_user_name_template() -> None
```

##### `reset_user_name_template_push_status` <a name="reset_user_name_template_push_status" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetUserNameTemplatePushStatus"></a>

```python
def reset_user_name_template_push_status() -> None
```

##### `reset_user_name_template_suffix` <a name="reset_user_name_template_suffix" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetUserNameTemplateSuffix"></a>

```python
def reset_user_name_template_suffix() -> None
```

##### `reset_user_name_template_type` <a name="reset_user_name_template_type" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.resetUserNameTemplateType"></a>

```python
def reset_user_name_template_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AppSecurePasswordStore resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.isConstruct"></a>

```python
from cdktf_cdktf_provider_okta import app_secure_password_store

appSecurePasswordStore.AppSecurePasswordStore.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_okta import app_secure_password_store

appSecurePasswordStore.AppSecurePasswordStore.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_okta import app_secure_password_store

appSecurePasswordStore.AppSecurePasswordStore.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_okta import app_secure_password_store

appSecurePasswordStore.AppSecurePasswordStore.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AppSecurePasswordStore resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AppSecurePasswordStore to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AppSecurePasswordStore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_secure_password_store#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AppSecurePasswordStore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.logoUrl">logo_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.signOnMode">sign_on_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference">AppSecurePasswordStoreTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.accessibilityErrorRedirectUrlInput">accessibility_error_redirect_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.accessibilityLoginRedirectUrlInput">accessibility_login_redirect_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.accessibilitySelfServiceInput">accessibility_self_service_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.adminNoteInput">admin_note_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.appLinksJsonInput">app_links_json_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.autoSubmitToolbarInput">auto_submit_toolbar_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.credentialsSchemeInput">credentials_scheme_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.enduserNoteInput">enduser_note_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.hideIosInput">hide_ios_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.hideWebInput">hide_web_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.labelInput">label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.logoInput">logo_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.optionalField1Input">optional_field1_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.optionalField1ValueInput">optional_field1_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.optionalField2Input">optional_field2_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.optionalField2ValueInput">optional_field2_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.optionalField3Input">optional_field3_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.optionalField3ValueInput">optional_field3_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.passwordFieldInput">password_field_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.revealPasswordInput">reveal_password_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.sharedPasswordInput">shared_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.sharedUsernameInput">shared_username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeouts">AppSecurePasswordStoreTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.usernameFieldInput">username_field_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.userNameTemplateInput">user_name_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.userNameTemplatePushStatusInput">user_name_template_push_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.userNameTemplateSuffixInput">user_name_template_suffix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.userNameTemplateTypeInput">user_name_template_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.accessibilityErrorRedirectUrl">accessibility_error_redirect_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.accessibilityLoginRedirectUrl">accessibility_login_redirect_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.accessibilitySelfService">accessibility_self_service</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.adminNote">admin_note</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.appLinksJson">app_links_json</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.autoSubmitToolbar">auto_submit_toolbar</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.credentialsScheme">credentials_scheme</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.enduserNote">enduser_note</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.hideIos">hide_ios</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.hideWeb">hide_web</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.label">label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.logo">logo</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.optionalField1">optional_field1</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.optionalField1Value">optional_field1_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.optionalField2">optional_field2</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.optionalField2Value">optional_field2_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.optionalField3">optional_field3</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.optionalField3Value">optional_field3_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.passwordField">password_field</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.revealPassword">reveal_password</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.sharedPassword">shared_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.sharedUsername">shared_username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.usernameField">username_field</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.userNameTemplate">user_name_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.userNameTemplatePushStatus">user_name_template_push_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.userNameTemplateSuffix">user_name_template_suffix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.userNameTemplateType">user_name_template_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `logo_url`<sup>Required</sup> <a name="logo_url" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.logoUrl"></a>

```python
logo_url: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `sign_on_mode`<sup>Required</sup> <a name="sign_on_mode" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.signOnMode"></a>

```python
sign_on_mode: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.timeouts"></a>

```python
timeouts: AppSecurePasswordStoreTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference">AppSecurePasswordStoreTimeoutsOutputReference</a>

---

##### `accessibility_error_redirect_url_input`<sup>Optional</sup> <a name="accessibility_error_redirect_url_input" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.accessibilityErrorRedirectUrlInput"></a>

```python
accessibility_error_redirect_url_input: str
```

- *Type:* str

---

##### `accessibility_login_redirect_url_input`<sup>Optional</sup> <a name="accessibility_login_redirect_url_input" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.accessibilityLoginRedirectUrlInput"></a>

```python
accessibility_login_redirect_url_input: str
```

- *Type:* str

---

##### `accessibility_self_service_input`<sup>Optional</sup> <a name="accessibility_self_service_input" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.accessibilitySelfServiceInput"></a>

```python
accessibility_self_service_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `admin_note_input`<sup>Optional</sup> <a name="admin_note_input" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.adminNoteInput"></a>

```python
admin_note_input: str
```

- *Type:* str

---

##### `app_links_json_input`<sup>Optional</sup> <a name="app_links_json_input" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.appLinksJsonInput"></a>

```python
app_links_json_input: str
```

- *Type:* str

---

##### `auto_submit_toolbar_input`<sup>Optional</sup> <a name="auto_submit_toolbar_input" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.autoSubmitToolbarInput"></a>

```python
auto_submit_toolbar_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `credentials_scheme_input`<sup>Optional</sup> <a name="credentials_scheme_input" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.credentialsSchemeInput"></a>

```python
credentials_scheme_input: str
```

- *Type:* str

---

##### `enduser_note_input`<sup>Optional</sup> <a name="enduser_note_input" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.enduserNoteInput"></a>

```python
enduser_note_input: str
```

- *Type:* str

---

##### `hide_ios_input`<sup>Optional</sup> <a name="hide_ios_input" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.hideIosInput"></a>

```python
hide_ios_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `hide_web_input`<sup>Optional</sup> <a name="hide_web_input" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.hideWebInput"></a>

```python
hide_web_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `label_input`<sup>Optional</sup> <a name="label_input" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.labelInput"></a>

```python
label_input: str
```

- *Type:* str

---

##### `logo_input`<sup>Optional</sup> <a name="logo_input" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.logoInput"></a>

```python
logo_input: str
```

- *Type:* str

---

##### `optional_field1_input`<sup>Optional</sup> <a name="optional_field1_input" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.optionalField1Input"></a>

```python
optional_field1_input: str
```

- *Type:* str

---

##### `optional_field1_value_input`<sup>Optional</sup> <a name="optional_field1_value_input" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.optionalField1ValueInput"></a>

```python
optional_field1_value_input: str
```

- *Type:* str

---

##### `optional_field2_input`<sup>Optional</sup> <a name="optional_field2_input" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.optionalField2Input"></a>

```python
optional_field2_input: str
```

- *Type:* str

---

##### `optional_field2_value_input`<sup>Optional</sup> <a name="optional_field2_value_input" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.optionalField2ValueInput"></a>

```python
optional_field2_value_input: str
```

- *Type:* str

---

##### `optional_field3_input`<sup>Optional</sup> <a name="optional_field3_input" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.optionalField3Input"></a>

```python
optional_field3_input: str
```

- *Type:* str

---

##### `optional_field3_value_input`<sup>Optional</sup> <a name="optional_field3_value_input" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.optionalField3ValueInput"></a>

```python
optional_field3_value_input: str
```

- *Type:* str

---

##### `password_field_input`<sup>Optional</sup> <a name="password_field_input" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.passwordFieldInput"></a>

```python
password_field_input: str
```

- *Type:* str

---

##### `reveal_password_input`<sup>Optional</sup> <a name="reveal_password_input" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.revealPasswordInput"></a>

```python
reveal_password_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `shared_password_input`<sup>Optional</sup> <a name="shared_password_input" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.sharedPasswordInput"></a>

```python
shared_password_input: str
```

- *Type:* str

---

##### `shared_username_input`<sup>Optional</sup> <a name="shared_username_input" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.sharedUsernameInput"></a>

```python
shared_username_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, AppSecurePasswordStoreTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeouts">AppSecurePasswordStoreTimeouts</a>]

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `username_field_input`<sup>Optional</sup> <a name="username_field_input" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.usernameFieldInput"></a>

```python
username_field_input: str
```

- *Type:* str

---

##### `user_name_template_input`<sup>Optional</sup> <a name="user_name_template_input" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.userNameTemplateInput"></a>

```python
user_name_template_input: str
```

- *Type:* str

---

##### `user_name_template_push_status_input`<sup>Optional</sup> <a name="user_name_template_push_status_input" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.userNameTemplatePushStatusInput"></a>

```python
user_name_template_push_status_input: str
```

- *Type:* str

---

##### `user_name_template_suffix_input`<sup>Optional</sup> <a name="user_name_template_suffix_input" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.userNameTemplateSuffixInput"></a>

```python
user_name_template_suffix_input: str
```

- *Type:* str

---

##### `user_name_template_type_input`<sup>Optional</sup> <a name="user_name_template_type_input" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.userNameTemplateTypeInput"></a>

```python
user_name_template_type_input: str
```

- *Type:* str

---

##### `accessibility_error_redirect_url`<sup>Required</sup> <a name="accessibility_error_redirect_url" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.accessibilityErrorRedirectUrl"></a>

```python
accessibility_error_redirect_url: str
```

- *Type:* str

---

##### `accessibility_login_redirect_url`<sup>Required</sup> <a name="accessibility_login_redirect_url" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.accessibilityLoginRedirectUrl"></a>

```python
accessibility_login_redirect_url: str
```

- *Type:* str

---

##### `accessibility_self_service`<sup>Required</sup> <a name="accessibility_self_service" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.accessibilitySelfService"></a>

```python
accessibility_self_service: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `admin_note`<sup>Required</sup> <a name="admin_note" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.adminNote"></a>

```python
admin_note: str
```

- *Type:* str

---

##### `app_links_json`<sup>Required</sup> <a name="app_links_json" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.appLinksJson"></a>

```python
app_links_json: str
```

- *Type:* str

---

##### `auto_submit_toolbar`<sup>Required</sup> <a name="auto_submit_toolbar" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.autoSubmitToolbar"></a>

```python
auto_submit_toolbar: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `credentials_scheme`<sup>Required</sup> <a name="credentials_scheme" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.credentialsScheme"></a>

```python
credentials_scheme: str
```

- *Type:* str

---

##### `enduser_note`<sup>Required</sup> <a name="enduser_note" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.enduserNote"></a>

```python
enduser_note: str
```

- *Type:* str

---

##### `hide_ios`<sup>Required</sup> <a name="hide_ios" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.hideIos"></a>

```python
hide_ios: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `hide_web`<sup>Required</sup> <a name="hide_web" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.hideWeb"></a>

```python
hide_web: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.label"></a>

```python
label: str
```

- *Type:* str

---

##### `logo`<sup>Required</sup> <a name="logo" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.logo"></a>

```python
logo: str
```

- *Type:* str

---

##### `optional_field1`<sup>Required</sup> <a name="optional_field1" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.optionalField1"></a>

```python
optional_field1: str
```

- *Type:* str

---

##### `optional_field1_value`<sup>Required</sup> <a name="optional_field1_value" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.optionalField1Value"></a>

```python
optional_field1_value: str
```

- *Type:* str

---

##### `optional_field2`<sup>Required</sup> <a name="optional_field2" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.optionalField2"></a>

```python
optional_field2: str
```

- *Type:* str

---

##### `optional_field2_value`<sup>Required</sup> <a name="optional_field2_value" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.optionalField2Value"></a>

```python
optional_field2_value: str
```

- *Type:* str

---

##### `optional_field3`<sup>Required</sup> <a name="optional_field3" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.optionalField3"></a>

```python
optional_field3: str
```

- *Type:* str

---

##### `optional_field3_value`<sup>Required</sup> <a name="optional_field3_value" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.optionalField3Value"></a>

```python
optional_field3_value: str
```

- *Type:* str

---

##### `password_field`<sup>Required</sup> <a name="password_field" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.passwordField"></a>

```python
password_field: str
```

- *Type:* str

---

##### `reveal_password`<sup>Required</sup> <a name="reveal_password" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.revealPassword"></a>

```python
reveal_password: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `shared_password`<sup>Required</sup> <a name="shared_password" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.sharedPassword"></a>

```python
shared_password: str
```

- *Type:* str

---

##### `shared_username`<sup>Required</sup> <a name="shared_username" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.sharedUsername"></a>

```python
shared_username: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `username_field`<sup>Required</sup> <a name="username_field" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.usernameField"></a>

```python
username_field: str
```

- *Type:* str

---

##### `user_name_template`<sup>Required</sup> <a name="user_name_template" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.userNameTemplate"></a>

```python
user_name_template: str
```

- *Type:* str

---

##### `user_name_template_push_status`<sup>Required</sup> <a name="user_name_template_push_status" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.userNameTemplatePushStatus"></a>

```python
user_name_template_push_status: str
```

- *Type:* str

---

##### `user_name_template_suffix`<sup>Required</sup> <a name="user_name_template_suffix" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.userNameTemplateSuffix"></a>

```python
user_name_template_suffix: str
```

- *Type:* str

---

##### `user_name_template_type`<sup>Required</sup> <a name="user_name_template_type" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.userNameTemplateType"></a>

```python
user_name_template_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStore.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AppSecurePasswordStoreConfig <a name="AppSecurePasswordStoreConfig" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import app_secure_password_store

appSecurePasswordStore.AppSecurePasswordStoreConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
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
  status: str = None,
  timeouts: AppSecurePasswordStoreTimeouts = None,
  user_name_template: str = None,
  user_name_template_push_status: str = None,
  user_name_template_suffix: str = None,
  user_name_template_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.label">label</a></code> | <code>str</code> | Pretty name of app. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.passwordField">password_field</a></code> | <code>str</code> | Login password field. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.url">url</a></code> | <code>str</code> | Login URL. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.usernameField">username_field</a></code> | <code>str</code> | Login username field. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.accessibilityErrorRedirectUrl">accessibility_error_redirect_url</a></code> | <code>str</code> | Custom error page URL. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.accessibilityLoginRedirectUrl">accessibility_login_redirect_url</a></code> | <code>str</code> | Custom login page URL. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.accessibilitySelfService">accessibility_self_service</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable self service. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.adminNote">admin_note</a></code> | <code>str</code> | Application notes for admins. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.appLinksJson">app_links_json</a></code> | <code>str</code> | Displays specific appLinks for the app. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.autoSubmitToolbar">auto_submit_toolbar</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Display auto submit toolbar. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.credentialsScheme">credentials_scheme</a></code> | <code>str</code> | Application credentials scheme. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.enduserNote">enduser_note</a></code> | <code>str</code> | Application notes for end users. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.hideIos">hide_ios</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Do not display application icon on mobile app. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.hideWeb">hide_web</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Do not display application icon to users. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_secure_password_store#id AppSecurePasswordStore#id}. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.logo">logo</a></code> | <code>str</code> | Local path to logo of the application. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.optionalField1">optional_field1</a></code> | <code>str</code> | Name of optional param in the login form. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.optionalField1Value">optional_field1_value</a></code> | <code>str</code> | Name of optional value in login form. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.optionalField2">optional_field2</a></code> | <code>str</code> | Name of optional param in the login form. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.optionalField2Value">optional_field2_value</a></code> | <code>str</code> | Name of optional value in login form. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.optionalField3">optional_field3</a></code> | <code>str</code> | Name of optional param in the login form. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.optionalField3Value">optional_field3_value</a></code> | <code>str</code> | Name of optional value in login form. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.revealPassword">reveal_password</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allow user to reveal password. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.sharedPassword">shared_password</a></code> | <code>str</code> | Shared password, required for certain schemes. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.sharedUsername">shared_username</a></code> | <code>str</code> | Shared username, required for certain schemes. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.status">status</a></code> | <code>str</code> | Status of application. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeouts">AppSecurePasswordStoreTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.userNameTemplate">user_name_template</a></code> | <code>str</code> | Username template. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.userNameTemplatePushStatus">user_name_template_push_status</a></code> | <code>str</code> | Push username on update. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.userNameTemplateSuffix">user_name_template_suffix</a></code> | <code>str</code> | Username template suffix. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.userNameTemplateType">user_name_template_type</a></code> | <code>str</code> | Username template type. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.label"></a>

```python
label: str
```

- *Type:* str

Pretty name of app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_secure_password_store#label AppSecurePasswordStore#label}

---

##### `password_field`<sup>Required</sup> <a name="password_field" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.passwordField"></a>

```python
password_field: str
```

- *Type:* str

Login password field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_secure_password_store#password_field AppSecurePasswordStore#password_field}

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.url"></a>

```python
url: str
```

- *Type:* str

Login URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_secure_password_store#url AppSecurePasswordStore#url}

---

##### `username_field`<sup>Required</sup> <a name="username_field" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.usernameField"></a>

```python
username_field: str
```

- *Type:* str

Login username field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_secure_password_store#username_field AppSecurePasswordStore#username_field}

---

##### `accessibility_error_redirect_url`<sup>Optional</sup> <a name="accessibility_error_redirect_url" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.accessibilityErrorRedirectUrl"></a>

```python
accessibility_error_redirect_url: str
```

- *Type:* str

Custom error page URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_secure_password_store#accessibility_error_redirect_url AppSecurePasswordStore#accessibility_error_redirect_url}

---

##### `accessibility_login_redirect_url`<sup>Optional</sup> <a name="accessibility_login_redirect_url" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.accessibilityLoginRedirectUrl"></a>

```python
accessibility_login_redirect_url: str
```

- *Type:* str

Custom login page URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_secure_password_store#accessibility_login_redirect_url AppSecurePasswordStore#accessibility_login_redirect_url}

---

##### `accessibility_self_service`<sup>Optional</sup> <a name="accessibility_self_service" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.accessibilitySelfService"></a>

```python
accessibility_self_service: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable self service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_secure_password_store#accessibility_self_service AppSecurePasswordStore#accessibility_self_service}

---

##### `admin_note`<sup>Optional</sup> <a name="admin_note" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.adminNote"></a>

```python
admin_note: str
```

- *Type:* str

Application notes for admins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_secure_password_store#admin_note AppSecurePasswordStore#admin_note}

---

##### `app_links_json`<sup>Optional</sup> <a name="app_links_json" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.appLinksJson"></a>

```python
app_links_json: str
```

- *Type:* str

Displays specific appLinks for the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_secure_password_store#app_links_json AppSecurePasswordStore#app_links_json}

---

##### `auto_submit_toolbar`<sup>Optional</sup> <a name="auto_submit_toolbar" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.autoSubmitToolbar"></a>

```python
auto_submit_toolbar: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Display auto submit toolbar.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_secure_password_store#auto_submit_toolbar AppSecurePasswordStore#auto_submit_toolbar}

---

##### `credentials_scheme`<sup>Optional</sup> <a name="credentials_scheme" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.credentialsScheme"></a>

```python
credentials_scheme: str
```

- *Type:* str

Application credentials scheme.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_secure_password_store#credentials_scheme AppSecurePasswordStore#credentials_scheme}

---

##### `enduser_note`<sup>Optional</sup> <a name="enduser_note" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.enduserNote"></a>

```python
enduser_note: str
```

- *Type:* str

Application notes for end users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_secure_password_store#enduser_note AppSecurePasswordStore#enduser_note}

---

##### `hide_ios`<sup>Optional</sup> <a name="hide_ios" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.hideIos"></a>

```python
hide_ios: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Do not display application icon on mobile app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_secure_password_store#hide_ios AppSecurePasswordStore#hide_ios}

---

##### `hide_web`<sup>Optional</sup> <a name="hide_web" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.hideWeb"></a>

```python
hide_web: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Do not display application icon to users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_secure_password_store#hide_web AppSecurePasswordStore#hide_web}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_secure_password_store#id AppSecurePasswordStore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logo`<sup>Optional</sup> <a name="logo" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.logo"></a>

```python
logo: str
```

- *Type:* str

Local path to logo of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_secure_password_store#logo AppSecurePasswordStore#logo}

---

##### `optional_field1`<sup>Optional</sup> <a name="optional_field1" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.optionalField1"></a>

```python
optional_field1: str
```

- *Type:* str

Name of optional param in the login form.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_secure_password_store#optional_field1 AppSecurePasswordStore#optional_field1}

---

##### `optional_field1_value`<sup>Optional</sup> <a name="optional_field1_value" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.optionalField1Value"></a>

```python
optional_field1_value: str
```

- *Type:* str

Name of optional value in login form.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_secure_password_store#optional_field1_value AppSecurePasswordStore#optional_field1_value}

---

##### `optional_field2`<sup>Optional</sup> <a name="optional_field2" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.optionalField2"></a>

```python
optional_field2: str
```

- *Type:* str

Name of optional param in the login form.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_secure_password_store#optional_field2 AppSecurePasswordStore#optional_field2}

---

##### `optional_field2_value`<sup>Optional</sup> <a name="optional_field2_value" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.optionalField2Value"></a>

```python
optional_field2_value: str
```

- *Type:* str

Name of optional value in login form.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_secure_password_store#optional_field2_value AppSecurePasswordStore#optional_field2_value}

---

##### `optional_field3`<sup>Optional</sup> <a name="optional_field3" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.optionalField3"></a>

```python
optional_field3: str
```

- *Type:* str

Name of optional param in the login form.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_secure_password_store#optional_field3 AppSecurePasswordStore#optional_field3}

---

##### `optional_field3_value`<sup>Optional</sup> <a name="optional_field3_value" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.optionalField3Value"></a>

```python
optional_field3_value: str
```

- *Type:* str

Name of optional value in login form.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_secure_password_store#optional_field3_value AppSecurePasswordStore#optional_field3_value}

---

##### `reveal_password`<sup>Optional</sup> <a name="reveal_password" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.revealPassword"></a>

```python
reveal_password: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow user to reveal password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_secure_password_store#reveal_password AppSecurePasswordStore#reveal_password}

---

##### `shared_password`<sup>Optional</sup> <a name="shared_password" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.sharedPassword"></a>

```python
shared_password: str
```

- *Type:* str

Shared password, required for certain schemes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_secure_password_store#shared_password AppSecurePasswordStore#shared_password}

---

##### `shared_username`<sup>Optional</sup> <a name="shared_username" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.sharedUsername"></a>

```python
shared_username: str
```

- *Type:* str

Shared username, required for certain schemes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_secure_password_store#shared_username AppSecurePasswordStore#shared_username}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.status"></a>

```python
status: str
```

- *Type:* str

Status of application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_secure_password_store#status AppSecurePasswordStore#status}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.timeouts"></a>

```python
timeouts: AppSecurePasswordStoreTimeouts
```

- *Type:* <a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeouts">AppSecurePasswordStoreTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_secure_password_store#timeouts AppSecurePasswordStore#timeouts}

---

##### `user_name_template`<sup>Optional</sup> <a name="user_name_template" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.userNameTemplate"></a>

```python
user_name_template: str
```

- *Type:* str

Username template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_secure_password_store#user_name_template AppSecurePasswordStore#user_name_template}

---

##### `user_name_template_push_status`<sup>Optional</sup> <a name="user_name_template_push_status" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.userNameTemplatePushStatus"></a>

```python
user_name_template_push_status: str
```

- *Type:* str

Push username on update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_secure_password_store#user_name_template_push_status AppSecurePasswordStore#user_name_template_push_status}

---

##### `user_name_template_suffix`<sup>Optional</sup> <a name="user_name_template_suffix" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.userNameTemplateSuffix"></a>

```python
user_name_template_suffix: str
```

- *Type:* str

Username template suffix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_secure_password_store#user_name_template_suffix AppSecurePasswordStore#user_name_template_suffix}

---

##### `user_name_template_type`<sup>Optional</sup> <a name="user_name_template_type" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreConfig.property.userNameTemplateType"></a>

```python
user_name_template_type: str
```

- *Type:* str

Username template type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_secure_password_store#user_name_template_type AppSecurePasswordStore#user_name_template_type}

---

### AppSecurePasswordStoreTimeouts <a name="AppSecurePasswordStoreTimeouts" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import app_secure_password_store

appSecurePasswordStore.AppSecurePasswordStoreTimeouts(
  create: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_secure_password_store#create AppSecurePasswordStore#create}. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_secure_password_store#read AppSecurePasswordStore#read}. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_secure_password_store#update AppSecurePasswordStore#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_secure_password_store#create AppSecurePasswordStore#create}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_secure_password_store#read AppSecurePasswordStore#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/app_secure_password_store#update AppSecurePasswordStore#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppSecurePasswordStoreTimeoutsOutputReference <a name="AppSecurePasswordStoreTimeoutsOutputReference" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import app_secure_password_store

appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeouts">AppSecurePasswordStoreTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AppSecurePasswordStoreTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-okta.appSecurePasswordStore.AppSecurePasswordStoreTimeouts">AppSecurePasswordStoreTimeouts</a>]

---



