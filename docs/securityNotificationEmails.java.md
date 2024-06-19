# `securityNotificationEmails` Submodule <a name="`securityNotificationEmails` Submodule" id="@cdktf/provider-okta.securityNotificationEmails"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityNotificationEmails <a name="SecurityNotificationEmails" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/security_notification_emails okta_security_notification_emails}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.security_notification_emails.SecurityNotificationEmails;

SecurityNotificationEmails.Builder.create(Construct scope, java.lang.String id)
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
//  .id(java.lang.String)
//  .reportSuspiciousActivityEnabled(java.lang.Boolean)
//  .reportSuspiciousActivityEnabled(IResolvable)
//  .sendEmailForFactorEnrollmentEnabled(java.lang.Boolean)
//  .sendEmailForFactorEnrollmentEnabled(IResolvable)
//  .sendEmailForFactorResetEnabled(java.lang.Boolean)
//  .sendEmailForFactorResetEnabled(IResolvable)
//  .sendEmailForNewDeviceEnabled(java.lang.Boolean)
//  .sendEmailForNewDeviceEnabled(IResolvable)
//  .sendEmailForPasswordChangedEnabled(java.lang.Boolean)
//  .sendEmailForPasswordChangedEnabled(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/security_notification_emails#id SecurityNotificationEmails#id}. |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.Initializer.parameter.reportSuspiciousActivityEnabled">reportSuspiciousActivityEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Notifies end users about suspicious or unrecognized activity from their account. Default is `true`. |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.Initializer.parameter.sendEmailForFactorEnrollmentEnabled">sendEmailForFactorEnrollmentEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Notifies end users of any activity on their account related to MFA factor enrollment. Default is `true`. |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.Initializer.parameter.sendEmailForFactorResetEnabled">sendEmailForFactorResetEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Notifies end users that one or more factors have been reset for their account. Default is `true`. |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.Initializer.parameter.sendEmailForNewDeviceEnabled">sendEmailForNewDeviceEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Notifies end users about new sign-on activity. Default is `true`. |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.Initializer.parameter.sendEmailForPasswordChangedEnabled">sendEmailForPasswordChangedEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Notifies end users that the password for their account has changed. Default is `true`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/security_notification_emails#id SecurityNotificationEmails#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `reportSuspiciousActivityEnabled`<sup>Optional</sup> <a name="reportSuspiciousActivityEnabled" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.Initializer.parameter.reportSuspiciousActivityEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Notifies end users about suspicious or unrecognized activity from their account. Default is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/security_notification_emails#report_suspicious_activity_enabled SecurityNotificationEmails#report_suspicious_activity_enabled}

---

##### `sendEmailForFactorEnrollmentEnabled`<sup>Optional</sup> <a name="sendEmailForFactorEnrollmentEnabled" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.Initializer.parameter.sendEmailForFactorEnrollmentEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Notifies end users of any activity on their account related to MFA factor enrollment. Default is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/security_notification_emails#send_email_for_factor_enrollment_enabled SecurityNotificationEmails#send_email_for_factor_enrollment_enabled}

---

##### `sendEmailForFactorResetEnabled`<sup>Optional</sup> <a name="sendEmailForFactorResetEnabled" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.Initializer.parameter.sendEmailForFactorResetEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Notifies end users that one or more factors have been reset for their account. Default is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/security_notification_emails#send_email_for_factor_reset_enabled SecurityNotificationEmails#send_email_for_factor_reset_enabled}

---

##### `sendEmailForNewDeviceEnabled`<sup>Optional</sup> <a name="sendEmailForNewDeviceEnabled" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.Initializer.parameter.sendEmailForNewDeviceEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Notifies end users about new sign-on activity. Default is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/security_notification_emails#send_email_for_new_device_enabled SecurityNotificationEmails#send_email_for_new_device_enabled}

---

##### `sendEmailForPasswordChangedEnabled`<sup>Optional</sup> <a name="sendEmailForPasswordChangedEnabled" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.Initializer.parameter.sendEmailForPasswordChangedEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Notifies end users that the password for their account has changed. Default is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/security_notification_emails#send_email_for_password_changed_enabled SecurityNotificationEmails#send_email_for_password_changed_enabled}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.resetReportSuspiciousActivityEnabled">resetReportSuspiciousActivityEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.resetSendEmailForFactorEnrollmentEnabled">resetSendEmailForFactorEnrollmentEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.resetSendEmailForFactorResetEnabled">resetSendEmailForFactorResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.resetSendEmailForNewDeviceEnabled">resetSendEmailForNewDeviceEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.resetSendEmailForPasswordChangedEnabled">resetSendEmailForPasswordChangedEnabled</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.resetId"></a>

```java
public void resetId()
```

##### `resetReportSuspiciousActivityEnabled` <a name="resetReportSuspiciousActivityEnabled" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.resetReportSuspiciousActivityEnabled"></a>

```java
public void resetReportSuspiciousActivityEnabled()
```

##### `resetSendEmailForFactorEnrollmentEnabled` <a name="resetSendEmailForFactorEnrollmentEnabled" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.resetSendEmailForFactorEnrollmentEnabled"></a>

```java
public void resetSendEmailForFactorEnrollmentEnabled()
```

##### `resetSendEmailForFactorResetEnabled` <a name="resetSendEmailForFactorResetEnabled" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.resetSendEmailForFactorResetEnabled"></a>

```java
public void resetSendEmailForFactorResetEnabled()
```

##### `resetSendEmailForNewDeviceEnabled` <a name="resetSendEmailForNewDeviceEnabled" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.resetSendEmailForNewDeviceEnabled"></a>

```java
public void resetSendEmailForNewDeviceEnabled()
```

##### `resetSendEmailForPasswordChangedEnabled` <a name="resetSendEmailForPasswordChangedEnabled" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.resetSendEmailForPasswordChangedEnabled"></a>

```java
public void resetSendEmailForPasswordChangedEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SecurityNotificationEmails resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.okta.security_notification_emails.SecurityNotificationEmails;

SecurityNotificationEmails.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.okta.security_notification_emails.SecurityNotificationEmails;

SecurityNotificationEmails.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.okta.security_notification_emails.SecurityNotificationEmails;

SecurityNotificationEmails.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.okta.security_notification_emails.SecurityNotificationEmails;

SecurityNotificationEmails.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SecurityNotificationEmails.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a SecurityNotificationEmails resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SecurityNotificationEmails to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SecurityNotificationEmails that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/security_notification_emails#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the SecurityNotificationEmails to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.reportSuspiciousActivityEnabledInput">reportSuspiciousActivityEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.sendEmailForFactorEnrollmentEnabledInput">sendEmailForFactorEnrollmentEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.sendEmailForFactorResetEnabledInput">sendEmailForFactorResetEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.sendEmailForNewDeviceEnabledInput">sendEmailForNewDeviceEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.sendEmailForPasswordChangedEnabledInput">sendEmailForPasswordChangedEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.reportSuspiciousActivityEnabled">reportSuspiciousActivityEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.sendEmailForFactorEnrollmentEnabled">sendEmailForFactorEnrollmentEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.sendEmailForFactorResetEnabled">sendEmailForFactorResetEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.sendEmailForNewDeviceEnabled">sendEmailForNewDeviceEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.sendEmailForPasswordChangedEnabled">sendEmailForPasswordChangedEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `reportSuspiciousActivityEnabledInput`<sup>Optional</sup> <a name="reportSuspiciousActivityEnabledInput" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.reportSuspiciousActivityEnabledInput"></a>

```java
public java.lang.Object getReportSuspiciousActivityEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sendEmailForFactorEnrollmentEnabledInput`<sup>Optional</sup> <a name="sendEmailForFactorEnrollmentEnabledInput" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.sendEmailForFactorEnrollmentEnabledInput"></a>

```java
public java.lang.Object getSendEmailForFactorEnrollmentEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sendEmailForFactorResetEnabledInput`<sup>Optional</sup> <a name="sendEmailForFactorResetEnabledInput" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.sendEmailForFactorResetEnabledInput"></a>

```java
public java.lang.Object getSendEmailForFactorResetEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sendEmailForNewDeviceEnabledInput`<sup>Optional</sup> <a name="sendEmailForNewDeviceEnabledInput" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.sendEmailForNewDeviceEnabledInput"></a>

```java
public java.lang.Object getSendEmailForNewDeviceEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sendEmailForPasswordChangedEnabledInput`<sup>Optional</sup> <a name="sendEmailForPasswordChangedEnabledInput" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.sendEmailForPasswordChangedEnabledInput"></a>

```java
public java.lang.Object getSendEmailForPasswordChangedEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `reportSuspiciousActivityEnabled`<sup>Required</sup> <a name="reportSuspiciousActivityEnabled" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.reportSuspiciousActivityEnabled"></a>

```java
public java.lang.Object getReportSuspiciousActivityEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sendEmailForFactorEnrollmentEnabled`<sup>Required</sup> <a name="sendEmailForFactorEnrollmentEnabled" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.sendEmailForFactorEnrollmentEnabled"></a>

```java
public java.lang.Object getSendEmailForFactorEnrollmentEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sendEmailForFactorResetEnabled`<sup>Required</sup> <a name="sendEmailForFactorResetEnabled" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.sendEmailForFactorResetEnabled"></a>

```java
public java.lang.Object getSendEmailForFactorResetEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sendEmailForNewDeviceEnabled`<sup>Required</sup> <a name="sendEmailForNewDeviceEnabled" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.sendEmailForNewDeviceEnabled"></a>

```java
public java.lang.Object getSendEmailForNewDeviceEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sendEmailForPasswordChangedEnabled`<sup>Required</sup> <a name="sendEmailForPasswordChangedEnabled" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.sendEmailForPasswordChangedEnabled"></a>

```java
public java.lang.Object getSendEmailForPasswordChangedEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityNotificationEmailsConfig <a name="SecurityNotificationEmailsConfig" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.security_notification_emails.SecurityNotificationEmailsConfig;

SecurityNotificationEmailsConfig.builder()
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
//  .id(java.lang.String)
//  .reportSuspiciousActivityEnabled(java.lang.Boolean)
//  .reportSuspiciousActivityEnabled(IResolvable)
//  .sendEmailForFactorEnrollmentEnabled(java.lang.Boolean)
//  .sendEmailForFactorEnrollmentEnabled(IResolvable)
//  .sendEmailForFactorResetEnabled(java.lang.Boolean)
//  .sendEmailForFactorResetEnabled(IResolvable)
//  .sendEmailForNewDeviceEnabled(java.lang.Boolean)
//  .sendEmailForNewDeviceEnabled(IResolvable)
//  .sendEmailForPasswordChangedEnabled(java.lang.Boolean)
//  .sendEmailForPasswordChangedEnabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/security_notification_emails#id SecurityNotificationEmails#id}. |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig.property.reportSuspiciousActivityEnabled">reportSuspiciousActivityEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Notifies end users about suspicious or unrecognized activity from their account. Default is `true`. |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig.property.sendEmailForFactorEnrollmentEnabled">sendEmailForFactorEnrollmentEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Notifies end users of any activity on their account related to MFA factor enrollment. Default is `true`. |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig.property.sendEmailForFactorResetEnabled">sendEmailForFactorResetEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Notifies end users that one or more factors have been reset for their account. Default is `true`. |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig.property.sendEmailForNewDeviceEnabled">sendEmailForNewDeviceEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Notifies end users about new sign-on activity. Default is `true`. |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig.property.sendEmailForPasswordChangedEnabled">sendEmailForPasswordChangedEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Notifies end users that the password for their account has changed. Default is `true`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/security_notification_emails#id SecurityNotificationEmails#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `reportSuspiciousActivityEnabled`<sup>Optional</sup> <a name="reportSuspiciousActivityEnabled" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig.property.reportSuspiciousActivityEnabled"></a>

```java
public java.lang.Object getReportSuspiciousActivityEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Notifies end users about suspicious or unrecognized activity from their account. Default is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/security_notification_emails#report_suspicious_activity_enabled SecurityNotificationEmails#report_suspicious_activity_enabled}

---

##### `sendEmailForFactorEnrollmentEnabled`<sup>Optional</sup> <a name="sendEmailForFactorEnrollmentEnabled" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig.property.sendEmailForFactorEnrollmentEnabled"></a>

```java
public java.lang.Object getSendEmailForFactorEnrollmentEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Notifies end users of any activity on their account related to MFA factor enrollment. Default is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/security_notification_emails#send_email_for_factor_enrollment_enabled SecurityNotificationEmails#send_email_for_factor_enrollment_enabled}

---

##### `sendEmailForFactorResetEnabled`<sup>Optional</sup> <a name="sendEmailForFactorResetEnabled" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig.property.sendEmailForFactorResetEnabled"></a>

```java
public java.lang.Object getSendEmailForFactorResetEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Notifies end users that one or more factors have been reset for their account. Default is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/security_notification_emails#send_email_for_factor_reset_enabled SecurityNotificationEmails#send_email_for_factor_reset_enabled}

---

##### `sendEmailForNewDeviceEnabled`<sup>Optional</sup> <a name="sendEmailForNewDeviceEnabled" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig.property.sendEmailForNewDeviceEnabled"></a>

```java
public java.lang.Object getSendEmailForNewDeviceEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Notifies end users about new sign-on activity. Default is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/security_notification_emails#send_email_for_new_device_enabled SecurityNotificationEmails#send_email_for_new_device_enabled}

---

##### `sendEmailForPasswordChangedEnabled`<sup>Optional</sup> <a name="sendEmailForPasswordChangedEnabled" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig.property.sendEmailForPasswordChangedEnabled"></a>

```java
public java.lang.Object getSendEmailForPasswordChangedEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Notifies end users that the password for their account has changed. Default is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.0/docs/resources/security_notification_emails#send_email_for_password_changed_enabled SecurityNotificationEmails#send_email_for_password_changed_enabled}

---



