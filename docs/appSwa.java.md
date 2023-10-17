# `okta_app_swa`

Refer to the Terraform Registory for docs: [`okta_app_swa`](https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_swa).

# `appSwa` Submodule <a name="`appSwa` Submodule" id="@cdktf/provider-okta.appSwa"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppSwa <a name="AppSwa" id="@cdktf/provider-okta.appSwa.AppSwa"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_swa okta_app_swa}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appSwa.AppSwa.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.app_swa.AppSwa;

AppSwa.Builder.create(Construct scope, java.lang.String id)
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
//  .status(java.lang.String)
//  .timeouts(AppSwaTimeouts)
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
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.Initializer.parameter.label">label</a></code> | <code>java.lang.String</code> | Pretty name of app. |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.Initializer.parameter.accessibilityErrorRedirectUrl">accessibilityErrorRedirectUrl</a></code> | <code>java.lang.String</code> | Custom error page URL. |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.Initializer.parameter.accessibilityLoginRedirectUrl">accessibilityLoginRedirectUrl</a></code> | <code>java.lang.String</code> | Custom login page URL. |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.Initializer.parameter.accessibilitySelfService">accessibilitySelfService</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable self service. |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.Initializer.parameter.adminNote">adminNote</a></code> | <code>java.lang.String</code> | Application notes for admins. |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.Initializer.parameter.appLinksJson">appLinksJson</a></code> | <code>java.lang.String</code> | Displays specific appLinks for the app. |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.Initializer.parameter.autoSubmitToolbar">autoSubmitToolbar</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Display auto submit toolbar. |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.Initializer.parameter.buttonField">buttonField</a></code> | <code>java.lang.String</code> | Login button field. |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.Initializer.parameter.checkbox">checkbox</a></code> | <code>java.lang.String</code> | CSS selector for the checkbox. |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.Initializer.parameter.enduserNote">enduserNote</a></code> | <code>java.lang.String</code> | Application notes for end users. |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.Initializer.parameter.hideIos">hideIos</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Do not display application icon on mobile app. |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.Initializer.parameter.hideWeb">hideWeb</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Do not display application icon to users. |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_swa#id AppSwa#id}. |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.Initializer.parameter.logo">logo</a></code> | <code>java.lang.String</code> | Local path to logo of the application. |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.Initializer.parameter.passwordField">passwordField</a></code> | <code>java.lang.String</code> | Login password field. |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.Initializer.parameter.preconfiguredApp">preconfiguredApp</a></code> | <code>java.lang.String</code> | Preconfigured app name. |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.Initializer.parameter.redirectUrl">redirectUrl</a></code> | <code>java.lang.String</code> | If going to the login page URL redirects to another page, then enter that URL here. |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.Initializer.parameter.status">status</a></code> | <code>java.lang.String</code> | Status of application. |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-okta.appSwa.AppSwaTimeouts">AppSwaTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.Initializer.parameter.url">url</a></code> | <code>java.lang.String</code> | Login URL. |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.Initializer.parameter.urlRegex">urlRegex</a></code> | <code>java.lang.String</code> | A regex that further restricts URL to the specified regex. |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.Initializer.parameter.usernameField">usernameField</a></code> | <code>java.lang.String</code> | Login username field. |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.Initializer.parameter.userNameTemplate">userNameTemplate</a></code> | <code>java.lang.String</code> | Username template. |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.Initializer.parameter.userNameTemplatePushStatus">userNameTemplatePushStatus</a></code> | <code>java.lang.String</code> | Push username on update. |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.Initializer.parameter.userNameTemplateSuffix">userNameTemplateSuffix</a></code> | <code>java.lang.String</code> | Username template suffix. |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.Initializer.parameter.userNameTemplateType">userNameTemplateType</a></code> | <code>java.lang.String</code> | Username template type. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.appSwa.AppSwa.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appSwa.AppSwa.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.appSwa.AppSwa.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.appSwa.AppSwa.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.appSwa.AppSwa.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.appSwa.AppSwa.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.appSwa.AppSwa.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appSwa.AppSwa.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.appSwa.AppSwa.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-okta.appSwa.AppSwa.Initializer.parameter.label"></a>

- *Type:* java.lang.String

Pretty name of app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_swa#label AppSwa#label}

---

##### `accessibilityErrorRedirectUrl`<sup>Optional</sup> <a name="accessibilityErrorRedirectUrl" id="@cdktf/provider-okta.appSwa.AppSwa.Initializer.parameter.accessibilityErrorRedirectUrl"></a>

- *Type:* java.lang.String

Custom error page URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_swa#accessibility_error_redirect_url AppSwa#accessibility_error_redirect_url}

---

##### `accessibilityLoginRedirectUrl`<sup>Optional</sup> <a name="accessibilityLoginRedirectUrl" id="@cdktf/provider-okta.appSwa.AppSwa.Initializer.parameter.accessibilityLoginRedirectUrl"></a>

- *Type:* java.lang.String

Custom login page URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_swa#accessibility_login_redirect_url AppSwa#accessibility_login_redirect_url}

---

##### `accessibilitySelfService`<sup>Optional</sup> <a name="accessibilitySelfService" id="@cdktf/provider-okta.appSwa.AppSwa.Initializer.parameter.accessibilitySelfService"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable self service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_swa#accessibility_self_service AppSwa#accessibility_self_service}

---

##### `adminNote`<sup>Optional</sup> <a name="adminNote" id="@cdktf/provider-okta.appSwa.AppSwa.Initializer.parameter.adminNote"></a>

- *Type:* java.lang.String

Application notes for admins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_swa#admin_note AppSwa#admin_note}

---

##### `appLinksJson`<sup>Optional</sup> <a name="appLinksJson" id="@cdktf/provider-okta.appSwa.AppSwa.Initializer.parameter.appLinksJson"></a>

- *Type:* java.lang.String

Displays specific appLinks for the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_swa#app_links_json AppSwa#app_links_json}

---

##### `autoSubmitToolbar`<sup>Optional</sup> <a name="autoSubmitToolbar" id="@cdktf/provider-okta.appSwa.AppSwa.Initializer.parameter.autoSubmitToolbar"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Display auto submit toolbar.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_swa#auto_submit_toolbar AppSwa#auto_submit_toolbar}

---

##### `buttonField`<sup>Optional</sup> <a name="buttonField" id="@cdktf/provider-okta.appSwa.AppSwa.Initializer.parameter.buttonField"></a>

- *Type:* java.lang.String

Login button field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_swa#button_field AppSwa#button_field}

---

##### `checkbox`<sup>Optional</sup> <a name="checkbox" id="@cdktf/provider-okta.appSwa.AppSwa.Initializer.parameter.checkbox"></a>

- *Type:* java.lang.String

CSS selector for the checkbox.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_swa#checkbox AppSwa#checkbox}

---

##### `enduserNote`<sup>Optional</sup> <a name="enduserNote" id="@cdktf/provider-okta.appSwa.AppSwa.Initializer.parameter.enduserNote"></a>

- *Type:* java.lang.String

Application notes for end users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_swa#enduser_note AppSwa#enduser_note}

---

##### `hideIos`<sup>Optional</sup> <a name="hideIos" id="@cdktf/provider-okta.appSwa.AppSwa.Initializer.parameter.hideIos"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Do not display application icon on mobile app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_swa#hide_ios AppSwa#hide_ios}

---

##### `hideWeb`<sup>Optional</sup> <a name="hideWeb" id="@cdktf/provider-okta.appSwa.AppSwa.Initializer.parameter.hideWeb"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Do not display application icon to users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_swa#hide_web AppSwa#hide_web}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.appSwa.AppSwa.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_swa#id AppSwa#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logo`<sup>Optional</sup> <a name="logo" id="@cdktf/provider-okta.appSwa.AppSwa.Initializer.parameter.logo"></a>

- *Type:* java.lang.String

Local path to logo of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_swa#logo AppSwa#logo}

---

##### `passwordField`<sup>Optional</sup> <a name="passwordField" id="@cdktf/provider-okta.appSwa.AppSwa.Initializer.parameter.passwordField"></a>

- *Type:* java.lang.String

Login password field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_swa#password_field AppSwa#password_field}

---

##### `preconfiguredApp`<sup>Optional</sup> <a name="preconfiguredApp" id="@cdktf/provider-okta.appSwa.AppSwa.Initializer.parameter.preconfiguredApp"></a>

- *Type:* java.lang.String

Preconfigured app name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_swa#preconfigured_app AppSwa#preconfigured_app}

---

##### `redirectUrl`<sup>Optional</sup> <a name="redirectUrl" id="@cdktf/provider-okta.appSwa.AppSwa.Initializer.parameter.redirectUrl"></a>

- *Type:* java.lang.String

If going to the login page URL redirects to another page, then enter that URL here.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_swa#redirect_url AppSwa#redirect_url}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.appSwa.AppSwa.Initializer.parameter.status"></a>

- *Type:* java.lang.String

Status of application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_swa#status AppSwa#status}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-okta.appSwa.AppSwa.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-okta.appSwa.AppSwaTimeouts">AppSwaTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_swa#timeouts AppSwa#timeouts}

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-okta.appSwa.AppSwa.Initializer.parameter.url"></a>

- *Type:* java.lang.String

Login URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_swa#url AppSwa#url}

---

##### `urlRegex`<sup>Optional</sup> <a name="urlRegex" id="@cdktf/provider-okta.appSwa.AppSwa.Initializer.parameter.urlRegex"></a>

- *Type:* java.lang.String

A regex that further restricts URL to the specified regex.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_swa#url_regex AppSwa#url_regex}

---

##### `usernameField`<sup>Optional</sup> <a name="usernameField" id="@cdktf/provider-okta.appSwa.AppSwa.Initializer.parameter.usernameField"></a>

- *Type:* java.lang.String

Login username field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_swa#username_field AppSwa#username_field}

---

##### `userNameTemplate`<sup>Optional</sup> <a name="userNameTemplate" id="@cdktf/provider-okta.appSwa.AppSwa.Initializer.parameter.userNameTemplate"></a>

- *Type:* java.lang.String

Username template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_swa#user_name_template AppSwa#user_name_template}

---

##### `userNameTemplatePushStatus`<sup>Optional</sup> <a name="userNameTemplatePushStatus" id="@cdktf/provider-okta.appSwa.AppSwa.Initializer.parameter.userNameTemplatePushStatus"></a>

- *Type:* java.lang.String

Push username on update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_swa#user_name_template_push_status AppSwa#user_name_template_push_status}

---

##### `userNameTemplateSuffix`<sup>Optional</sup> <a name="userNameTemplateSuffix" id="@cdktf/provider-okta.appSwa.AppSwa.Initializer.parameter.userNameTemplateSuffix"></a>

- *Type:* java.lang.String

Username template suffix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_swa#user_name_template_suffix AppSwa#user_name_template_suffix}

---

##### `userNameTemplateType`<sup>Optional</sup> <a name="userNameTemplateType" id="@cdktf/provider-okta.appSwa.AppSwa.Initializer.parameter.userNameTemplateType"></a>

- *Type:* java.lang.String

Username template type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_swa#user_name_template_type AppSwa#user_name_template_type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.resetAccessibilityErrorRedirectUrl">resetAccessibilityErrorRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.resetAccessibilityLoginRedirectUrl">resetAccessibilityLoginRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.resetAccessibilitySelfService">resetAccessibilitySelfService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.resetAdminNote">resetAdminNote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.resetAppLinksJson">resetAppLinksJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.resetAutoSubmitToolbar">resetAutoSubmitToolbar</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.resetButtonField">resetButtonField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.resetCheckbox">resetCheckbox</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.resetEnduserNote">resetEnduserNote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.resetHideIos">resetHideIos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.resetHideWeb">resetHideWeb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.resetLogo">resetLogo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.resetPasswordField">resetPasswordField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.resetPreconfiguredApp">resetPreconfiguredApp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.resetRedirectUrl">resetRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.resetUrl">resetUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.resetUrlRegex">resetUrlRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.resetUsernameField">resetUsernameField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.resetUserNameTemplate">resetUserNameTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.resetUserNameTemplatePushStatus">resetUserNameTemplatePushStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.resetUserNameTemplateSuffix">resetUserNameTemplateSuffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.resetUserNameTemplateType">resetUserNameTemplateType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.appSwa.AppSwa.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.appSwa.AppSwa.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.appSwa.AppSwa.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.appSwa.AppSwa.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.appSwa.AppSwa.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.appSwa.AppSwa.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.appSwa.AppSwa.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.appSwa.AppSwa.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.appSwa.AppSwa.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-okta.appSwa.AppSwa.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.appSwa.AppSwa.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.appSwa.AppSwa.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSwa.AppSwa.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.appSwa.AppSwa.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSwa.AppSwa.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.appSwa.AppSwa.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSwa.AppSwa.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.appSwa.AppSwa.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSwa.AppSwa.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.appSwa.AppSwa.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSwa.AppSwa.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.appSwa.AppSwa.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSwa.AppSwa.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.appSwa.AppSwa.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSwa.AppSwa.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.appSwa.AppSwa.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSwa.AppSwa.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.appSwa.AppSwa.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSwa.AppSwa.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-okta.appSwa.AppSwa.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appSwa.AppSwa.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appSwa.AppSwa.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.appSwa.AppSwa.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSwa.AppSwa.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-okta.appSwa.AppSwa.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.appSwa.AppSwa.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.appSwa.AppSwa.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-okta.appSwa.AppSwa.putTimeouts"></a>

```java
public void putTimeouts(AppSwaTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.appSwa.AppSwa.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-okta.appSwa.AppSwaTimeouts">AppSwaTimeouts</a>

---

##### `resetAccessibilityErrorRedirectUrl` <a name="resetAccessibilityErrorRedirectUrl" id="@cdktf/provider-okta.appSwa.AppSwa.resetAccessibilityErrorRedirectUrl"></a>

```java
public void resetAccessibilityErrorRedirectUrl()
```

##### `resetAccessibilityLoginRedirectUrl` <a name="resetAccessibilityLoginRedirectUrl" id="@cdktf/provider-okta.appSwa.AppSwa.resetAccessibilityLoginRedirectUrl"></a>

```java
public void resetAccessibilityLoginRedirectUrl()
```

##### `resetAccessibilitySelfService` <a name="resetAccessibilitySelfService" id="@cdktf/provider-okta.appSwa.AppSwa.resetAccessibilitySelfService"></a>

```java
public void resetAccessibilitySelfService()
```

##### `resetAdminNote` <a name="resetAdminNote" id="@cdktf/provider-okta.appSwa.AppSwa.resetAdminNote"></a>

```java
public void resetAdminNote()
```

##### `resetAppLinksJson` <a name="resetAppLinksJson" id="@cdktf/provider-okta.appSwa.AppSwa.resetAppLinksJson"></a>

```java
public void resetAppLinksJson()
```

##### `resetAutoSubmitToolbar` <a name="resetAutoSubmitToolbar" id="@cdktf/provider-okta.appSwa.AppSwa.resetAutoSubmitToolbar"></a>

```java
public void resetAutoSubmitToolbar()
```

##### `resetButtonField` <a name="resetButtonField" id="@cdktf/provider-okta.appSwa.AppSwa.resetButtonField"></a>

```java
public void resetButtonField()
```

##### `resetCheckbox` <a name="resetCheckbox" id="@cdktf/provider-okta.appSwa.AppSwa.resetCheckbox"></a>

```java
public void resetCheckbox()
```

##### `resetEnduserNote` <a name="resetEnduserNote" id="@cdktf/provider-okta.appSwa.AppSwa.resetEnduserNote"></a>

```java
public void resetEnduserNote()
```

##### `resetHideIos` <a name="resetHideIos" id="@cdktf/provider-okta.appSwa.AppSwa.resetHideIos"></a>

```java
public void resetHideIos()
```

##### `resetHideWeb` <a name="resetHideWeb" id="@cdktf/provider-okta.appSwa.AppSwa.resetHideWeb"></a>

```java
public void resetHideWeb()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.appSwa.AppSwa.resetId"></a>

```java
public void resetId()
```

##### `resetLogo` <a name="resetLogo" id="@cdktf/provider-okta.appSwa.AppSwa.resetLogo"></a>

```java
public void resetLogo()
```

##### `resetPasswordField` <a name="resetPasswordField" id="@cdktf/provider-okta.appSwa.AppSwa.resetPasswordField"></a>

```java
public void resetPasswordField()
```

##### `resetPreconfiguredApp` <a name="resetPreconfiguredApp" id="@cdktf/provider-okta.appSwa.AppSwa.resetPreconfiguredApp"></a>

```java
public void resetPreconfiguredApp()
```

##### `resetRedirectUrl` <a name="resetRedirectUrl" id="@cdktf/provider-okta.appSwa.AppSwa.resetRedirectUrl"></a>

```java
public void resetRedirectUrl()
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-okta.appSwa.AppSwa.resetStatus"></a>

```java
public void resetStatus()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-okta.appSwa.AppSwa.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUrl` <a name="resetUrl" id="@cdktf/provider-okta.appSwa.AppSwa.resetUrl"></a>

```java
public void resetUrl()
```

##### `resetUrlRegex` <a name="resetUrlRegex" id="@cdktf/provider-okta.appSwa.AppSwa.resetUrlRegex"></a>

```java
public void resetUrlRegex()
```

##### `resetUsernameField` <a name="resetUsernameField" id="@cdktf/provider-okta.appSwa.AppSwa.resetUsernameField"></a>

```java
public void resetUsernameField()
```

##### `resetUserNameTemplate` <a name="resetUserNameTemplate" id="@cdktf/provider-okta.appSwa.AppSwa.resetUserNameTemplate"></a>

```java
public void resetUserNameTemplate()
```

##### `resetUserNameTemplatePushStatus` <a name="resetUserNameTemplatePushStatus" id="@cdktf/provider-okta.appSwa.AppSwa.resetUserNameTemplatePushStatus"></a>

```java
public void resetUserNameTemplatePushStatus()
```

##### `resetUserNameTemplateSuffix` <a name="resetUserNameTemplateSuffix" id="@cdktf/provider-okta.appSwa.AppSwa.resetUserNameTemplateSuffix"></a>

```java
public void resetUserNameTemplateSuffix()
```

##### `resetUserNameTemplateType` <a name="resetUserNameTemplateType" id="@cdktf/provider-okta.appSwa.AppSwa.resetUserNameTemplateType"></a>

```java
public void resetUserNameTemplateType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AppSwa resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.appSwa.AppSwa.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.okta.app_swa.AppSwa;

AppSwa.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appSwa.AppSwa.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.appSwa.AppSwa.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.okta.app_swa.AppSwa;

AppSwa.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appSwa.AppSwa.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.appSwa.AppSwa.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.okta.app_swa.AppSwa;

AppSwa.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appSwa.AppSwa.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-okta.appSwa.AppSwa.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.okta.app_swa.AppSwa;

AppSwa.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AppSwa.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a AppSwa resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.appSwa.AppSwa.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-okta.appSwa.AppSwa.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AppSwa to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-okta.appSwa.AppSwa.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AppSwa that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_swa#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appSwa.AppSwa.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the AppSwa to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.logoUrl">logoUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.signOnMode">signOnMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference">AppSwaTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.accessibilityErrorRedirectUrlInput">accessibilityErrorRedirectUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.accessibilityLoginRedirectUrlInput">accessibilityLoginRedirectUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.accessibilitySelfServiceInput">accessibilitySelfServiceInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.adminNoteInput">adminNoteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.appLinksJsonInput">appLinksJsonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.autoSubmitToolbarInput">autoSubmitToolbarInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.buttonFieldInput">buttonFieldInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.checkboxInput">checkboxInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.enduserNoteInput">enduserNoteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.hideIosInput">hideIosInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.hideWebInput">hideWebInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.labelInput">labelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.logoInput">logoInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.passwordFieldInput">passwordFieldInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.preconfiguredAppInput">preconfiguredAppInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.redirectUrlInput">redirectUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-okta.appSwa.AppSwaTimeouts">AppSwaTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.urlInput">urlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.urlRegexInput">urlRegexInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.usernameFieldInput">usernameFieldInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.userNameTemplateInput">userNameTemplateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.userNameTemplatePushStatusInput">userNameTemplatePushStatusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.userNameTemplateSuffixInput">userNameTemplateSuffixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.userNameTemplateTypeInput">userNameTemplateTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.accessibilityErrorRedirectUrl">accessibilityErrorRedirectUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.accessibilityLoginRedirectUrl">accessibilityLoginRedirectUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.accessibilitySelfService">accessibilitySelfService</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.adminNote">adminNote</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.appLinksJson">appLinksJson</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.autoSubmitToolbar">autoSubmitToolbar</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.buttonField">buttonField</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.checkbox">checkbox</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.enduserNote">enduserNote</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.hideIos">hideIos</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.hideWeb">hideWeb</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.label">label</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.logo">logo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.passwordField">passwordField</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.preconfiguredApp">preconfiguredApp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.redirectUrl">redirectUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.urlRegex">urlRegex</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.usernameField">usernameField</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.userNameTemplate">userNameTemplate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.userNameTemplatePushStatus">userNameTemplatePushStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.userNameTemplateSuffix">userNameTemplateSuffix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.userNameTemplateType">userNameTemplateType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.appSwa.AppSwa.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.appSwa.AppSwa.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.appSwa.AppSwa.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.appSwa.AppSwa.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.appSwa.AppSwa.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.appSwa.AppSwa.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.appSwa.AppSwa.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.appSwa.AppSwa.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.appSwa.AppSwa.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.appSwa.AppSwa.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.appSwa.AppSwa.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.appSwa.AppSwa.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appSwa.AppSwa.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.appSwa.AppSwa.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `logoUrl`<sup>Required</sup> <a name="logoUrl" id="@cdktf/provider-okta.appSwa.AppSwa.property.logoUrl"></a>

```java
public java.lang.String getLogoUrl();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.appSwa.AppSwa.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `signOnMode`<sup>Required</sup> <a name="signOnMode" id="@cdktf/provider-okta.appSwa.AppSwa.property.signOnMode"></a>

```java
public java.lang.String getSignOnMode();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-okta.appSwa.AppSwa.property.timeouts"></a>

```java
public AppSwaTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference">AppSwaTimeoutsOutputReference</a>

---

##### `accessibilityErrorRedirectUrlInput`<sup>Optional</sup> <a name="accessibilityErrorRedirectUrlInput" id="@cdktf/provider-okta.appSwa.AppSwa.property.accessibilityErrorRedirectUrlInput"></a>

```java
public java.lang.String getAccessibilityErrorRedirectUrlInput();
```

- *Type:* java.lang.String

---

##### `accessibilityLoginRedirectUrlInput`<sup>Optional</sup> <a name="accessibilityLoginRedirectUrlInput" id="@cdktf/provider-okta.appSwa.AppSwa.property.accessibilityLoginRedirectUrlInput"></a>

```java
public java.lang.String getAccessibilityLoginRedirectUrlInput();
```

- *Type:* java.lang.String

---

##### `accessibilitySelfServiceInput`<sup>Optional</sup> <a name="accessibilitySelfServiceInput" id="@cdktf/provider-okta.appSwa.AppSwa.property.accessibilitySelfServiceInput"></a>

```java
public java.lang.Object getAccessibilitySelfServiceInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `adminNoteInput`<sup>Optional</sup> <a name="adminNoteInput" id="@cdktf/provider-okta.appSwa.AppSwa.property.adminNoteInput"></a>

```java
public java.lang.String getAdminNoteInput();
```

- *Type:* java.lang.String

---

##### `appLinksJsonInput`<sup>Optional</sup> <a name="appLinksJsonInput" id="@cdktf/provider-okta.appSwa.AppSwa.property.appLinksJsonInput"></a>

```java
public java.lang.String getAppLinksJsonInput();
```

- *Type:* java.lang.String

---

##### `autoSubmitToolbarInput`<sup>Optional</sup> <a name="autoSubmitToolbarInput" id="@cdktf/provider-okta.appSwa.AppSwa.property.autoSubmitToolbarInput"></a>

```java
public java.lang.Object getAutoSubmitToolbarInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `buttonFieldInput`<sup>Optional</sup> <a name="buttonFieldInput" id="@cdktf/provider-okta.appSwa.AppSwa.property.buttonFieldInput"></a>

```java
public java.lang.String getButtonFieldInput();
```

- *Type:* java.lang.String

---

##### `checkboxInput`<sup>Optional</sup> <a name="checkboxInput" id="@cdktf/provider-okta.appSwa.AppSwa.property.checkboxInput"></a>

```java
public java.lang.String getCheckboxInput();
```

- *Type:* java.lang.String

---

##### `enduserNoteInput`<sup>Optional</sup> <a name="enduserNoteInput" id="@cdktf/provider-okta.appSwa.AppSwa.property.enduserNoteInput"></a>

```java
public java.lang.String getEnduserNoteInput();
```

- *Type:* java.lang.String

---

##### `hideIosInput`<sup>Optional</sup> <a name="hideIosInput" id="@cdktf/provider-okta.appSwa.AppSwa.property.hideIosInput"></a>

```java
public java.lang.Object getHideIosInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hideWebInput`<sup>Optional</sup> <a name="hideWebInput" id="@cdktf/provider-okta.appSwa.AppSwa.property.hideWebInput"></a>

```java
public java.lang.Object getHideWebInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.appSwa.AppSwa.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelInput`<sup>Optional</sup> <a name="labelInput" id="@cdktf/provider-okta.appSwa.AppSwa.property.labelInput"></a>

```java
public java.lang.String getLabelInput();
```

- *Type:* java.lang.String

---

##### `logoInput`<sup>Optional</sup> <a name="logoInput" id="@cdktf/provider-okta.appSwa.AppSwa.property.logoInput"></a>

```java
public java.lang.String getLogoInput();
```

- *Type:* java.lang.String

---

##### `passwordFieldInput`<sup>Optional</sup> <a name="passwordFieldInput" id="@cdktf/provider-okta.appSwa.AppSwa.property.passwordFieldInput"></a>

```java
public java.lang.String getPasswordFieldInput();
```

- *Type:* java.lang.String

---

##### `preconfiguredAppInput`<sup>Optional</sup> <a name="preconfiguredAppInput" id="@cdktf/provider-okta.appSwa.AppSwa.property.preconfiguredAppInput"></a>

```java
public java.lang.String getPreconfiguredAppInput();
```

- *Type:* java.lang.String

---

##### `redirectUrlInput`<sup>Optional</sup> <a name="redirectUrlInput" id="@cdktf/provider-okta.appSwa.AppSwa.property.redirectUrlInput"></a>

```java
public java.lang.String getRedirectUrlInput();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-okta.appSwa.AppSwa.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-okta.appSwa.AppSwa.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-okta.appSwa.AppSwaTimeouts">AppSwaTimeouts</a>

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-okta.appSwa.AppSwa.property.urlInput"></a>

```java
public java.lang.String getUrlInput();
```

- *Type:* java.lang.String

---

##### `urlRegexInput`<sup>Optional</sup> <a name="urlRegexInput" id="@cdktf/provider-okta.appSwa.AppSwa.property.urlRegexInput"></a>

```java
public java.lang.String getUrlRegexInput();
```

- *Type:* java.lang.String

---

##### `usernameFieldInput`<sup>Optional</sup> <a name="usernameFieldInput" id="@cdktf/provider-okta.appSwa.AppSwa.property.usernameFieldInput"></a>

```java
public java.lang.String getUsernameFieldInput();
```

- *Type:* java.lang.String

---

##### `userNameTemplateInput`<sup>Optional</sup> <a name="userNameTemplateInput" id="@cdktf/provider-okta.appSwa.AppSwa.property.userNameTemplateInput"></a>

```java
public java.lang.String getUserNameTemplateInput();
```

- *Type:* java.lang.String

---

##### `userNameTemplatePushStatusInput`<sup>Optional</sup> <a name="userNameTemplatePushStatusInput" id="@cdktf/provider-okta.appSwa.AppSwa.property.userNameTemplatePushStatusInput"></a>

```java
public java.lang.String getUserNameTemplatePushStatusInput();
```

- *Type:* java.lang.String

---

##### `userNameTemplateSuffixInput`<sup>Optional</sup> <a name="userNameTemplateSuffixInput" id="@cdktf/provider-okta.appSwa.AppSwa.property.userNameTemplateSuffixInput"></a>

```java
public java.lang.String getUserNameTemplateSuffixInput();
```

- *Type:* java.lang.String

---

##### `userNameTemplateTypeInput`<sup>Optional</sup> <a name="userNameTemplateTypeInput" id="@cdktf/provider-okta.appSwa.AppSwa.property.userNameTemplateTypeInput"></a>

```java
public java.lang.String getUserNameTemplateTypeInput();
```

- *Type:* java.lang.String

---

##### `accessibilityErrorRedirectUrl`<sup>Required</sup> <a name="accessibilityErrorRedirectUrl" id="@cdktf/provider-okta.appSwa.AppSwa.property.accessibilityErrorRedirectUrl"></a>

```java
public java.lang.String getAccessibilityErrorRedirectUrl();
```

- *Type:* java.lang.String

---

##### `accessibilityLoginRedirectUrl`<sup>Required</sup> <a name="accessibilityLoginRedirectUrl" id="@cdktf/provider-okta.appSwa.AppSwa.property.accessibilityLoginRedirectUrl"></a>

```java
public java.lang.String getAccessibilityLoginRedirectUrl();
```

- *Type:* java.lang.String

---

##### `accessibilitySelfService`<sup>Required</sup> <a name="accessibilitySelfService" id="@cdktf/provider-okta.appSwa.AppSwa.property.accessibilitySelfService"></a>

```java
public java.lang.Object getAccessibilitySelfService();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `adminNote`<sup>Required</sup> <a name="adminNote" id="@cdktf/provider-okta.appSwa.AppSwa.property.adminNote"></a>

```java
public java.lang.String getAdminNote();
```

- *Type:* java.lang.String

---

##### `appLinksJson`<sup>Required</sup> <a name="appLinksJson" id="@cdktf/provider-okta.appSwa.AppSwa.property.appLinksJson"></a>

```java
public java.lang.String getAppLinksJson();
```

- *Type:* java.lang.String

---

##### `autoSubmitToolbar`<sup>Required</sup> <a name="autoSubmitToolbar" id="@cdktf/provider-okta.appSwa.AppSwa.property.autoSubmitToolbar"></a>

```java
public java.lang.Object getAutoSubmitToolbar();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `buttonField`<sup>Required</sup> <a name="buttonField" id="@cdktf/provider-okta.appSwa.AppSwa.property.buttonField"></a>

```java
public java.lang.String getButtonField();
```

- *Type:* java.lang.String

---

##### `checkbox`<sup>Required</sup> <a name="checkbox" id="@cdktf/provider-okta.appSwa.AppSwa.property.checkbox"></a>

```java
public java.lang.String getCheckbox();
```

- *Type:* java.lang.String

---

##### `enduserNote`<sup>Required</sup> <a name="enduserNote" id="@cdktf/provider-okta.appSwa.AppSwa.property.enduserNote"></a>

```java
public java.lang.String getEnduserNote();
```

- *Type:* java.lang.String

---

##### `hideIos`<sup>Required</sup> <a name="hideIos" id="@cdktf/provider-okta.appSwa.AppSwa.property.hideIos"></a>

```java
public java.lang.Object getHideIos();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hideWeb`<sup>Required</sup> <a name="hideWeb" id="@cdktf/provider-okta.appSwa.AppSwa.property.hideWeb"></a>

```java
public java.lang.Object getHideWeb();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appSwa.AppSwa.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-okta.appSwa.AppSwa.property.label"></a>

```java
public java.lang.String getLabel();
```

- *Type:* java.lang.String

---

##### `logo`<sup>Required</sup> <a name="logo" id="@cdktf/provider-okta.appSwa.AppSwa.property.logo"></a>

```java
public java.lang.String getLogo();
```

- *Type:* java.lang.String

---

##### `passwordField`<sup>Required</sup> <a name="passwordField" id="@cdktf/provider-okta.appSwa.AppSwa.property.passwordField"></a>

```java
public java.lang.String getPasswordField();
```

- *Type:* java.lang.String

---

##### `preconfiguredApp`<sup>Required</sup> <a name="preconfiguredApp" id="@cdktf/provider-okta.appSwa.AppSwa.property.preconfiguredApp"></a>

```java
public java.lang.String getPreconfiguredApp();
```

- *Type:* java.lang.String

---

##### `redirectUrl`<sup>Required</sup> <a name="redirectUrl" id="@cdktf/provider-okta.appSwa.AppSwa.property.redirectUrl"></a>

```java
public java.lang.String getRedirectUrl();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.appSwa.AppSwa.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-okta.appSwa.AppSwa.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `urlRegex`<sup>Required</sup> <a name="urlRegex" id="@cdktf/provider-okta.appSwa.AppSwa.property.urlRegex"></a>

```java
public java.lang.String getUrlRegex();
```

- *Type:* java.lang.String

---

##### `usernameField`<sup>Required</sup> <a name="usernameField" id="@cdktf/provider-okta.appSwa.AppSwa.property.usernameField"></a>

```java
public java.lang.String getUsernameField();
```

- *Type:* java.lang.String

---

##### `userNameTemplate`<sup>Required</sup> <a name="userNameTemplate" id="@cdktf/provider-okta.appSwa.AppSwa.property.userNameTemplate"></a>

```java
public java.lang.String getUserNameTemplate();
```

- *Type:* java.lang.String

---

##### `userNameTemplatePushStatus`<sup>Required</sup> <a name="userNameTemplatePushStatus" id="@cdktf/provider-okta.appSwa.AppSwa.property.userNameTemplatePushStatus"></a>

```java
public java.lang.String getUserNameTemplatePushStatus();
```

- *Type:* java.lang.String

---

##### `userNameTemplateSuffix`<sup>Required</sup> <a name="userNameTemplateSuffix" id="@cdktf/provider-okta.appSwa.AppSwa.property.userNameTemplateSuffix"></a>

```java
public java.lang.String getUserNameTemplateSuffix();
```

- *Type:* java.lang.String

---

##### `userNameTemplateType`<sup>Required</sup> <a name="userNameTemplateType" id="@cdktf/provider-okta.appSwa.AppSwa.property.userNameTemplateType"></a>

```java
public java.lang.String getUserNameTemplateType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwa.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.appSwa.AppSwa.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AppSwaConfig <a name="AppSwaConfig" id="@cdktf/provider-okta.appSwa.AppSwaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appSwa.AppSwaConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.app_swa.AppSwaConfig;

AppSwaConfig.builder()
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
//  .status(java.lang.String)
//  .timeouts(AppSwaTimeouts)
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
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaConfig.property.label">label</a></code> | <code>java.lang.String</code> | Pretty name of app. |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaConfig.property.accessibilityErrorRedirectUrl">accessibilityErrorRedirectUrl</a></code> | <code>java.lang.String</code> | Custom error page URL. |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaConfig.property.accessibilityLoginRedirectUrl">accessibilityLoginRedirectUrl</a></code> | <code>java.lang.String</code> | Custom login page URL. |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaConfig.property.accessibilitySelfService">accessibilitySelfService</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable self service. |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaConfig.property.adminNote">adminNote</a></code> | <code>java.lang.String</code> | Application notes for admins. |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaConfig.property.appLinksJson">appLinksJson</a></code> | <code>java.lang.String</code> | Displays specific appLinks for the app. |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaConfig.property.autoSubmitToolbar">autoSubmitToolbar</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Display auto submit toolbar. |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaConfig.property.buttonField">buttonField</a></code> | <code>java.lang.String</code> | Login button field. |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaConfig.property.checkbox">checkbox</a></code> | <code>java.lang.String</code> | CSS selector for the checkbox. |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaConfig.property.enduserNote">enduserNote</a></code> | <code>java.lang.String</code> | Application notes for end users. |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaConfig.property.hideIos">hideIos</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Do not display application icon on mobile app. |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaConfig.property.hideWeb">hideWeb</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Do not display application icon to users. |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_swa#id AppSwa#id}. |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaConfig.property.logo">logo</a></code> | <code>java.lang.String</code> | Local path to logo of the application. |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaConfig.property.passwordField">passwordField</a></code> | <code>java.lang.String</code> | Login password field. |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaConfig.property.preconfiguredApp">preconfiguredApp</a></code> | <code>java.lang.String</code> | Preconfigured app name. |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaConfig.property.redirectUrl">redirectUrl</a></code> | <code>java.lang.String</code> | If going to the login page URL redirects to another page, then enter that URL here. |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaConfig.property.status">status</a></code> | <code>java.lang.String</code> | Status of application. |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-okta.appSwa.AppSwaTimeouts">AppSwaTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaConfig.property.url">url</a></code> | <code>java.lang.String</code> | Login URL. |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaConfig.property.urlRegex">urlRegex</a></code> | <code>java.lang.String</code> | A regex that further restricts URL to the specified regex. |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaConfig.property.usernameField">usernameField</a></code> | <code>java.lang.String</code> | Login username field. |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaConfig.property.userNameTemplate">userNameTemplate</a></code> | <code>java.lang.String</code> | Username template. |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaConfig.property.userNameTemplatePushStatus">userNameTemplatePushStatus</a></code> | <code>java.lang.String</code> | Push username on update. |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaConfig.property.userNameTemplateSuffix">userNameTemplateSuffix</a></code> | <code>java.lang.String</code> | Username template suffix. |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaConfig.property.userNameTemplateType">userNameTemplateType</a></code> | <code>java.lang.String</code> | Username template type. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.appSwa.AppSwaConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.appSwa.AppSwaConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.appSwa.AppSwaConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.appSwa.AppSwaConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.appSwa.AppSwaConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appSwa.AppSwaConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.appSwa.AppSwaConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-okta.appSwa.AppSwaConfig.property.label"></a>

```java
public java.lang.String getLabel();
```

- *Type:* java.lang.String

Pretty name of app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_swa#label AppSwa#label}

---

##### `accessibilityErrorRedirectUrl`<sup>Optional</sup> <a name="accessibilityErrorRedirectUrl" id="@cdktf/provider-okta.appSwa.AppSwaConfig.property.accessibilityErrorRedirectUrl"></a>

```java
public java.lang.String getAccessibilityErrorRedirectUrl();
```

- *Type:* java.lang.String

Custom error page URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_swa#accessibility_error_redirect_url AppSwa#accessibility_error_redirect_url}

---

##### `accessibilityLoginRedirectUrl`<sup>Optional</sup> <a name="accessibilityLoginRedirectUrl" id="@cdktf/provider-okta.appSwa.AppSwaConfig.property.accessibilityLoginRedirectUrl"></a>

```java
public java.lang.String getAccessibilityLoginRedirectUrl();
```

- *Type:* java.lang.String

Custom login page URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_swa#accessibility_login_redirect_url AppSwa#accessibility_login_redirect_url}

---

##### `accessibilitySelfService`<sup>Optional</sup> <a name="accessibilitySelfService" id="@cdktf/provider-okta.appSwa.AppSwaConfig.property.accessibilitySelfService"></a>

```java
public java.lang.Object getAccessibilitySelfService();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable self service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_swa#accessibility_self_service AppSwa#accessibility_self_service}

---

##### `adminNote`<sup>Optional</sup> <a name="adminNote" id="@cdktf/provider-okta.appSwa.AppSwaConfig.property.adminNote"></a>

```java
public java.lang.String getAdminNote();
```

- *Type:* java.lang.String

Application notes for admins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_swa#admin_note AppSwa#admin_note}

---

##### `appLinksJson`<sup>Optional</sup> <a name="appLinksJson" id="@cdktf/provider-okta.appSwa.AppSwaConfig.property.appLinksJson"></a>

```java
public java.lang.String getAppLinksJson();
```

- *Type:* java.lang.String

Displays specific appLinks for the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_swa#app_links_json AppSwa#app_links_json}

---

##### `autoSubmitToolbar`<sup>Optional</sup> <a name="autoSubmitToolbar" id="@cdktf/provider-okta.appSwa.AppSwaConfig.property.autoSubmitToolbar"></a>

```java
public java.lang.Object getAutoSubmitToolbar();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Display auto submit toolbar.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_swa#auto_submit_toolbar AppSwa#auto_submit_toolbar}

---

##### `buttonField`<sup>Optional</sup> <a name="buttonField" id="@cdktf/provider-okta.appSwa.AppSwaConfig.property.buttonField"></a>

```java
public java.lang.String getButtonField();
```

- *Type:* java.lang.String

Login button field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_swa#button_field AppSwa#button_field}

---

##### `checkbox`<sup>Optional</sup> <a name="checkbox" id="@cdktf/provider-okta.appSwa.AppSwaConfig.property.checkbox"></a>

```java
public java.lang.String getCheckbox();
```

- *Type:* java.lang.String

CSS selector for the checkbox.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_swa#checkbox AppSwa#checkbox}

---

##### `enduserNote`<sup>Optional</sup> <a name="enduserNote" id="@cdktf/provider-okta.appSwa.AppSwaConfig.property.enduserNote"></a>

```java
public java.lang.String getEnduserNote();
```

- *Type:* java.lang.String

Application notes for end users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_swa#enduser_note AppSwa#enduser_note}

---

##### `hideIos`<sup>Optional</sup> <a name="hideIos" id="@cdktf/provider-okta.appSwa.AppSwaConfig.property.hideIos"></a>

```java
public java.lang.Object getHideIos();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Do not display application icon on mobile app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_swa#hide_ios AppSwa#hide_ios}

---

##### `hideWeb`<sup>Optional</sup> <a name="hideWeb" id="@cdktf/provider-okta.appSwa.AppSwaConfig.property.hideWeb"></a>

```java
public java.lang.Object getHideWeb();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Do not display application icon to users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_swa#hide_web AppSwa#hide_web}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.appSwa.AppSwaConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_swa#id AppSwa#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logo`<sup>Optional</sup> <a name="logo" id="@cdktf/provider-okta.appSwa.AppSwaConfig.property.logo"></a>

```java
public java.lang.String getLogo();
```

- *Type:* java.lang.String

Local path to logo of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_swa#logo AppSwa#logo}

---

##### `passwordField`<sup>Optional</sup> <a name="passwordField" id="@cdktf/provider-okta.appSwa.AppSwaConfig.property.passwordField"></a>

```java
public java.lang.String getPasswordField();
```

- *Type:* java.lang.String

Login password field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_swa#password_field AppSwa#password_field}

---

##### `preconfiguredApp`<sup>Optional</sup> <a name="preconfiguredApp" id="@cdktf/provider-okta.appSwa.AppSwaConfig.property.preconfiguredApp"></a>

```java
public java.lang.String getPreconfiguredApp();
```

- *Type:* java.lang.String

Preconfigured app name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_swa#preconfigured_app AppSwa#preconfigured_app}

---

##### `redirectUrl`<sup>Optional</sup> <a name="redirectUrl" id="@cdktf/provider-okta.appSwa.AppSwaConfig.property.redirectUrl"></a>

```java
public java.lang.String getRedirectUrl();
```

- *Type:* java.lang.String

If going to the login page URL redirects to another page, then enter that URL here.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_swa#redirect_url AppSwa#redirect_url}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.appSwa.AppSwaConfig.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Status of application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_swa#status AppSwa#status}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-okta.appSwa.AppSwaConfig.property.timeouts"></a>

```java
public AppSwaTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-okta.appSwa.AppSwaTimeouts">AppSwaTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_swa#timeouts AppSwa#timeouts}

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-okta.appSwa.AppSwaConfig.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

Login URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_swa#url AppSwa#url}

---

##### `urlRegex`<sup>Optional</sup> <a name="urlRegex" id="@cdktf/provider-okta.appSwa.AppSwaConfig.property.urlRegex"></a>

```java
public java.lang.String getUrlRegex();
```

- *Type:* java.lang.String

A regex that further restricts URL to the specified regex.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_swa#url_regex AppSwa#url_regex}

---

##### `usernameField`<sup>Optional</sup> <a name="usernameField" id="@cdktf/provider-okta.appSwa.AppSwaConfig.property.usernameField"></a>

```java
public java.lang.String getUsernameField();
```

- *Type:* java.lang.String

Login username field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_swa#username_field AppSwa#username_field}

---

##### `userNameTemplate`<sup>Optional</sup> <a name="userNameTemplate" id="@cdktf/provider-okta.appSwa.AppSwaConfig.property.userNameTemplate"></a>

```java
public java.lang.String getUserNameTemplate();
```

- *Type:* java.lang.String

Username template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_swa#user_name_template AppSwa#user_name_template}

---

##### `userNameTemplatePushStatus`<sup>Optional</sup> <a name="userNameTemplatePushStatus" id="@cdktf/provider-okta.appSwa.AppSwaConfig.property.userNameTemplatePushStatus"></a>

```java
public java.lang.String getUserNameTemplatePushStatus();
```

- *Type:* java.lang.String

Push username on update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_swa#user_name_template_push_status AppSwa#user_name_template_push_status}

---

##### `userNameTemplateSuffix`<sup>Optional</sup> <a name="userNameTemplateSuffix" id="@cdktf/provider-okta.appSwa.AppSwaConfig.property.userNameTemplateSuffix"></a>

```java
public java.lang.String getUserNameTemplateSuffix();
```

- *Type:* java.lang.String

Username template suffix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_swa#user_name_template_suffix AppSwa#user_name_template_suffix}

---

##### `userNameTemplateType`<sup>Optional</sup> <a name="userNameTemplateType" id="@cdktf/provider-okta.appSwa.AppSwaConfig.property.userNameTemplateType"></a>

```java
public java.lang.String getUserNameTemplateType();
```

- *Type:* java.lang.String

Username template type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_swa#user_name_template_type AppSwa#user_name_template_type}

---

### AppSwaTimeouts <a name="AppSwaTimeouts" id="@cdktf/provider-okta.appSwa.AppSwaTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appSwa.AppSwaTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.app_swa.AppSwaTimeouts;

AppSwaTimeouts.builder()
//  .create(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_swa#create AppSwa#create}. |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_swa#read AppSwa#read}. |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_swa#update AppSwa#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-okta.appSwa.AppSwaTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_swa#create AppSwa#create}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-okta.appSwa.AppSwaTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_swa#read AppSwa#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-okta.appSwa.AppSwaTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/app_swa#update AppSwa#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppSwaTimeoutsOutputReference <a name="AppSwaTimeoutsOutputReference" id="@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.app_swa.AppSwaTimeoutsOutputReference;

new AppSwaTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-okta.appSwa.AppSwaTimeouts">AppSwaTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.appSwa.AppSwaTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-okta.appSwa.AppSwaTimeouts">AppSwaTimeouts</a>

---



