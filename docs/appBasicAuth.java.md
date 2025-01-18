# `appBasicAuth` Submodule <a name="`appBasicAuth` Submodule" id="@cdktf/provider-okta.appBasicAuth"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppBasicAuth <a name="AppBasicAuth" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_basic_auth okta_app_basic_auth}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.app_basic_auth.AppBasicAuth;

AppBasicAuth.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .authUrl(java.lang.String)
    .label(java.lang.String)
    .url(java.lang.String)
//  .accessibilityErrorRedirectUrl(java.lang.String)
//  .accessibilityLoginRedirectUrl(java.lang.String)
//  .accessibilitySelfService(java.lang.Boolean)
//  .accessibilitySelfService(IResolvable)
//  .adminNote(java.lang.String)
//  .appLinksJson(java.lang.String)
//  .autoSubmitToolbar(java.lang.Boolean)
//  .autoSubmitToolbar(IResolvable)
//  .enduserNote(java.lang.String)
//  .hideIos(java.lang.Boolean)
//  .hideIos(IResolvable)
//  .hideWeb(java.lang.Boolean)
//  .hideWeb(IResolvable)
//  .id(java.lang.String)
//  .logo(java.lang.String)
//  .status(java.lang.String)
//  .timeouts(AppBasicAuthTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.Initializer.parameter.authUrl">authUrl</a></code> | <code>java.lang.String</code> | The URL of the authenticating site for this app. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.Initializer.parameter.label">label</a></code> | <code>java.lang.String</code> | The Application's display name. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.Initializer.parameter.url">url</a></code> | <code>java.lang.String</code> | The URL of the sign-in page for this app. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.Initializer.parameter.accessibilityErrorRedirectUrl">accessibilityErrorRedirectUrl</a></code> | <code>java.lang.String</code> | Custom error page URL. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.Initializer.parameter.accessibilityLoginRedirectUrl">accessibilityLoginRedirectUrl</a></code> | <code>java.lang.String</code> | Custom login page URL. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.Initializer.parameter.accessibilitySelfService">accessibilitySelfService</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable self service. Default is `false`. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.Initializer.parameter.adminNote">adminNote</a></code> | <code>java.lang.String</code> | Application notes for admins. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.Initializer.parameter.appLinksJson">appLinksJson</a></code> | <code>java.lang.String</code> | Displays specific appLinks for the app. The value for each application link should be boolean. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.Initializer.parameter.autoSubmitToolbar">autoSubmitToolbar</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Display auto submit toolbar. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.Initializer.parameter.enduserNote">enduserNote</a></code> | <code>java.lang.String</code> | Application notes for end users. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.Initializer.parameter.hideIos">hideIos</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Do not display application icon on mobile app. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.Initializer.parameter.hideWeb">hideWeb</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Do not display application icon to users. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_basic_auth#id AppBasicAuth#id}. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.Initializer.parameter.logo">logo</a></code> | <code>java.lang.String</code> | Local file path to the logo. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.Initializer.parameter.status">status</a></code> | <code>java.lang.String</code> | Status of application. By default, it is `ACTIVE`. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeouts">AppBasicAuthTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `authUrl`<sup>Required</sup> <a name="authUrl" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.Initializer.parameter.authUrl"></a>

- *Type:* java.lang.String

The URL of the authenticating site for this app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_basic_auth#auth_url AppBasicAuth#auth_url}

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.Initializer.parameter.label"></a>

- *Type:* java.lang.String

The Application's display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_basic_auth#label AppBasicAuth#label}

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.Initializer.parameter.url"></a>

- *Type:* java.lang.String

The URL of the sign-in page for this app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_basic_auth#url AppBasicAuth#url}

---

##### `accessibilityErrorRedirectUrl`<sup>Optional</sup> <a name="accessibilityErrorRedirectUrl" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.Initializer.parameter.accessibilityErrorRedirectUrl"></a>

- *Type:* java.lang.String

Custom error page URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_basic_auth#accessibility_error_redirect_url AppBasicAuth#accessibility_error_redirect_url}

---

##### `accessibilityLoginRedirectUrl`<sup>Optional</sup> <a name="accessibilityLoginRedirectUrl" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.Initializer.parameter.accessibilityLoginRedirectUrl"></a>

- *Type:* java.lang.String

Custom login page URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_basic_auth#accessibility_login_redirect_url AppBasicAuth#accessibility_login_redirect_url}

---

##### `accessibilitySelfService`<sup>Optional</sup> <a name="accessibilitySelfService" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.Initializer.parameter.accessibilitySelfService"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable self service. Default is `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_basic_auth#accessibility_self_service AppBasicAuth#accessibility_self_service}

---

##### `adminNote`<sup>Optional</sup> <a name="adminNote" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.Initializer.parameter.adminNote"></a>

- *Type:* java.lang.String

Application notes for admins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_basic_auth#admin_note AppBasicAuth#admin_note}

---

##### `appLinksJson`<sup>Optional</sup> <a name="appLinksJson" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.Initializer.parameter.appLinksJson"></a>

- *Type:* java.lang.String

Displays specific appLinks for the app. The value for each application link should be boolean.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_basic_auth#app_links_json AppBasicAuth#app_links_json}

---

##### `autoSubmitToolbar`<sup>Optional</sup> <a name="autoSubmitToolbar" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.Initializer.parameter.autoSubmitToolbar"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Display auto submit toolbar.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_basic_auth#auto_submit_toolbar AppBasicAuth#auto_submit_toolbar}

---

##### `enduserNote`<sup>Optional</sup> <a name="enduserNote" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.Initializer.parameter.enduserNote"></a>

- *Type:* java.lang.String

Application notes for end users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_basic_auth#enduser_note AppBasicAuth#enduser_note}

---

##### `hideIos`<sup>Optional</sup> <a name="hideIos" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.Initializer.parameter.hideIos"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Do not display application icon on mobile app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_basic_auth#hide_ios AppBasicAuth#hide_ios}

---

##### `hideWeb`<sup>Optional</sup> <a name="hideWeb" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.Initializer.parameter.hideWeb"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Do not display application icon to users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_basic_auth#hide_web AppBasicAuth#hide_web}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_basic_auth#id AppBasicAuth#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logo`<sup>Optional</sup> <a name="logo" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.Initializer.parameter.logo"></a>

- *Type:* java.lang.String

Local file path to the logo.

The file must be in PNG, JPG, or GIF format, and less than 1 MB in size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_basic_auth#logo AppBasicAuth#logo}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.Initializer.parameter.status"></a>

- *Type:* java.lang.String

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
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.resetAccessibilityErrorRedirectUrl">resetAccessibilityErrorRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.resetAccessibilityLoginRedirectUrl">resetAccessibilityLoginRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.resetAccessibilitySelfService">resetAccessibilitySelfService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.resetAdminNote">resetAdminNote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.resetAppLinksJson">resetAppLinksJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.resetAutoSubmitToolbar">resetAutoSubmitToolbar</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.resetEnduserNote">resetEnduserNote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.resetHideIos">resetHideIos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.resetHideWeb">resetHideWeb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.resetLogo">resetLogo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.putTimeouts"></a>

```java
public void putTimeouts(AppBasicAuthTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeouts">AppBasicAuthTimeouts</a>

---

##### `resetAccessibilityErrorRedirectUrl` <a name="resetAccessibilityErrorRedirectUrl" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.resetAccessibilityErrorRedirectUrl"></a>

```java
public void resetAccessibilityErrorRedirectUrl()
```

##### `resetAccessibilityLoginRedirectUrl` <a name="resetAccessibilityLoginRedirectUrl" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.resetAccessibilityLoginRedirectUrl"></a>

```java
public void resetAccessibilityLoginRedirectUrl()
```

##### `resetAccessibilitySelfService` <a name="resetAccessibilitySelfService" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.resetAccessibilitySelfService"></a>

```java
public void resetAccessibilitySelfService()
```

##### `resetAdminNote` <a name="resetAdminNote" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.resetAdminNote"></a>

```java
public void resetAdminNote()
```

##### `resetAppLinksJson` <a name="resetAppLinksJson" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.resetAppLinksJson"></a>

```java
public void resetAppLinksJson()
```

##### `resetAutoSubmitToolbar` <a name="resetAutoSubmitToolbar" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.resetAutoSubmitToolbar"></a>

```java
public void resetAutoSubmitToolbar()
```

##### `resetEnduserNote` <a name="resetEnduserNote" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.resetEnduserNote"></a>

```java
public void resetEnduserNote()
```

##### `resetHideIos` <a name="resetHideIos" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.resetHideIos"></a>

```java
public void resetHideIos()
```

##### `resetHideWeb` <a name="resetHideWeb" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.resetHideWeb"></a>

```java
public void resetHideWeb()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.resetId"></a>

```java
public void resetId()
```

##### `resetLogo` <a name="resetLogo" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.resetLogo"></a>

```java
public void resetLogo()
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.resetStatus"></a>

```java
public void resetStatus()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AppBasicAuth resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.okta.app_basic_auth.AppBasicAuth;

AppBasicAuth.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.okta.app_basic_auth.AppBasicAuth;

AppBasicAuth.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.okta.app_basic_auth.AppBasicAuth;

AppBasicAuth.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.okta.app_basic_auth.AppBasicAuth;

AppBasicAuth.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AppBasicAuth.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a AppBasicAuth resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AppBasicAuth to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AppBasicAuth that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_basic_auth#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the AppBasicAuth to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.logoUrl">logoUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.signOnMode">signOnMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference">AppBasicAuthTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.accessibilityErrorRedirectUrlInput">accessibilityErrorRedirectUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.accessibilityLoginRedirectUrlInput">accessibilityLoginRedirectUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.accessibilitySelfServiceInput">accessibilitySelfServiceInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.adminNoteInput">adminNoteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.appLinksJsonInput">appLinksJsonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.authUrlInput">authUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.autoSubmitToolbarInput">autoSubmitToolbarInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.enduserNoteInput">enduserNoteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.hideIosInput">hideIosInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.hideWebInput">hideWebInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.labelInput">labelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.logoInput">logoInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeouts">AppBasicAuthTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.urlInput">urlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.accessibilityErrorRedirectUrl">accessibilityErrorRedirectUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.accessibilityLoginRedirectUrl">accessibilityLoginRedirectUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.accessibilitySelfService">accessibilitySelfService</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.adminNote">adminNote</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.appLinksJson">appLinksJson</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.authUrl">authUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.autoSubmitToolbar">autoSubmitToolbar</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.enduserNote">enduserNote</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.hideIos">hideIos</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.hideWeb">hideWeb</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.label">label</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.logo">logo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `logoUrl`<sup>Required</sup> <a name="logoUrl" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.logoUrl"></a>

```java
public java.lang.String getLogoUrl();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `signOnMode`<sup>Required</sup> <a name="signOnMode" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.signOnMode"></a>

```java
public java.lang.String getSignOnMode();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.timeouts"></a>

```java
public AppBasicAuthTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference">AppBasicAuthTimeoutsOutputReference</a>

---

##### `accessibilityErrorRedirectUrlInput`<sup>Optional</sup> <a name="accessibilityErrorRedirectUrlInput" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.accessibilityErrorRedirectUrlInput"></a>

```java
public java.lang.String getAccessibilityErrorRedirectUrlInput();
```

- *Type:* java.lang.String

---

##### `accessibilityLoginRedirectUrlInput`<sup>Optional</sup> <a name="accessibilityLoginRedirectUrlInput" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.accessibilityLoginRedirectUrlInput"></a>

```java
public java.lang.String getAccessibilityLoginRedirectUrlInput();
```

- *Type:* java.lang.String

---

##### `accessibilitySelfServiceInput`<sup>Optional</sup> <a name="accessibilitySelfServiceInput" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.accessibilitySelfServiceInput"></a>

```java
public java.lang.Object getAccessibilitySelfServiceInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `adminNoteInput`<sup>Optional</sup> <a name="adminNoteInput" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.adminNoteInput"></a>

```java
public java.lang.String getAdminNoteInput();
```

- *Type:* java.lang.String

---

##### `appLinksJsonInput`<sup>Optional</sup> <a name="appLinksJsonInput" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.appLinksJsonInput"></a>

```java
public java.lang.String getAppLinksJsonInput();
```

- *Type:* java.lang.String

---

##### `authUrlInput`<sup>Optional</sup> <a name="authUrlInput" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.authUrlInput"></a>

```java
public java.lang.String getAuthUrlInput();
```

- *Type:* java.lang.String

---

##### `autoSubmitToolbarInput`<sup>Optional</sup> <a name="autoSubmitToolbarInput" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.autoSubmitToolbarInput"></a>

```java
public java.lang.Object getAutoSubmitToolbarInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enduserNoteInput`<sup>Optional</sup> <a name="enduserNoteInput" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.enduserNoteInput"></a>

```java
public java.lang.String getEnduserNoteInput();
```

- *Type:* java.lang.String

---

##### `hideIosInput`<sup>Optional</sup> <a name="hideIosInput" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.hideIosInput"></a>

```java
public java.lang.Object getHideIosInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hideWebInput`<sup>Optional</sup> <a name="hideWebInput" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.hideWebInput"></a>

```java
public java.lang.Object getHideWebInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelInput`<sup>Optional</sup> <a name="labelInput" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.labelInput"></a>

```java
public java.lang.String getLabelInput();
```

- *Type:* java.lang.String

---

##### `logoInput`<sup>Optional</sup> <a name="logoInput" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.logoInput"></a>

```java
public java.lang.String getLogoInput();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeouts">AppBasicAuthTimeouts</a>

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.urlInput"></a>

```java
public java.lang.String getUrlInput();
```

- *Type:* java.lang.String

---

##### `accessibilityErrorRedirectUrl`<sup>Required</sup> <a name="accessibilityErrorRedirectUrl" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.accessibilityErrorRedirectUrl"></a>

```java
public java.lang.String getAccessibilityErrorRedirectUrl();
```

- *Type:* java.lang.String

---

##### `accessibilityLoginRedirectUrl`<sup>Required</sup> <a name="accessibilityLoginRedirectUrl" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.accessibilityLoginRedirectUrl"></a>

```java
public java.lang.String getAccessibilityLoginRedirectUrl();
```

- *Type:* java.lang.String

---

##### `accessibilitySelfService`<sup>Required</sup> <a name="accessibilitySelfService" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.accessibilitySelfService"></a>

```java
public java.lang.Object getAccessibilitySelfService();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `adminNote`<sup>Required</sup> <a name="adminNote" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.adminNote"></a>

```java
public java.lang.String getAdminNote();
```

- *Type:* java.lang.String

---

##### `appLinksJson`<sup>Required</sup> <a name="appLinksJson" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.appLinksJson"></a>

```java
public java.lang.String getAppLinksJson();
```

- *Type:* java.lang.String

---

##### `authUrl`<sup>Required</sup> <a name="authUrl" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.authUrl"></a>

```java
public java.lang.String getAuthUrl();
```

- *Type:* java.lang.String

---

##### `autoSubmitToolbar`<sup>Required</sup> <a name="autoSubmitToolbar" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.autoSubmitToolbar"></a>

```java
public java.lang.Object getAutoSubmitToolbar();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enduserNote`<sup>Required</sup> <a name="enduserNote" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.enduserNote"></a>

```java
public java.lang.String getEnduserNote();
```

- *Type:* java.lang.String

---

##### `hideIos`<sup>Required</sup> <a name="hideIos" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.hideIos"></a>

```java
public java.lang.Object getHideIos();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hideWeb`<sup>Required</sup> <a name="hideWeb" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.hideWeb"></a>

```java
public java.lang.Object getHideWeb();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.label"></a>

```java
public java.lang.String getLabel();
```

- *Type:* java.lang.String

---

##### `logo`<sup>Required</sup> <a name="logo" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.logo"></a>

```java
public java.lang.String getLogo();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuth.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AppBasicAuthConfig <a name="AppBasicAuthConfig" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.app_basic_auth.AppBasicAuthConfig;

AppBasicAuthConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .authUrl(java.lang.String)
    .label(java.lang.String)
    .url(java.lang.String)
//  .accessibilityErrorRedirectUrl(java.lang.String)
//  .accessibilityLoginRedirectUrl(java.lang.String)
//  .accessibilitySelfService(java.lang.Boolean)
//  .accessibilitySelfService(IResolvable)
//  .adminNote(java.lang.String)
//  .appLinksJson(java.lang.String)
//  .autoSubmitToolbar(java.lang.Boolean)
//  .autoSubmitToolbar(IResolvable)
//  .enduserNote(java.lang.String)
//  .hideIos(java.lang.Boolean)
//  .hideIos(IResolvable)
//  .hideWeb(java.lang.Boolean)
//  .hideWeb(IResolvable)
//  .id(java.lang.String)
//  .logo(java.lang.String)
//  .status(java.lang.String)
//  .timeouts(AppBasicAuthTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.authUrl">authUrl</a></code> | <code>java.lang.String</code> | The URL of the authenticating site for this app. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.label">label</a></code> | <code>java.lang.String</code> | The Application's display name. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.url">url</a></code> | <code>java.lang.String</code> | The URL of the sign-in page for this app. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.accessibilityErrorRedirectUrl">accessibilityErrorRedirectUrl</a></code> | <code>java.lang.String</code> | Custom error page URL. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.accessibilityLoginRedirectUrl">accessibilityLoginRedirectUrl</a></code> | <code>java.lang.String</code> | Custom login page URL. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.accessibilitySelfService">accessibilitySelfService</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable self service. Default is `false`. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.adminNote">adminNote</a></code> | <code>java.lang.String</code> | Application notes for admins. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.appLinksJson">appLinksJson</a></code> | <code>java.lang.String</code> | Displays specific appLinks for the app. The value for each application link should be boolean. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.autoSubmitToolbar">autoSubmitToolbar</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Display auto submit toolbar. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.enduserNote">enduserNote</a></code> | <code>java.lang.String</code> | Application notes for end users. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.hideIos">hideIos</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Do not display application icon on mobile app. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.hideWeb">hideWeb</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Do not display application icon to users. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_basic_auth#id AppBasicAuth#id}. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.logo">logo</a></code> | <code>java.lang.String</code> | Local file path to the logo. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.status">status</a></code> | <code>java.lang.String</code> | Status of application. By default, it is `ACTIVE`. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeouts">AppBasicAuthTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `authUrl`<sup>Required</sup> <a name="authUrl" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.authUrl"></a>

```java
public java.lang.String getAuthUrl();
```

- *Type:* java.lang.String

The URL of the authenticating site for this app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_basic_auth#auth_url AppBasicAuth#auth_url}

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.label"></a>

```java
public java.lang.String getLabel();
```

- *Type:* java.lang.String

The Application's display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_basic_auth#label AppBasicAuth#label}

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

The URL of the sign-in page for this app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_basic_auth#url AppBasicAuth#url}

---

##### `accessibilityErrorRedirectUrl`<sup>Optional</sup> <a name="accessibilityErrorRedirectUrl" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.accessibilityErrorRedirectUrl"></a>

```java
public java.lang.String getAccessibilityErrorRedirectUrl();
```

- *Type:* java.lang.String

Custom error page URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_basic_auth#accessibility_error_redirect_url AppBasicAuth#accessibility_error_redirect_url}

---

##### `accessibilityLoginRedirectUrl`<sup>Optional</sup> <a name="accessibilityLoginRedirectUrl" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.accessibilityLoginRedirectUrl"></a>

```java
public java.lang.String getAccessibilityLoginRedirectUrl();
```

- *Type:* java.lang.String

Custom login page URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_basic_auth#accessibility_login_redirect_url AppBasicAuth#accessibility_login_redirect_url}

---

##### `accessibilitySelfService`<sup>Optional</sup> <a name="accessibilitySelfService" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.accessibilitySelfService"></a>

```java
public java.lang.Object getAccessibilitySelfService();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable self service. Default is `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_basic_auth#accessibility_self_service AppBasicAuth#accessibility_self_service}

---

##### `adminNote`<sup>Optional</sup> <a name="adminNote" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.adminNote"></a>

```java
public java.lang.String getAdminNote();
```

- *Type:* java.lang.String

Application notes for admins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_basic_auth#admin_note AppBasicAuth#admin_note}

---

##### `appLinksJson`<sup>Optional</sup> <a name="appLinksJson" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.appLinksJson"></a>

```java
public java.lang.String getAppLinksJson();
```

- *Type:* java.lang.String

Displays specific appLinks for the app. The value for each application link should be boolean.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_basic_auth#app_links_json AppBasicAuth#app_links_json}

---

##### `autoSubmitToolbar`<sup>Optional</sup> <a name="autoSubmitToolbar" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.autoSubmitToolbar"></a>

```java
public java.lang.Object getAutoSubmitToolbar();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Display auto submit toolbar.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_basic_auth#auto_submit_toolbar AppBasicAuth#auto_submit_toolbar}

---

##### `enduserNote`<sup>Optional</sup> <a name="enduserNote" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.enduserNote"></a>

```java
public java.lang.String getEnduserNote();
```

- *Type:* java.lang.String

Application notes for end users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_basic_auth#enduser_note AppBasicAuth#enduser_note}

---

##### `hideIos`<sup>Optional</sup> <a name="hideIos" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.hideIos"></a>

```java
public java.lang.Object getHideIos();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Do not display application icon on mobile app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_basic_auth#hide_ios AppBasicAuth#hide_ios}

---

##### `hideWeb`<sup>Optional</sup> <a name="hideWeb" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.hideWeb"></a>

```java
public java.lang.Object getHideWeb();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Do not display application icon to users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_basic_auth#hide_web AppBasicAuth#hide_web}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_basic_auth#id AppBasicAuth#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logo`<sup>Optional</sup> <a name="logo" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.logo"></a>

```java
public java.lang.String getLogo();
```

- *Type:* java.lang.String

Local file path to the logo.

The file must be in PNG, JPG, or GIF format, and less than 1 MB in size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_basic_auth#logo AppBasicAuth#logo}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Status of application. By default, it is `ACTIVE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_basic_auth#status AppBasicAuth#status}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthConfig.property.timeouts"></a>

```java
public AppBasicAuthTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeouts">AppBasicAuthTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_basic_auth#timeouts AppBasicAuth#timeouts}

---

### AppBasicAuthTimeouts <a name="AppBasicAuthTimeouts" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.app_basic_auth.AppBasicAuthTimeouts;

AppBasicAuthTimeouts.builder()
//  .create(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_basic_auth#create AppBasicAuth#create}. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_basic_auth#read AppBasicAuth#read}. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_basic_auth#update AppBasicAuth#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_basic_auth#create AppBasicAuth#create}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_basic_auth#read AppBasicAuth#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_basic_auth#update AppBasicAuth#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppBasicAuthTimeoutsOutputReference <a name="AppBasicAuthTimeoutsOutputReference" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.app_basic_auth.AppBasicAuthTimeoutsOutputReference;

new AppBasicAuthTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeouts">AppBasicAuthTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-okta.appBasicAuth.AppBasicAuthTimeouts">AppBasicAuthTimeouts</a>

---



