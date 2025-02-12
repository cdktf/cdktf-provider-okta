# `appSharedCredentials` Submodule <a name="`appSharedCredentials` Submodule" id="@cdktf/provider-okta.appSharedCredentials"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppSharedCredentials <a name="AppSharedCredentials" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/app_shared_credentials okta_app_shared_credentials}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.app_shared_credentials.AppSharedCredentials;

AppSharedCredentials.Builder.create(Construct scope, java.lang.String id)
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
    .label(java.lang.String)
//  .accessibilityErrorRedirectUrl(java.lang.String)
//  .accessibilityLoginRedirectUrl(java.lang.String)
//  .accessibilitySelfService(java.lang.Boolean)
//  .accessibilitySelfService(IResolvable)
//  .adminNote(java.lang.String)
//  .appLinksJson(java.lang.String)
//  .autoSubmitToolbar(java.lang.Boolean)
//  .autoSubmitToolbar(IResolvable)
//  .buttonField(java.lang.String)
//  .checkbox(java.lang.String)
//  .enduserNote(java.lang.String)
//  .hideIos(java.lang.Boolean)
//  .hideIos(IResolvable)
//  .hideWeb(java.lang.Boolean)
//  .hideWeb(IResolvable)
//  .id(java.lang.String)
//  .logo(java.lang.String)
//  .passwordField(java.lang.String)
//  .preconfiguredApp(java.lang.String)
//  .redirectUrl(java.lang.String)
//  .sharedPassword(java.lang.String)
//  .sharedUsername(java.lang.String)
//  .status(java.lang.String)
//  .timeouts(AppSharedCredentialsTimeouts)
//  .url(java.lang.String)
//  .urlRegex(java.lang.String)
//  .usernameField(java.lang.String)
//  .userNameTemplate(java.lang.String)
//  .userNameTemplatePushStatus(java.lang.String)
//  .userNameTemplateSuffix(java.lang.String)
//  .userNameTemplateType(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.label">label</a></code> | <code>java.lang.String</code> | The Application's display name. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.accessibilityErrorRedirectUrl">accessibilityErrorRedirectUrl</a></code> | <code>java.lang.String</code> | Custom error page URL. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.accessibilityLoginRedirectUrl">accessibilityLoginRedirectUrl</a></code> | <code>java.lang.String</code> | Custom login page URL. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.accessibilitySelfService">accessibilitySelfService</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable self service. Default is `false`. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.adminNote">adminNote</a></code> | <code>java.lang.String</code> | Application notes for admins. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.appLinksJson">appLinksJson</a></code> | <code>java.lang.String</code> | Displays specific appLinks for the app. The value for each application link should be boolean. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.autoSubmitToolbar">autoSubmitToolbar</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Display auto submit toolbar. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.buttonField">buttonField</a></code> | <code>java.lang.String</code> | Login button field. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.checkbox">checkbox</a></code> | <code>java.lang.String</code> | CSS selector for the checkbox. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.enduserNote">enduserNote</a></code> | <code>java.lang.String</code> | Application notes for end users. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.hideIos">hideIos</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Do not display application icon on mobile app. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.hideWeb">hideWeb</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Do not display application icon to users. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/app_shared_credentials#id AppSharedCredentials#id}. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.logo">logo</a></code> | <code>java.lang.String</code> | Local file path to the logo. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.passwordField">passwordField</a></code> | <code>java.lang.String</code> | Login password field. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.preconfiguredApp">preconfiguredApp</a></code> | <code>java.lang.String</code> | Name of application from the Okta Integration Network, if not included a custom app will be created. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.redirectUrl">redirectUrl</a></code> | <code>java.lang.String</code> | Secondary URL of the sign-in page for this app. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.sharedPassword">sharedPassword</a></code> | <code>java.lang.String</code> | Shared password, required for certain schemes. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.sharedUsername">sharedUsername</a></code> | <code>java.lang.String</code> | Shared username, required for certain schemes. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.status">status</a></code> | <code>java.lang.String</code> | Status of application. By default, it is `ACTIVE`. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeouts">AppSharedCredentialsTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.url">url</a></code> | <code>java.lang.String</code> | The URL of the sign-in page for this app. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.urlRegex">urlRegex</a></code> | <code>java.lang.String</code> | A regular expression that further restricts url to the specified regular expression. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.usernameField">usernameField</a></code> | <code>java.lang.String</code> | Login username field. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.userNameTemplate">userNameTemplate</a></code> | <code>java.lang.String</code> | Username template. Default: `${source.login}`. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.userNameTemplatePushStatus">userNameTemplatePushStatus</a></code> | <code>java.lang.String</code> | Push username on update. Valid values: `PUSH` and `DONT_PUSH`. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.userNameTemplateSuffix">userNameTemplateSuffix</a></code> | <code>java.lang.String</code> | Username template suffix. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.userNameTemplateType">userNameTemplateType</a></code> | <code>java.lang.String</code> | Username template type. Default: `BUILT_IN`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.label"></a>

- *Type:* java.lang.String

The Application's display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/app_shared_credentials#label AppSharedCredentials#label}

---

##### `accessibilityErrorRedirectUrl`<sup>Optional</sup> <a name="accessibilityErrorRedirectUrl" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.accessibilityErrorRedirectUrl"></a>

- *Type:* java.lang.String

Custom error page URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/app_shared_credentials#accessibility_error_redirect_url AppSharedCredentials#accessibility_error_redirect_url}

---

##### `accessibilityLoginRedirectUrl`<sup>Optional</sup> <a name="accessibilityLoginRedirectUrl" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.accessibilityLoginRedirectUrl"></a>

- *Type:* java.lang.String

Custom login page URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/app_shared_credentials#accessibility_login_redirect_url AppSharedCredentials#accessibility_login_redirect_url}

---

##### `accessibilitySelfService`<sup>Optional</sup> <a name="accessibilitySelfService" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.accessibilitySelfService"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable self service. Default is `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/app_shared_credentials#accessibility_self_service AppSharedCredentials#accessibility_self_service}

---

##### `adminNote`<sup>Optional</sup> <a name="adminNote" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.adminNote"></a>

- *Type:* java.lang.String

Application notes for admins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/app_shared_credentials#admin_note AppSharedCredentials#admin_note}

---

##### `appLinksJson`<sup>Optional</sup> <a name="appLinksJson" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.appLinksJson"></a>

- *Type:* java.lang.String

Displays specific appLinks for the app. The value for each application link should be boolean.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/app_shared_credentials#app_links_json AppSharedCredentials#app_links_json}

---

##### `autoSubmitToolbar`<sup>Optional</sup> <a name="autoSubmitToolbar" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.autoSubmitToolbar"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Display auto submit toolbar.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/app_shared_credentials#auto_submit_toolbar AppSharedCredentials#auto_submit_toolbar}

---

##### `buttonField`<sup>Optional</sup> <a name="buttonField" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.buttonField"></a>

- *Type:* java.lang.String

Login button field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/app_shared_credentials#button_field AppSharedCredentials#button_field}

---

##### `checkbox`<sup>Optional</sup> <a name="checkbox" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.checkbox"></a>

- *Type:* java.lang.String

CSS selector for the checkbox.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/app_shared_credentials#checkbox AppSharedCredentials#checkbox}

---

##### `enduserNote`<sup>Optional</sup> <a name="enduserNote" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.enduserNote"></a>

- *Type:* java.lang.String

Application notes for end users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/app_shared_credentials#enduser_note AppSharedCredentials#enduser_note}

---

##### `hideIos`<sup>Optional</sup> <a name="hideIos" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.hideIos"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Do not display application icon on mobile app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/app_shared_credentials#hide_ios AppSharedCredentials#hide_ios}

---

##### `hideWeb`<sup>Optional</sup> <a name="hideWeb" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.hideWeb"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Do not display application icon to users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/app_shared_credentials#hide_web AppSharedCredentials#hide_web}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/app_shared_credentials#id AppSharedCredentials#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logo`<sup>Optional</sup> <a name="logo" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.logo"></a>

- *Type:* java.lang.String

Local file path to the logo.

The file must be in PNG, JPG, or GIF format, and less than 1 MB in size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/app_shared_credentials#logo AppSharedCredentials#logo}

---

##### `passwordField`<sup>Optional</sup> <a name="passwordField" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.passwordField"></a>

- *Type:* java.lang.String

Login password field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/app_shared_credentials#password_field AppSharedCredentials#password_field}

---

##### `preconfiguredApp`<sup>Optional</sup> <a name="preconfiguredApp" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.preconfiguredApp"></a>

- *Type:* java.lang.String

Name of application from the Okta Integration Network, if not included a custom app will be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/app_shared_credentials#preconfigured_app AppSharedCredentials#preconfigured_app}

---

##### `redirectUrl`<sup>Optional</sup> <a name="redirectUrl" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.redirectUrl"></a>

- *Type:* java.lang.String

Secondary URL of the sign-in page for this app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/app_shared_credentials#redirect_url AppSharedCredentials#redirect_url}

---

##### `sharedPassword`<sup>Optional</sup> <a name="sharedPassword" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.sharedPassword"></a>

- *Type:* java.lang.String

Shared password, required for certain schemes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/app_shared_credentials#shared_password AppSharedCredentials#shared_password}

---

##### `sharedUsername`<sup>Optional</sup> <a name="sharedUsername" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.sharedUsername"></a>

- *Type:* java.lang.String

Shared username, required for certain schemes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/app_shared_credentials#shared_username AppSharedCredentials#shared_username}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.status"></a>

- *Type:* java.lang.String

Status of application. By default, it is `ACTIVE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/app_shared_credentials#status AppSharedCredentials#status}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeouts">AppSharedCredentialsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/app_shared_credentials#timeouts AppSharedCredentials#timeouts}

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.url"></a>

- *Type:* java.lang.String

The URL of the sign-in page for this app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/app_shared_credentials#url AppSharedCredentials#url}

---

##### `urlRegex`<sup>Optional</sup> <a name="urlRegex" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.urlRegex"></a>

- *Type:* java.lang.String

A regular expression that further restricts url to the specified regular expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/app_shared_credentials#url_regex AppSharedCredentials#url_regex}

---

##### `usernameField`<sup>Optional</sup> <a name="usernameField" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.usernameField"></a>

- *Type:* java.lang.String

Login username field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/app_shared_credentials#username_field AppSharedCredentials#username_field}

---

##### `userNameTemplate`<sup>Optional</sup> <a name="userNameTemplate" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.userNameTemplate"></a>

- *Type:* java.lang.String

Username template. Default: `${source.login}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/app_shared_credentials#user_name_template AppSharedCredentials#user_name_template}

---

##### `userNameTemplatePushStatus`<sup>Optional</sup> <a name="userNameTemplatePushStatus" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.userNameTemplatePushStatus"></a>

- *Type:* java.lang.String

Push username on update. Valid values: `PUSH` and `DONT_PUSH`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/app_shared_credentials#user_name_template_push_status AppSharedCredentials#user_name_template_push_status}

---

##### `userNameTemplateSuffix`<sup>Optional</sup> <a name="userNameTemplateSuffix" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.userNameTemplateSuffix"></a>

- *Type:* java.lang.String

Username template suffix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/app_shared_credentials#user_name_template_suffix AppSharedCredentials#user_name_template_suffix}

---

##### `userNameTemplateType`<sup>Optional</sup> <a name="userNameTemplateType" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.Initializer.parameter.userNameTemplateType"></a>

- *Type:* java.lang.String

Username template type. Default: `BUILT_IN`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/app_shared_credentials#user_name_template_type AppSharedCredentials#user_name_template_type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetAccessibilityErrorRedirectUrl">resetAccessibilityErrorRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetAccessibilityLoginRedirectUrl">resetAccessibilityLoginRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetAccessibilitySelfService">resetAccessibilitySelfService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetAdminNote">resetAdminNote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetAppLinksJson">resetAppLinksJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetAutoSubmitToolbar">resetAutoSubmitToolbar</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetButtonField">resetButtonField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetCheckbox">resetCheckbox</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetEnduserNote">resetEnduserNote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetHideIos">resetHideIos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetHideWeb">resetHideWeb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetLogo">resetLogo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetPasswordField">resetPasswordField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetPreconfiguredApp">resetPreconfiguredApp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetRedirectUrl">resetRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetSharedPassword">resetSharedPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetSharedUsername">resetSharedUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetUrl">resetUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetUrlRegex">resetUrlRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetUsernameField">resetUsernameField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetUserNameTemplate">resetUserNameTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetUserNameTemplatePushStatus">resetUserNameTemplatePushStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetUserNameTemplateSuffix">resetUserNameTemplateSuffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetUserNameTemplateType">resetUserNameTemplateType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.putTimeouts"></a>

```java
public void putTimeouts(AppSharedCredentialsTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeouts">AppSharedCredentialsTimeouts</a>

---

##### `resetAccessibilityErrorRedirectUrl` <a name="resetAccessibilityErrorRedirectUrl" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetAccessibilityErrorRedirectUrl"></a>

```java
public void resetAccessibilityErrorRedirectUrl()
```

##### `resetAccessibilityLoginRedirectUrl` <a name="resetAccessibilityLoginRedirectUrl" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetAccessibilityLoginRedirectUrl"></a>

```java
public void resetAccessibilityLoginRedirectUrl()
```

##### `resetAccessibilitySelfService` <a name="resetAccessibilitySelfService" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetAccessibilitySelfService"></a>

```java
public void resetAccessibilitySelfService()
```

##### `resetAdminNote` <a name="resetAdminNote" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetAdminNote"></a>

```java
public void resetAdminNote()
```

##### `resetAppLinksJson` <a name="resetAppLinksJson" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetAppLinksJson"></a>

```java
public void resetAppLinksJson()
```

##### `resetAutoSubmitToolbar` <a name="resetAutoSubmitToolbar" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetAutoSubmitToolbar"></a>

```java
public void resetAutoSubmitToolbar()
```

##### `resetButtonField` <a name="resetButtonField" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetButtonField"></a>

```java
public void resetButtonField()
```

##### `resetCheckbox` <a name="resetCheckbox" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetCheckbox"></a>

```java
public void resetCheckbox()
```

##### `resetEnduserNote` <a name="resetEnduserNote" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetEnduserNote"></a>

```java
public void resetEnduserNote()
```

##### `resetHideIos` <a name="resetHideIos" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetHideIos"></a>

```java
public void resetHideIos()
```

##### `resetHideWeb` <a name="resetHideWeb" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetHideWeb"></a>

```java
public void resetHideWeb()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetId"></a>

```java
public void resetId()
```

##### `resetLogo` <a name="resetLogo" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetLogo"></a>

```java
public void resetLogo()
```

##### `resetPasswordField` <a name="resetPasswordField" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetPasswordField"></a>

```java
public void resetPasswordField()
```

##### `resetPreconfiguredApp` <a name="resetPreconfiguredApp" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetPreconfiguredApp"></a>

```java
public void resetPreconfiguredApp()
```

##### `resetRedirectUrl` <a name="resetRedirectUrl" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetRedirectUrl"></a>

```java
public void resetRedirectUrl()
```

##### `resetSharedPassword` <a name="resetSharedPassword" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetSharedPassword"></a>

```java
public void resetSharedPassword()
```

##### `resetSharedUsername` <a name="resetSharedUsername" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetSharedUsername"></a>

```java
public void resetSharedUsername()
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetStatus"></a>

```java
public void resetStatus()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUrl` <a name="resetUrl" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetUrl"></a>

```java
public void resetUrl()
```

##### `resetUrlRegex` <a name="resetUrlRegex" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetUrlRegex"></a>

```java
public void resetUrlRegex()
```

##### `resetUsernameField` <a name="resetUsernameField" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetUsernameField"></a>

```java
public void resetUsernameField()
```

##### `resetUserNameTemplate` <a name="resetUserNameTemplate" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetUserNameTemplate"></a>

```java
public void resetUserNameTemplate()
```

##### `resetUserNameTemplatePushStatus` <a name="resetUserNameTemplatePushStatus" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetUserNameTemplatePushStatus"></a>

```java
public void resetUserNameTemplatePushStatus()
```

##### `resetUserNameTemplateSuffix` <a name="resetUserNameTemplateSuffix" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetUserNameTemplateSuffix"></a>

```java
public void resetUserNameTemplateSuffix()
```

##### `resetUserNameTemplateType` <a name="resetUserNameTemplateType" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.resetUserNameTemplateType"></a>

```java
public void resetUserNameTemplateType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AppSharedCredentials resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.okta.app_shared_credentials.AppSharedCredentials;

AppSharedCredentials.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.okta.app_shared_credentials.AppSharedCredentials;

AppSharedCredentials.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.okta.app_shared_credentials.AppSharedCredentials;

AppSharedCredentials.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.okta.app_shared_credentials.AppSharedCredentials;

AppSharedCredentials.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AppSharedCredentials.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a AppSharedCredentials resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AppSharedCredentials to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AppSharedCredentials that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/app_shared_credentials#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the AppSharedCredentials to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.logoUrl">logoUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.signOnMode">signOnMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference">AppSharedCredentialsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.accessibilityErrorRedirectUrlInput">accessibilityErrorRedirectUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.accessibilityLoginRedirectUrlInput">accessibilityLoginRedirectUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.accessibilitySelfServiceInput">accessibilitySelfServiceInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.adminNoteInput">adminNoteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.appLinksJsonInput">appLinksJsonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.autoSubmitToolbarInput">autoSubmitToolbarInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.buttonFieldInput">buttonFieldInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.checkboxInput">checkboxInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.enduserNoteInput">enduserNoteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.hideIosInput">hideIosInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.hideWebInput">hideWebInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.labelInput">labelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.logoInput">logoInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.passwordFieldInput">passwordFieldInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.preconfiguredAppInput">preconfiguredAppInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.redirectUrlInput">redirectUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.sharedPasswordInput">sharedPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.sharedUsernameInput">sharedUsernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeouts">AppSharedCredentialsTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.urlInput">urlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.urlRegexInput">urlRegexInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.usernameFieldInput">usernameFieldInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.userNameTemplateInput">userNameTemplateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.userNameTemplatePushStatusInput">userNameTemplatePushStatusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.userNameTemplateSuffixInput">userNameTemplateSuffixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.userNameTemplateTypeInput">userNameTemplateTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.accessibilityErrorRedirectUrl">accessibilityErrorRedirectUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.accessibilityLoginRedirectUrl">accessibilityLoginRedirectUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.accessibilitySelfService">accessibilitySelfService</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.adminNote">adminNote</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.appLinksJson">appLinksJson</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.autoSubmitToolbar">autoSubmitToolbar</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.buttonField">buttonField</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.checkbox">checkbox</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.enduserNote">enduserNote</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.hideIos">hideIos</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.hideWeb">hideWeb</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.label">label</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.logo">logo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.passwordField">passwordField</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.preconfiguredApp">preconfiguredApp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.redirectUrl">redirectUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.sharedPassword">sharedPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.sharedUsername">sharedUsername</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.urlRegex">urlRegex</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.usernameField">usernameField</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.userNameTemplate">userNameTemplate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.userNameTemplatePushStatus">userNameTemplatePushStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.userNameTemplateSuffix">userNameTemplateSuffix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.userNameTemplateType">userNameTemplateType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `logoUrl`<sup>Required</sup> <a name="logoUrl" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.logoUrl"></a>

```java
public java.lang.String getLogoUrl();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `signOnMode`<sup>Required</sup> <a name="signOnMode" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.signOnMode"></a>

```java
public java.lang.String getSignOnMode();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.timeouts"></a>

```java
public AppSharedCredentialsTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference">AppSharedCredentialsTimeoutsOutputReference</a>

---

##### `accessibilityErrorRedirectUrlInput`<sup>Optional</sup> <a name="accessibilityErrorRedirectUrlInput" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.accessibilityErrorRedirectUrlInput"></a>

```java
public java.lang.String getAccessibilityErrorRedirectUrlInput();
```

- *Type:* java.lang.String

---

##### `accessibilityLoginRedirectUrlInput`<sup>Optional</sup> <a name="accessibilityLoginRedirectUrlInput" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.accessibilityLoginRedirectUrlInput"></a>

```java
public java.lang.String getAccessibilityLoginRedirectUrlInput();
```

- *Type:* java.lang.String

---

##### `accessibilitySelfServiceInput`<sup>Optional</sup> <a name="accessibilitySelfServiceInput" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.accessibilitySelfServiceInput"></a>

```java
public java.lang.Object getAccessibilitySelfServiceInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `adminNoteInput`<sup>Optional</sup> <a name="adminNoteInput" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.adminNoteInput"></a>

```java
public java.lang.String getAdminNoteInput();
```

- *Type:* java.lang.String

---

##### `appLinksJsonInput`<sup>Optional</sup> <a name="appLinksJsonInput" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.appLinksJsonInput"></a>

```java
public java.lang.String getAppLinksJsonInput();
```

- *Type:* java.lang.String

---

##### `autoSubmitToolbarInput`<sup>Optional</sup> <a name="autoSubmitToolbarInput" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.autoSubmitToolbarInput"></a>

```java
public java.lang.Object getAutoSubmitToolbarInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `buttonFieldInput`<sup>Optional</sup> <a name="buttonFieldInput" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.buttonFieldInput"></a>

```java
public java.lang.String getButtonFieldInput();
```

- *Type:* java.lang.String

---

##### `checkboxInput`<sup>Optional</sup> <a name="checkboxInput" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.checkboxInput"></a>

```java
public java.lang.String getCheckboxInput();
```

- *Type:* java.lang.String

---

##### `enduserNoteInput`<sup>Optional</sup> <a name="enduserNoteInput" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.enduserNoteInput"></a>

```java
public java.lang.String getEnduserNoteInput();
```

- *Type:* java.lang.String

---

##### `hideIosInput`<sup>Optional</sup> <a name="hideIosInput" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.hideIosInput"></a>

```java
public java.lang.Object getHideIosInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hideWebInput`<sup>Optional</sup> <a name="hideWebInput" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.hideWebInput"></a>

```java
public java.lang.Object getHideWebInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelInput`<sup>Optional</sup> <a name="labelInput" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.labelInput"></a>

```java
public java.lang.String getLabelInput();
```

- *Type:* java.lang.String

---

##### `logoInput`<sup>Optional</sup> <a name="logoInput" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.logoInput"></a>

```java
public java.lang.String getLogoInput();
```

- *Type:* java.lang.String

---

##### `passwordFieldInput`<sup>Optional</sup> <a name="passwordFieldInput" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.passwordFieldInput"></a>

```java
public java.lang.String getPasswordFieldInput();
```

- *Type:* java.lang.String

---

##### `preconfiguredAppInput`<sup>Optional</sup> <a name="preconfiguredAppInput" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.preconfiguredAppInput"></a>

```java
public java.lang.String getPreconfiguredAppInput();
```

- *Type:* java.lang.String

---

##### `redirectUrlInput`<sup>Optional</sup> <a name="redirectUrlInput" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.redirectUrlInput"></a>

```java
public java.lang.String getRedirectUrlInput();
```

- *Type:* java.lang.String

---

##### `sharedPasswordInput`<sup>Optional</sup> <a name="sharedPasswordInput" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.sharedPasswordInput"></a>

```java
public java.lang.String getSharedPasswordInput();
```

- *Type:* java.lang.String

---

##### `sharedUsernameInput`<sup>Optional</sup> <a name="sharedUsernameInput" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.sharedUsernameInput"></a>

```java
public java.lang.String getSharedUsernameInput();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeouts">AppSharedCredentialsTimeouts</a>

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.urlInput"></a>

```java
public java.lang.String getUrlInput();
```

- *Type:* java.lang.String

---

##### `urlRegexInput`<sup>Optional</sup> <a name="urlRegexInput" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.urlRegexInput"></a>

```java
public java.lang.String getUrlRegexInput();
```

- *Type:* java.lang.String

---

##### `usernameFieldInput`<sup>Optional</sup> <a name="usernameFieldInput" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.usernameFieldInput"></a>

```java
public java.lang.String getUsernameFieldInput();
```

- *Type:* java.lang.String

---

##### `userNameTemplateInput`<sup>Optional</sup> <a name="userNameTemplateInput" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.userNameTemplateInput"></a>

```java
public java.lang.String getUserNameTemplateInput();
```

- *Type:* java.lang.String

---

##### `userNameTemplatePushStatusInput`<sup>Optional</sup> <a name="userNameTemplatePushStatusInput" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.userNameTemplatePushStatusInput"></a>

```java
public java.lang.String getUserNameTemplatePushStatusInput();
```

- *Type:* java.lang.String

---

##### `userNameTemplateSuffixInput`<sup>Optional</sup> <a name="userNameTemplateSuffixInput" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.userNameTemplateSuffixInput"></a>

```java
public java.lang.String getUserNameTemplateSuffixInput();
```

- *Type:* java.lang.String

---

##### `userNameTemplateTypeInput`<sup>Optional</sup> <a name="userNameTemplateTypeInput" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.userNameTemplateTypeInput"></a>

```java
public java.lang.String getUserNameTemplateTypeInput();
```

- *Type:* java.lang.String

---

##### `accessibilityErrorRedirectUrl`<sup>Required</sup> <a name="accessibilityErrorRedirectUrl" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.accessibilityErrorRedirectUrl"></a>

```java
public java.lang.String getAccessibilityErrorRedirectUrl();
```

- *Type:* java.lang.String

---

##### `accessibilityLoginRedirectUrl`<sup>Required</sup> <a name="accessibilityLoginRedirectUrl" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.accessibilityLoginRedirectUrl"></a>

```java
public java.lang.String getAccessibilityLoginRedirectUrl();
```

- *Type:* java.lang.String

---

##### `accessibilitySelfService`<sup>Required</sup> <a name="accessibilitySelfService" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.accessibilitySelfService"></a>

```java
public java.lang.Object getAccessibilitySelfService();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `adminNote`<sup>Required</sup> <a name="adminNote" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.adminNote"></a>

```java
public java.lang.String getAdminNote();
```

- *Type:* java.lang.String

---

##### `appLinksJson`<sup>Required</sup> <a name="appLinksJson" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.appLinksJson"></a>

```java
public java.lang.String getAppLinksJson();
```

- *Type:* java.lang.String

---

##### `autoSubmitToolbar`<sup>Required</sup> <a name="autoSubmitToolbar" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.autoSubmitToolbar"></a>

```java
public java.lang.Object getAutoSubmitToolbar();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `buttonField`<sup>Required</sup> <a name="buttonField" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.buttonField"></a>

```java
public java.lang.String getButtonField();
```

- *Type:* java.lang.String

---

##### `checkbox`<sup>Required</sup> <a name="checkbox" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.checkbox"></a>

```java
public java.lang.String getCheckbox();
```

- *Type:* java.lang.String

---

##### `enduserNote`<sup>Required</sup> <a name="enduserNote" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.enduserNote"></a>

```java
public java.lang.String getEnduserNote();
```

- *Type:* java.lang.String

---

##### `hideIos`<sup>Required</sup> <a name="hideIos" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.hideIos"></a>

```java
public java.lang.Object getHideIos();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hideWeb`<sup>Required</sup> <a name="hideWeb" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.hideWeb"></a>

```java
public java.lang.Object getHideWeb();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.label"></a>

```java
public java.lang.String getLabel();
```

- *Type:* java.lang.String

---

##### `logo`<sup>Required</sup> <a name="logo" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.logo"></a>

```java
public java.lang.String getLogo();
```

- *Type:* java.lang.String

---

##### `passwordField`<sup>Required</sup> <a name="passwordField" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.passwordField"></a>

```java
public java.lang.String getPasswordField();
```

- *Type:* java.lang.String

---

##### `preconfiguredApp`<sup>Required</sup> <a name="preconfiguredApp" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.preconfiguredApp"></a>

```java
public java.lang.String getPreconfiguredApp();
```

- *Type:* java.lang.String

---

##### `redirectUrl`<sup>Required</sup> <a name="redirectUrl" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.redirectUrl"></a>

```java
public java.lang.String getRedirectUrl();
```

- *Type:* java.lang.String

---

##### `sharedPassword`<sup>Required</sup> <a name="sharedPassword" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.sharedPassword"></a>

```java
public java.lang.String getSharedPassword();
```

- *Type:* java.lang.String

---

##### `sharedUsername`<sup>Required</sup> <a name="sharedUsername" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.sharedUsername"></a>

```java
public java.lang.String getSharedUsername();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `urlRegex`<sup>Required</sup> <a name="urlRegex" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.urlRegex"></a>

```java
public java.lang.String getUrlRegex();
```

- *Type:* java.lang.String

---

##### `usernameField`<sup>Required</sup> <a name="usernameField" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.usernameField"></a>

```java
public java.lang.String getUsernameField();
```

- *Type:* java.lang.String

---

##### `userNameTemplate`<sup>Required</sup> <a name="userNameTemplate" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.userNameTemplate"></a>

```java
public java.lang.String getUserNameTemplate();
```

- *Type:* java.lang.String

---

##### `userNameTemplatePushStatus`<sup>Required</sup> <a name="userNameTemplatePushStatus" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.userNameTemplatePushStatus"></a>

```java
public java.lang.String getUserNameTemplatePushStatus();
```

- *Type:* java.lang.String

---

##### `userNameTemplateSuffix`<sup>Required</sup> <a name="userNameTemplateSuffix" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.userNameTemplateSuffix"></a>

```java
public java.lang.String getUserNameTemplateSuffix();
```

- *Type:* java.lang.String

---

##### `userNameTemplateType`<sup>Required</sup> <a name="userNameTemplateType" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.userNameTemplateType"></a>

```java
public java.lang.String getUserNameTemplateType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentials.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AppSharedCredentialsConfig <a name="AppSharedCredentialsConfig" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.app_shared_credentials.AppSharedCredentialsConfig;

AppSharedCredentialsConfig.builder()
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
    .label(java.lang.String)
//  .accessibilityErrorRedirectUrl(java.lang.String)
//  .accessibilityLoginRedirectUrl(java.lang.String)
//  .accessibilitySelfService(java.lang.Boolean)
//  .accessibilitySelfService(IResolvable)
//  .adminNote(java.lang.String)
//  .appLinksJson(java.lang.String)
//  .autoSubmitToolbar(java.lang.Boolean)
//  .autoSubmitToolbar(IResolvable)
//  .buttonField(java.lang.String)
//  .checkbox(java.lang.String)
//  .enduserNote(java.lang.String)
//  .hideIos(java.lang.Boolean)
//  .hideIos(IResolvable)
//  .hideWeb(java.lang.Boolean)
//  .hideWeb(IResolvable)
//  .id(java.lang.String)
//  .logo(java.lang.String)
//  .passwordField(java.lang.String)
//  .preconfiguredApp(java.lang.String)
//  .redirectUrl(java.lang.String)
//  .sharedPassword(java.lang.String)
//  .sharedUsername(java.lang.String)
//  .status(java.lang.String)
//  .timeouts(AppSharedCredentialsTimeouts)
//  .url(java.lang.String)
//  .urlRegex(java.lang.String)
//  .usernameField(java.lang.String)
//  .userNameTemplate(java.lang.String)
//  .userNameTemplatePushStatus(java.lang.String)
//  .userNameTemplateSuffix(java.lang.String)
//  .userNameTemplateType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.label">label</a></code> | <code>java.lang.String</code> | The Application's display name. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.accessibilityErrorRedirectUrl">accessibilityErrorRedirectUrl</a></code> | <code>java.lang.String</code> | Custom error page URL. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.accessibilityLoginRedirectUrl">accessibilityLoginRedirectUrl</a></code> | <code>java.lang.String</code> | Custom login page URL. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.accessibilitySelfService">accessibilitySelfService</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable self service. Default is `false`. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.adminNote">adminNote</a></code> | <code>java.lang.String</code> | Application notes for admins. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.appLinksJson">appLinksJson</a></code> | <code>java.lang.String</code> | Displays specific appLinks for the app. The value for each application link should be boolean. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.autoSubmitToolbar">autoSubmitToolbar</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Display auto submit toolbar. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.buttonField">buttonField</a></code> | <code>java.lang.String</code> | Login button field. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.checkbox">checkbox</a></code> | <code>java.lang.String</code> | CSS selector for the checkbox. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.enduserNote">enduserNote</a></code> | <code>java.lang.String</code> | Application notes for end users. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.hideIos">hideIos</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Do not display application icon on mobile app. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.hideWeb">hideWeb</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Do not display application icon to users. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/app_shared_credentials#id AppSharedCredentials#id}. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.logo">logo</a></code> | <code>java.lang.String</code> | Local file path to the logo. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.passwordField">passwordField</a></code> | <code>java.lang.String</code> | Login password field. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.preconfiguredApp">preconfiguredApp</a></code> | <code>java.lang.String</code> | Name of application from the Okta Integration Network, if not included a custom app will be created. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.redirectUrl">redirectUrl</a></code> | <code>java.lang.String</code> | Secondary URL of the sign-in page for this app. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.sharedPassword">sharedPassword</a></code> | <code>java.lang.String</code> | Shared password, required for certain schemes. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.sharedUsername">sharedUsername</a></code> | <code>java.lang.String</code> | Shared username, required for certain schemes. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.status">status</a></code> | <code>java.lang.String</code> | Status of application. By default, it is `ACTIVE`. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeouts">AppSharedCredentialsTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.url">url</a></code> | <code>java.lang.String</code> | The URL of the sign-in page for this app. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.urlRegex">urlRegex</a></code> | <code>java.lang.String</code> | A regular expression that further restricts url to the specified regular expression. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.usernameField">usernameField</a></code> | <code>java.lang.String</code> | Login username field. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.userNameTemplate">userNameTemplate</a></code> | <code>java.lang.String</code> | Username template. Default: `${source.login}`. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.userNameTemplatePushStatus">userNameTemplatePushStatus</a></code> | <code>java.lang.String</code> | Push username on update. Valid values: `PUSH` and `DONT_PUSH`. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.userNameTemplateSuffix">userNameTemplateSuffix</a></code> | <code>java.lang.String</code> | Username template suffix. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.userNameTemplateType">userNameTemplateType</a></code> | <code>java.lang.String</code> | Username template type. Default: `BUILT_IN`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.label"></a>

```java
public java.lang.String getLabel();
```

- *Type:* java.lang.String

The Application's display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/app_shared_credentials#label AppSharedCredentials#label}

---

##### `accessibilityErrorRedirectUrl`<sup>Optional</sup> <a name="accessibilityErrorRedirectUrl" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.accessibilityErrorRedirectUrl"></a>

```java
public java.lang.String getAccessibilityErrorRedirectUrl();
```

- *Type:* java.lang.String

Custom error page URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/app_shared_credentials#accessibility_error_redirect_url AppSharedCredentials#accessibility_error_redirect_url}

---

##### `accessibilityLoginRedirectUrl`<sup>Optional</sup> <a name="accessibilityLoginRedirectUrl" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.accessibilityLoginRedirectUrl"></a>

```java
public java.lang.String getAccessibilityLoginRedirectUrl();
```

- *Type:* java.lang.String

Custom login page URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/app_shared_credentials#accessibility_login_redirect_url AppSharedCredentials#accessibility_login_redirect_url}

---

##### `accessibilitySelfService`<sup>Optional</sup> <a name="accessibilitySelfService" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.accessibilitySelfService"></a>

```java
public java.lang.Object getAccessibilitySelfService();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable self service. Default is `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/app_shared_credentials#accessibility_self_service AppSharedCredentials#accessibility_self_service}

---

##### `adminNote`<sup>Optional</sup> <a name="adminNote" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.adminNote"></a>

```java
public java.lang.String getAdminNote();
```

- *Type:* java.lang.String

Application notes for admins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/app_shared_credentials#admin_note AppSharedCredentials#admin_note}

---

##### `appLinksJson`<sup>Optional</sup> <a name="appLinksJson" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.appLinksJson"></a>

```java
public java.lang.String getAppLinksJson();
```

- *Type:* java.lang.String

Displays specific appLinks for the app. The value for each application link should be boolean.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/app_shared_credentials#app_links_json AppSharedCredentials#app_links_json}

---

##### `autoSubmitToolbar`<sup>Optional</sup> <a name="autoSubmitToolbar" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.autoSubmitToolbar"></a>

```java
public java.lang.Object getAutoSubmitToolbar();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Display auto submit toolbar.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/app_shared_credentials#auto_submit_toolbar AppSharedCredentials#auto_submit_toolbar}

---

##### `buttonField`<sup>Optional</sup> <a name="buttonField" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.buttonField"></a>

```java
public java.lang.String getButtonField();
```

- *Type:* java.lang.String

Login button field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/app_shared_credentials#button_field AppSharedCredentials#button_field}

---

##### `checkbox`<sup>Optional</sup> <a name="checkbox" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.checkbox"></a>

```java
public java.lang.String getCheckbox();
```

- *Type:* java.lang.String

CSS selector for the checkbox.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/app_shared_credentials#checkbox AppSharedCredentials#checkbox}

---

##### `enduserNote`<sup>Optional</sup> <a name="enduserNote" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.enduserNote"></a>

```java
public java.lang.String getEnduserNote();
```

- *Type:* java.lang.String

Application notes for end users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/app_shared_credentials#enduser_note AppSharedCredentials#enduser_note}

---

##### `hideIos`<sup>Optional</sup> <a name="hideIos" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.hideIos"></a>

```java
public java.lang.Object getHideIos();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Do not display application icon on mobile app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/app_shared_credentials#hide_ios AppSharedCredentials#hide_ios}

---

##### `hideWeb`<sup>Optional</sup> <a name="hideWeb" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.hideWeb"></a>

```java
public java.lang.Object getHideWeb();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Do not display application icon to users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/app_shared_credentials#hide_web AppSharedCredentials#hide_web}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/app_shared_credentials#id AppSharedCredentials#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logo`<sup>Optional</sup> <a name="logo" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.logo"></a>

```java
public java.lang.String getLogo();
```

- *Type:* java.lang.String

Local file path to the logo.

The file must be in PNG, JPG, or GIF format, and less than 1 MB in size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/app_shared_credentials#logo AppSharedCredentials#logo}

---

##### `passwordField`<sup>Optional</sup> <a name="passwordField" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.passwordField"></a>

```java
public java.lang.String getPasswordField();
```

- *Type:* java.lang.String

Login password field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/app_shared_credentials#password_field AppSharedCredentials#password_field}

---

##### `preconfiguredApp`<sup>Optional</sup> <a name="preconfiguredApp" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.preconfiguredApp"></a>

```java
public java.lang.String getPreconfiguredApp();
```

- *Type:* java.lang.String

Name of application from the Okta Integration Network, if not included a custom app will be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/app_shared_credentials#preconfigured_app AppSharedCredentials#preconfigured_app}

---

##### `redirectUrl`<sup>Optional</sup> <a name="redirectUrl" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.redirectUrl"></a>

```java
public java.lang.String getRedirectUrl();
```

- *Type:* java.lang.String

Secondary URL of the sign-in page for this app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/app_shared_credentials#redirect_url AppSharedCredentials#redirect_url}

---

##### `sharedPassword`<sup>Optional</sup> <a name="sharedPassword" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.sharedPassword"></a>

```java
public java.lang.String getSharedPassword();
```

- *Type:* java.lang.String

Shared password, required for certain schemes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/app_shared_credentials#shared_password AppSharedCredentials#shared_password}

---

##### `sharedUsername`<sup>Optional</sup> <a name="sharedUsername" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.sharedUsername"></a>

```java
public java.lang.String getSharedUsername();
```

- *Type:* java.lang.String

Shared username, required for certain schemes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/app_shared_credentials#shared_username AppSharedCredentials#shared_username}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Status of application. By default, it is `ACTIVE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/app_shared_credentials#status AppSharedCredentials#status}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.timeouts"></a>

```java
public AppSharedCredentialsTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeouts">AppSharedCredentialsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/app_shared_credentials#timeouts AppSharedCredentials#timeouts}

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

The URL of the sign-in page for this app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/app_shared_credentials#url AppSharedCredentials#url}

---

##### `urlRegex`<sup>Optional</sup> <a name="urlRegex" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.urlRegex"></a>

```java
public java.lang.String getUrlRegex();
```

- *Type:* java.lang.String

A regular expression that further restricts url to the specified regular expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/app_shared_credentials#url_regex AppSharedCredentials#url_regex}

---

##### `usernameField`<sup>Optional</sup> <a name="usernameField" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.usernameField"></a>

```java
public java.lang.String getUsernameField();
```

- *Type:* java.lang.String

Login username field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/app_shared_credentials#username_field AppSharedCredentials#username_field}

---

##### `userNameTemplate`<sup>Optional</sup> <a name="userNameTemplate" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.userNameTemplate"></a>

```java
public java.lang.String getUserNameTemplate();
```

- *Type:* java.lang.String

Username template. Default: `${source.login}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/app_shared_credentials#user_name_template AppSharedCredentials#user_name_template}

---

##### `userNameTemplatePushStatus`<sup>Optional</sup> <a name="userNameTemplatePushStatus" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.userNameTemplatePushStatus"></a>

```java
public java.lang.String getUserNameTemplatePushStatus();
```

- *Type:* java.lang.String

Push username on update. Valid values: `PUSH` and `DONT_PUSH`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/app_shared_credentials#user_name_template_push_status AppSharedCredentials#user_name_template_push_status}

---

##### `userNameTemplateSuffix`<sup>Optional</sup> <a name="userNameTemplateSuffix" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.userNameTemplateSuffix"></a>

```java
public java.lang.String getUserNameTemplateSuffix();
```

- *Type:* java.lang.String

Username template suffix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/app_shared_credentials#user_name_template_suffix AppSharedCredentials#user_name_template_suffix}

---

##### `userNameTemplateType`<sup>Optional</sup> <a name="userNameTemplateType" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsConfig.property.userNameTemplateType"></a>

```java
public java.lang.String getUserNameTemplateType();
```

- *Type:* java.lang.String

Username template type. Default: `BUILT_IN`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/app_shared_credentials#user_name_template_type AppSharedCredentials#user_name_template_type}

---

### AppSharedCredentialsTimeouts <a name="AppSharedCredentialsTimeouts" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.app_shared_credentials.AppSharedCredentialsTimeouts;

AppSharedCredentialsTimeouts.builder()
//  .create(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/app_shared_credentials#create AppSharedCredentials#create}. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/app_shared_credentials#read AppSharedCredentials#read}. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/app_shared_credentials#update AppSharedCredentials#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/app_shared_credentials#create AppSharedCredentials#create}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/app_shared_credentials#read AppSharedCredentials#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.0/docs/resources/app_shared_credentials#update AppSharedCredentials#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppSharedCredentialsTimeoutsOutputReference <a name="AppSharedCredentialsTimeoutsOutputReference" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.app_shared_credentials.AppSharedCredentialsTimeoutsOutputReference;

new AppSharedCredentialsTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeouts">AppSharedCredentialsTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-okta.appSharedCredentials.AppSharedCredentialsTimeouts">AppSharedCredentialsTimeouts</a>

---



