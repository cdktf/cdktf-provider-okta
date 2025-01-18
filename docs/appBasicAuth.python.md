# `appBasicAuth` Submodule <a name="`appBasicAuth` Submodule" id="@cdktf/provider-okta.appBasicAuth"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppBasicAuth <a name="AppBasicAuth" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_basic_auth okta_app_basic_auth}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import app_basic_auth

appBasicAuth.AppBasicAuth(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  auth_url: str,
  label: str,
  url: str,
  accessibility_error_redirect_url: str = None,
  accessibility_login_redirect_url: str = None,
  accessibility_self_service: typing.Union[bool, IResolvable] = None,
  admin_note: str = None,
  app_links_json: str = None,
  auto_submit_toolbar: typing.Union[bool, IResolvable] = None,
  enduser_note: str = None,
  hide_ios: typing.Union[bool, IResolvable] = None,
  hide_web: typing.Union[bool, IResolvable] = None,
  id: str = None,
  logo: str = None,
  status: str = None,
  timeouts: AppBasicAuthTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.Initializer.parameter.authUrl">auth_url</a></code> | <code>str</code> | The URL of the authenticating site for this app. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.Initializer.parameter.label">label</a></code> | <code>str</code> | The Application's display name. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.Initializer.parameter.url">url</a></code> | <code>str</code> | The URL of the sign-in page for this app. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.Initializer.parameter.accessibilityErrorRedirectUrl">accessibility_error_redirect_url</a></code> | <code>str</code> | Custom error page URL. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.Initializer.parameter.accessibilityLoginRedirectUrl">accessibility_login_redirect_url</a></code> | <code>str</code> | Custom login page URL. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.Initializer.parameter.accessibilitySelfService">accessibility_self_service</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable self service. Default is `false`. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.Initializer.parameter.adminNote">admin_note</a></code> | <code>str</code> | Application notes for admins. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.Initializer.parameter.appLinksJson">app_links_json</a></code> | <code>str</code> | Displays specific appLinks for the app. The value for each application link should be boolean. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.Initializer.parameter.autoSubmitToolbar">auto_submit_toolbar</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Display auto submit toolbar. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.Initializer.parameter.enduserNote">enduser_note</a></code> | <code>str</code> | Application notes for end users. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.Initializer.parameter.hideIos">hide_ios</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Do not display application icon on mobile app. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.Initializer.parameter.hideWeb">hide_web</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Do not display application icon to users. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_basic_auth#id AppBasicAuth#id}. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.Initializer.parameter.logo">logo</a></code> | <code>str</code> | Local file path to the logo. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.Initializer.parameter.status">status</a></code> | <code>str</code> | Status of application. By default, it is `ACTIVE`. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeouts">AppBasicAuthTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `auth_url`<sup>Required</sup> <a name="auth_url" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.Initializer.parameter.authUrl"></a>

- *Type:* str

The URL of the authenticating site for this app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_basic_auth#auth_url AppBasicAuth#auth_url}

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.Initializer.parameter.label"></a>

- *Type:* str

The Application's display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_basic_auth#label AppBasicAuth#label}

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.Initializer.parameter.url"></a>

- *Type:* str

The URL of the sign-in page for this app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_basic_auth#url AppBasicAuth#url}

---

##### `accessibility_error_redirect_url`<sup>Optional</sup> <a name="accessibility_error_redirect_url" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.Initializer.parameter.accessibilityErrorRedirectUrl"></a>

- *Type:* str

Custom error page URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_basic_auth#accessibility_error_redirect_url AppBasicAuth#accessibility_error_redirect_url}

---

##### `accessibility_login_redirect_url`<sup>Optional</sup> <a name="accessibility_login_redirect_url" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.Initializer.parameter.accessibilityLoginRedirectUrl"></a>

- *Type:* str

Custom login page URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_basic_auth#accessibility_login_redirect_url AppBasicAuth#accessibility_login_redirect_url}

---

##### `accessibility_self_service`<sup>Optional</sup> <a name="accessibility_self_service" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.Initializer.parameter.accessibilitySelfService"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable self service. Default is `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_basic_auth#accessibility_self_service AppBasicAuth#accessibility_self_service}

---

##### `admin_note`<sup>Optional</sup> <a name="admin_note" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.Initializer.parameter.adminNote"></a>

- *Type:* str

Application notes for admins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_basic_auth#admin_note AppBasicAuth#admin_note}

---

##### `app_links_json`<sup>Optional</sup> <a name="app_links_json" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.Initializer.parameter.appLinksJson"></a>

- *Type:* str

Displays specific appLinks for the app. The value for each application link should be boolean.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_basic_auth#app_links_json AppBasicAuth#app_links_json}

---

##### `auto_submit_toolbar`<sup>Optional</sup> <a name="auto_submit_toolbar" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.Initializer.parameter.autoSubmitToolbar"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Display auto submit toolbar.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_basic_auth#auto_submit_toolbar AppBasicAuth#auto_submit_toolbar}

---

##### `enduser_note`<sup>Optional</sup> <a name="enduser_note" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.Initializer.parameter.enduserNote"></a>

- *Type:* str

Application notes for end users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_basic_auth#enduser_note AppBasicAuth#enduser_note}

---

##### `hide_ios`<sup>Optional</sup> <a name="hide_ios" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.Initializer.parameter.hideIos"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Do not display application icon on mobile app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_basic_auth#hide_ios AppBasicAuth#hide_ios}

---

##### `hide_web`<sup>Optional</sup> <a name="hide_web" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.Initializer.parameter.hideWeb"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Do not display application icon to users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_basic_auth#hide_web AppBasicAuth#hide_web}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_basic_auth#id AppBasicAuth#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logo`<sup>Optional</sup> <a name="logo" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.Initializer.parameter.logo"></a>

- *Type:* str

Local file path to the logo.

The file must be in PNG, JPG, or GIF format, and less than 1 MB in size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_basic_auth#logo AppBasicAuth#logo}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.Initializer.parameter.status"></a>

- *Type:* str

Status of application. By default, it is `ACTIVE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_basic_auth#status AppBasicAuth#status}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeouts">AppBasicAuthTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_basic_auth#timeouts AppBasicAuth#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.resetAccessibilityErrorRedirectUrl">reset_accessibility_error_redirect_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.resetAccessibilityLoginRedirectUrl">reset_accessibility_login_redirect_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.resetAccessibilitySelfService">reset_accessibility_self_service</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.resetAdminNote">reset_admin_note</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.resetAppLinksJson">reset_app_links_json</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.resetAutoSubmitToolbar">reset_auto_submit_toolbar</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.resetEnduserNote">reset_enduser_note</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.resetHideIos">reset_hide_ios</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.resetHideWeb">reset_hide_web</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.resetLogo">reset_logo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_basic_auth#create AppBasicAuth#create}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_basic_auth#read AppBasicAuth#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_basic_auth#update AppBasicAuth#update}.

---

##### `reset_accessibility_error_redirect_url` <a name="reset_accessibility_error_redirect_url" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.resetAccessibilityErrorRedirectUrl"></a>

```python
def reset_accessibility_error_redirect_url() -> None
```

##### `reset_accessibility_login_redirect_url` <a name="reset_accessibility_login_redirect_url" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.resetAccessibilityLoginRedirectUrl"></a>

```python
def reset_accessibility_login_redirect_url() -> None
```

##### `reset_accessibility_self_service` <a name="reset_accessibility_self_service" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.resetAccessibilitySelfService"></a>

```python
def reset_accessibility_self_service() -> None
```

##### `reset_admin_note` <a name="reset_admin_note" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.resetAdminNote"></a>

```python
def reset_admin_note() -> None
```

##### `reset_app_links_json` <a name="reset_app_links_json" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.resetAppLinksJson"></a>

```python
def reset_app_links_json() -> None
```

##### `reset_auto_submit_toolbar` <a name="reset_auto_submit_toolbar" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.resetAutoSubmitToolbar"></a>

```python
def reset_auto_submit_toolbar() -> None
```

##### `reset_enduser_note` <a name="reset_enduser_note" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.resetEnduserNote"></a>

```python
def reset_enduser_note() -> None
```

##### `reset_hide_ios` <a name="reset_hide_ios" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.resetHideIos"></a>

```python
def reset_hide_ios() -> None
```

##### `reset_hide_web` <a name="reset_hide_web" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.resetHideWeb"></a>

```python
def reset_hide_web() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_logo` <a name="reset_logo" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.resetLogo"></a>

```python
def reset_logo() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AppBasicAuth resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.isConstruct"></a>

```python
from cdktf_cdktf_provider_okta import app_basic_auth

appBasicAuth.AppBasicAuth.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_okta import app_basic_auth

appBasicAuth.AppBasicAuth.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_okta import app_basic_auth

appBasicAuth.AppBasicAuth.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_okta import app_basic_auth

appBasicAuth.AppBasicAuth.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AppBasicAuth resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AppBasicAuth to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AppBasicAuth that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_basic_auth#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AppBasicAuth to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.logoUrl">logo_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.signOnMode">sign_on_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference">AppBasicAuthTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.accessibilityErrorRedirectUrlInput">accessibility_error_redirect_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.accessibilityLoginRedirectUrlInput">accessibility_login_redirect_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.accessibilitySelfServiceInput">accessibility_self_service_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.adminNoteInput">admin_note_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.appLinksJsonInput">app_links_json_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.authUrlInput">auth_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.autoSubmitToolbarInput">auto_submit_toolbar_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.enduserNoteInput">enduser_note_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.hideIosInput">hide_ios_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.hideWebInput">hide_web_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.labelInput">label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.logoInput">logo_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeouts">AppBasicAuthTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.accessibilityErrorRedirectUrl">accessibility_error_redirect_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.accessibilityLoginRedirectUrl">accessibility_login_redirect_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.accessibilitySelfService">accessibility_self_service</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.adminNote">admin_note</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.appLinksJson">app_links_json</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.authUrl">auth_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.autoSubmitToolbar">auto_submit_toolbar</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.enduserNote">enduser_note</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.hideIos">hide_ios</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.hideWeb">hide_web</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.label">label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.logo">logo</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.url">url</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `logo_url`<sup>Required</sup> <a name="logo_url" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.logoUrl"></a>

```python
logo_url: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `sign_on_mode`<sup>Required</sup> <a name="sign_on_mode" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.signOnMode"></a>

```python
sign_on_mode: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.timeouts"></a>

```python
timeouts: AppBasicAuthTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference">AppBasicAuthTimeoutsOutputReference</a>

---

##### `accessibility_error_redirect_url_input`<sup>Optional</sup> <a name="accessibility_error_redirect_url_input" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.accessibilityErrorRedirectUrlInput"></a>

```python
accessibility_error_redirect_url_input: str
```

- *Type:* str

---

##### `accessibility_login_redirect_url_input`<sup>Optional</sup> <a name="accessibility_login_redirect_url_input" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.accessibilityLoginRedirectUrlInput"></a>

```python
accessibility_login_redirect_url_input: str
```

- *Type:* str

---

##### `accessibility_self_service_input`<sup>Optional</sup> <a name="accessibility_self_service_input" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.accessibilitySelfServiceInput"></a>

```python
accessibility_self_service_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `admin_note_input`<sup>Optional</sup> <a name="admin_note_input" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.adminNoteInput"></a>

```python
admin_note_input: str
```

- *Type:* str

---

##### `app_links_json_input`<sup>Optional</sup> <a name="app_links_json_input" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.appLinksJsonInput"></a>

```python
app_links_json_input: str
```

- *Type:* str

---

##### `auth_url_input`<sup>Optional</sup> <a name="auth_url_input" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.authUrlInput"></a>

```python
auth_url_input: str
```

- *Type:* str

---

##### `auto_submit_toolbar_input`<sup>Optional</sup> <a name="auto_submit_toolbar_input" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.autoSubmitToolbarInput"></a>

```python
auto_submit_toolbar_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enduser_note_input`<sup>Optional</sup> <a name="enduser_note_input" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.enduserNoteInput"></a>

```python
enduser_note_input: str
```

- *Type:* str

---

##### `hide_ios_input`<sup>Optional</sup> <a name="hide_ios_input" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.hideIosInput"></a>

```python
hide_ios_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `hide_web_input`<sup>Optional</sup> <a name="hide_web_input" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.hideWebInput"></a>

```python
hide_web_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `label_input`<sup>Optional</sup> <a name="label_input" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.labelInput"></a>

```python
label_input: str
```

- *Type:* str

---

##### `logo_input`<sup>Optional</sup> <a name="logo_input" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.logoInput"></a>

```python
logo_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, AppBasicAuthTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeouts">AppBasicAuthTimeouts</a>]

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `accessibility_error_redirect_url`<sup>Required</sup> <a name="accessibility_error_redirect_url" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.accessibilityErrorRedirectUrl"></a>

```python
accessibility_error_redirect_url: str
```

- *Type:* str

---

##### `accessibility_login_redirect_url`<sup>Required</sup> <a name="accessibility_login_redirect_url" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.accessibilityLoginRedirectUrl"></a>

```python
accessibility_login_redirect_url: str
```

- *Type:* str

---

##### `accessibility_self_service`<sup>Required</sup> <a name="accessibility_self_service" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.accessibilitySelfService"></a>

```python
accessibility_self_service: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `admin_note`<sup>Required</sup> <a name="admin_note" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.adminNote"></a>

```python
admin_note: str
```

- *Type:* str

---

##### `app_links_json`<sup>Required</sup> <a name="app_links_json" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.appLinksJson"></a>

```python
app_links_json: str
```

- *Type:* str

---

##### `auth_url`<sup>Required</sup> <a name="auth_url" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.authUrl"></a>

```python
auth_url: str
```

- *Type:* str

---

##### `auto_submit_toolbar`<sup>Required</sup> <a name="auto_submit_toolbar" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.autoSubmitToolbar"></a>

```python
auto_submit_toolbar: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enduser_note`<sup>Required</sup> <a name="enduser_note" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.enduserNote"></a>

```python
enduser_note: str
```

- *Type:* str

---

##### `hide_ios`<sup>Required</sup> <a name="hide_ios" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.hideIos"></a>

```python
hide_ios: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `hide_web`<sup>Required</sup> <a name="hide_web" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.hideWeb"></a>

```python
hide_web: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.label"></a>

```python
label: str
```

- *Type:* str

---

##### `logo`<sup>Required</sup> <a name="logo" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.logo"></a>

```python
logo: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.url"></a>

```python
url: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AppBasicAuthConfig <a name="AppBasicAuthConfig" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import app_basic_auth

appBasicAuth.AppBasicAuthConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  auth_url: str,
  label: str,
  url: str,
  accessibility_error_redirect_url: str = None,
  accessibility_login_redirect_url: str = None,
  accessibility_self_service: typing.Union[bool, IResolvable] = None,
  admin_note: str = None,
  app_links_json: str = None,
  auto_submit_toolbar: typing.Union[bool, IResolvable] = None,
  enduser_note: str = None,
  hide_ios: typing.Union[bool, IResolvable] = None,
  hide_web: typing.Union[bool, IResolvable] = None,
  id: str = None,
  logo: str = None,
  status: str = None,
  timeouts: AppBasicAuthTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.authUrl">auth_url</a></code> | <code>str</code> | The URL of the authenticating site for this app. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.label">label</a></code> | <code>str</code> | The Application's display name. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.url">url</a></code> | <code>str</code> | The URL of the sign-in page for this app. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.accessibilityErrorRedirectUrl">accessibility_error_redirect_url</a></code> | <code>str</code> | Custom error page URL. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.accessibilityLoginRedirectUrl">accessibility_login_redirect_url</a></code> | <code>str</code> | Custom login page URL. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.accessibilitySelfService">accessibility_self_service</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable self service. Default is `false`. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.adminNote">admin_note</a></code> | <code>str</code> | Application notes for admins. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.appLinksJson">app_links_json</a></code> | <code>str</code> | Displays specific appLinks for the app. The value for each application link should be boolean. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.autoSubmitToolbar">auto_submit_toolbar</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Display auto submit toolbar. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.enduserNote">enduser_note</a></code> | <code>str</code> | Application notes for end users. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.hideIos">hide_ios</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Do not display application icon on mobile app. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.hideWeb">hide_web</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Do not display application icon to users. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_basic_auth#id AppBasicAuth#id}. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.logo">logo</a></code> | <code>str</code> | Local file path to the logo. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.status">status</a></code> | <code>str</code> | Status of application. By default, it is `ACTIVE`. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeouts">AppBasicAuthTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `auth_url`<sup>Required</sup> <a name="auth_url" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.authUrl"></a>

```python
auth_url: str
```

- *Type:* str

The URL of the authenticating site for this app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_basic_auth#auth_url AppBasicAuth#auth_url}

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.label"></a>

```python
label: str
```

- *Type:* str

The Application's display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_basic_auth#label AppBasicAuth#label}

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.url"></a>

```python
url: str
```

- *Type:* str

The URL of the sign-in page for this app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_basic_auth#url AppBasicAuth#url}

---

##### `accessibility_error_redirect_url`<sup>Optional</sup> <a name="accessibility_error_redirect_url" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.accessibilityErrorRedirectUrl"></a>

```python
accessibility_error_redirect_url: str
```

- *Type:* str

Custom error page URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_basic_auth#accessibility_error_redirect_url AppBasicAuth#accessibility_error_redirect_url}

---

##### `accessibility_login_redirect_url`<sup>Optional</sup> <a name="accessibility_login_redirect_url" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.accessibilityLoginRedirectUrl"></a>

```python
accessibility_login_redirect_url: str
```

- *Type:* str

Custom login page URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_basic_auth#accessibility_login_redirect_url AppBasicAuth#accessibility_login_redirect_url}

---

##### `accessibility_self_service`<sup>Optional</sup> <a name="accessibility_self_service" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.accessibilitySelfService"></a>

```python
accessibility_self_service: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable self service. Default is `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_basic_auth#accessibility_self_service AppBasicAuth#accessibility_self_service}

---

##### `admin_note`<sup>Optional</sup> <a name="admin_note" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.adminNote"></a>

```python
admin_note: str
```

- *Type:* str

Application notes for admins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_basic_auth#admin_note AppBasicAuth#admin_note}

---

##### `app_links_json`<sup>Optional</sup> <a name="app_links_json" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.appLinksJson"></a>

```python
app_links_json: str
```

- *Type:* str

Displays specific appLinks for the app. The value for each application link should be boolean.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_basic_auth#app_links_json AppBasicAuth#app_links_json}

---

##### `auto_submit_toolbar`<sup>Optional</sup> <a name="auto_submit_toolbar" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.autoSubmitToolbar"></a>

```python
auto_submit_toolbar: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Display auto submit toolbar.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_basic_auth#auto_submit_toolbar AppBasicAuth#auto_submit_toolbar}

---

##### `enduser_note`<sup>Optional</sup> <a name="enduser_note" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.enduserNote"></a>

```python
enduser_note: str
```

- *Type:* str

Application notes for end users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_basic_auth#enduser_note AppBasicAuth#enduser_note}

---

##### `hide_ios`<sup>Optional</sup> <a name="hide_ios" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.hideIos"></a>

```python
hide_ios: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Do not display application icon on mobile app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_basic_auth#hide_ios AppBasicAuth#hide_ios}

---

##### `hide_web`<sup>Optional</sup> <a name="hide_web" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.hideWeb"></a>

```python
hide_web: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Do not display application icon to users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_basic_auth#hide_web AppBasicAuth#hide_web}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_basic_auth#id AppBasicAuth#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logo`<sup>Optional</sup> <a name="logo" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.logo"></a>

```python
logo: str
```

- *Type:* str

Local file path to the logo.

The file must be in PNG, JPG, or GIF format, and less than 1 MB in size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_basic_auth#logo AppBasicAuth#logo}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.status"></a>

```python
status: str
```

- *Type:* str

Status of application. By default, it is `ACTIVE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_basic_auth#status AppBasicAuth#status}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.timeouts"></a>

```python
timeouts: AppBasicAuthTimeouts
```

- *Type:* <a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeouts">AppBasicAuthTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_basic_auth#timeouts AppBasicAuth#timeouts}

---

### AppBasicAuthTimeouts <a name="AppBasicAuthTimeouts" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import app_basic_auth

appBasicAuth.AppBasicAuthTimeouts(
  create: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_basic_auth#create AppBasicAuth#create}. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_basic_auth#read AppBasicAuth#read}. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_basic_auth#update AppBasicAuth#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_basic_auth#create AppBasicAuth#create}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_basic_auth#read AppBasicAuth#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_basic_auth#update AppBasicAuth#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppBasicAuthTimeoutsOutputReference <a name="AppBasicAuthTimeoutsOutputReference" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import app_basic_auth

appBasicAuth.AppBasicAuthTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeouts">AppBasicAuthTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AppBasicAuthTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeouts">AppBasicAuthTimeouts</a>]

---



