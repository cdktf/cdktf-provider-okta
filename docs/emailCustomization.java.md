# `emailCustomization` Submodule <a name="`emailCustomization` Submodule" id="@cdktf/provider-okta.emailCustomization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EmailCustomization <a name="EmailCustomization" id="@cdktf/provider-okta.emailCustomization.EmailCustomization"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/email_customization okta_email_customization}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.email_customization.EmailCustomization;

EmailCustomization.Builder.create(Construct scope, java.lang.String id)
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
    .brandId(java.lang.String)
    .templateName(java.lang.String)
//  .body(java.lang.String)
//  .forceIsDefault(java.lang.String)
//  .isDefault(java.lang.Boolean)
//  .isDefault(IResolvable)
//  .language(java.lang.String)
//  .subject(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.Initializer.parameter.brandId">brandId</a></code> | <code>java.lang.String</code> | Brand ID. |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.Initializer.parameter.templateName">templateName</a></code> | <code>java.lang.String</code> | Template Name - Example values: `AccountLockout`,`ADForgotPassword`,`ADForgotPasswordDenied`,`ADSelfServiceUnlock`,`ADUserActivation`,`AuthenticatorEnrolled`,`AuthenticatorReset`,`ChangeEmailConfirmation`,`EmailChallenge`,`EmailChangeConfirmation`,`EmailFactorVerification`,`ForgotPassword`,`ForgotPasswordDenied`,`IGAReviewerEndNotification`,`IGAReviewerNotification`,`IGAReviewerPendingNotification`,`IGAReviewerReassigned`,`LDAPForgotPassword`,`LDAPForgotPasswordDenied`,`LDAPSelfServiceUnlock`,`LDAPUserActivation`,`MyAccountChangeConfirmation`,`NewSignOnNotification`,`OktaVerifyActivation`,`PasswordChanged`,`PasswordResetByAdmin`,`PendingEmailChange`,`RegistrationActivation`,`RegistrationEmailVerification`,`SelfServiceUnlock`,`SelfServiceUnlockOnUnlockedAccount`,`UserActivation`. |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.Initializer.parameter.body">body</a></code> | <code>java.lang.String</code> | The body of the customization. |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.Initializer.parameter.forceIsDefault">forceIsDefault</a></code> | <code>java.lang.String</code> | Force is_default on the create and delete by deleting all email customizations. |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.Initializer.parameter.isDefault">isDefault</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the customization is the default. |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.Initializer.parameter.language">language</a></code> | <code>java.lang.String</code> | The language supported by the customization - Example values from [supported languages](https://developer.okta.com/docs/reference/api/brands/#supported-languages). |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.Initializer.parameter.subject">subject</a></code> | <code>java.lang.String</code> | The subject of the customization. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `brandId`<sup>Required</sup> <a name="brandId" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.Initializer.parameter.brandId"></a>

- *Type:* java.lang.String

Brand ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/email_customization#brand_id EmailCustomization#brand_id}

---

##### `templateName`<sup>Required</sup> <a name="templateName" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.Initializer.parameter.templateName"></a>

- *Type:* java.lang.String

Template Name - Example values: `AccountLockout`,`ADForgotPassword`,`ADForgotPasswordDenied`,`ADSelfServiceUnlock`,`ADUserActivation`,`AuthenticatorEnrolled`,`AuthenticatorReset`,`ChangeEmailConfirmation`,`EmailChallenge`,`EmailChangeConfirmation`,`EmailFactorVerification`,`ForgotPassword`,`ForgotPasswordDenied`,`IGAReviewerEndNotification`,`IGAReviewerNotification`,`IGAReviewerPendingNotification`,`IGAReviewerReassigned`,`LDAPForgotPassword`,`LDAPForgotPasswordDenied`,`LDAPSelfServiceUnlock`,`LDAPUserActivation`,`MyAccountChangeConfirmation`,`NewSignOnNotification`,`OktaVerifyActivation`,`PasswordChanged`,`PasswordResetByAdmin`,`PendingEmailChange`,`RegistrationActivation`,`RegistrationEmailVerification`,`SelfServiceUnlock`,`SelfServiceUnlockOnUnlockedAccount`,`UserActivation`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/email_customization#template_name EmailCustomization#template_name}

---

##### `body`<sup>Optional</sup> <a name="body" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.Initializer.parameter.body"></a>

- *Type:* java.lang.String

The body of the customization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/email_customization#body EmailCustomization#body}

---

##### `forceIsDefault`<sup>Optional</sup> <a name="forceIsDefault" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.Initializer.parameter.forceIsDefault"></a>

- *Type:* java.lang.String

Force is_default on the create and delete by deleting all email customizations.

Comma separated string with values of 'create' or 'destroy' or both `create,destroy'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/email_customization#force_is_default EmailCustomization#force_is_default}

---

##### `isDefault`<sup>Optional</sup> <a name="isDefault" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.Initializer.parameter.isDefault"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the customization is the default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/email_customization#is_default EmailCustomization#is_default}

---

##### `language`<sup>Optional</sup> <a name="language" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.Initializer.parameter.language"></a>

- *Type:* java.lang.String

The language supported by the customization - Example values from [supported languages](https://developer.okta.com/docs/reference/api/brands/#supported-languages).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/email_customization#language EmailCustomization#language}

---

##### `subject`<sup>Optional</sup> <a name="subject" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.Initializer.parameter.subject"></a>

- *Type:* java.lang.String

The subject of the customization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/email_customization#subject EmailCustomization#subject}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.resetBody">resetBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.resetForceIsDefault">resetForceIsDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.resetIsDefault">resetIsDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.resetLanguage">resetLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.resetSubject">resetSubject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetBody` <a name="resetBody" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.resetBody"></a>

```java
public void resetBody()
```

##### `resetForceIsDefault` <a name="resetForceIsDefault" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.resetForceIsDefault"></a>

```java
public void resetForceIsDefault()
```

##### `resetIsDefault` <a name="resetIsDefault" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.resetIsDefault"></a>

```java
public void resetIsDefault()
```

##### `resetLanguage` <a name="resetLanguage" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.resetLanguage"></a>

```java
public void resetLanguage()
```

##### `resetSubject` <a name="resetSubject" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.resetSubject"></a>

```java
public void resetSubject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a EmailCustomization resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.okta.email_customization.EmailCustomization;

EmailCustomization.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.okta.email_customization.EmailCustomization;

EmailCustomization.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.okta.email_customization.EmailCustomization;

EmailCustomization.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.okta.email_customization.EmailCustomization;

EmailCustomization.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),EmailCustomization.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a EmailCustomization resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the EmailCustomization to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing EmailCustomization that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/email_customization#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the EmailCustomization to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.links">links</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.bodyInput">bodyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.brandIdInput">brandIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.forceIsDefaultInput">forceIsDefaultInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.isDefaultInput">isDefaultInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.languageInput">languageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.subjectInput">subjectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.templateNameInput">templateNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.body">body</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.brandId">brandId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.forceIsDefault">forceIsDefault</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.isDefault">isDefault</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.language">language</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.subject">subject</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.templateName">templateName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `links`<sup>Required</sup> <a name="links" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.links"></a>

```java
public java.lang.String getLinks();
```

- *Type:* java.lang.String

---

##### `bodyInput`<sup>Optional</sup> <a name="bodyInput" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.bodyInput"></a>

```java
public java.lang.String getBodyInput();
```

- *Type:* java.lang.String

---

##### `brandIdInput`<sup>Optional</sup> <a name="brandIdInput" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.brandIdInput"></a>

```java
public java.lang.String getBrandIdInput();
```

- *Type:* java.lang.String

---

##### `forceIsDefaultInput`<sup>Optional</sup> <a name="forceIsDefaultInput" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.forceIsDefaultInput"></a>

```java
public java.lang.String getForceIsDefaultInput();
```

- *Type:* java.lang.String

---

##### `isDefaultInput`<sup>Optional</sup> <a name="isDefaultInput" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.isDefaultInput"></a>

```java
public java.lang.Object getIsDefaultInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `languageInput`<sup>Optional</sup> <a name="languageInput" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.languageInput"></a>

```java
public java.lang.String getLanguageInput();
```

- *Type:* java.lang.String

---

##### `subjectInput`<sup>Optional</sup> <a name="subjectInput" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.subjectInput"></a>

```java
public java.lang.String getSubjectInput();
```

- *Type:* java.lang.String

---

##### `templateNameInput`<sup>Optional</sup> <a name="templateNameInput" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.templateNameInput"></a>

```java
public java.lang.String getTemplateNameInput();
```

- *Type:* java.lang.String

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.body"></a>

```java
public java.lang.String getBody();
```

- *Type:* java.lang.String

---

##### `brandId`<sup>Required</sup> <a name="brandId" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.brandId"></a>

```java
public java.lang.String getBrandId();
```

- *Type:* java.lang.String

---

##### `forceIsDefault`<sup>Required</sup> <a name="forceIsDefault" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.forceIsDefault"></a>

```java
public java.lang.String getForceIsDefault();
```

- *Type:* java.lang.String

---

##### `isDefault`<sup>Required</sup> <a name="isDefault" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.isDefault"></a>

```java
public java.lang.Object getIsDefault();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `language`<sup>Required</sup> <a name="language" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.language"></a>

```java
public java.lang.String getLanguage();
```

- *Type:* java.lang.String

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.subject"></a>

```java
public java.lang.String getSubject();
```

- *Type:* java.lang.String

---

##### `templateName`<sup>Required</sup> <a name="templateName" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.templateName"></a>

```java
public java.lang.String getTemplateName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomization.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.emailCustomization.EmailCustomization.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### EmailCustomizationConfig <a name="EmailCustomizationConfig" id="@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.email_customization.EmailCustomizationConfig;

EmailCustomizationConfig.builder()
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
    .brandId(java.lang.String)
    .templateName(java.lang.String)
//  .body(java.lang.String)
//  .forceIsDefault(java.lang.String)
//  .isDefault(java.lang.Boolean)
//  .isDefault(IResolvable)
//  .language(java.lang.String)
//  .subject(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.brandId">brandId</a></code> | <code>java.lang.String</code> | Brand ID. |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.templateName">templateName</a></code> | <code>java.lang.String</code> | Template Name - Example values: `AccountLockout`,`ADForgotPassword`,`ADForgotPasswordDenied`,`ADSelfServiceUnlock`,`ADUserActivation`,`AuthenticatorEnrolled`,`AuthenticatorReset`,`ChangeEmailConfirmation`,`EmailChallenge`,`EmailChangeConfirmation`,`EmailFactorVerification`,`ForgotPassword`,`ForgotPasswordDenied`,`IGAReviewerEndNotification`,`IGAReviewerNotification`,`IGAReviewerPendingNotification`,`IGAReviewerReassigned`,`LDAPForgotPassword`,`LDAPForgotPasswordDenied`,`LDAPSelfServiceUnlock`,`LDAPUserActivation`,`MyAccountChangeConfirmation`,`NewSignOnNotification`,`OktaVerifyActivation`,`PasswordChanged`,`PasswordResetByAdmin`,`PendingEmailChange`,`RegistrationActivation`,`RegistrationEmailVerification`,`SelfServiceUnlock`,`SelfServiceUnlockOnUnlockedAccount`,`UserActivation`. |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.body">body</a></code> | <code>java.lang.String</code> | The body of the customization. |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.forceIsDefault">forceIsDefault</a></code> | <code>java.lang.String</code> | Force is_default on the create and delete by deleting all email customizations. |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.isDefault">isDefault</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the customization is the default. |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.language">language</a></code> | <code>java.lang.String</code> | The language supported by the customization - Example values from [supported languages](https://developer.okta.com/docs/reference/api/brands/#supported-languages). |
| <code><a href="#@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.subject">subject</a></code> | <code>java.lang.String</code> | The subject of the customization. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `brandId`<sup>Required</sup> <a name="brandId" id="@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.brandId"></a>

```java
public java.lang.String getBrandId();
```

- *Type:* java.lang.String

Brand ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/email_customization#brand_id EmailCustomization#brand_id}

---

##### `templateName`<sup>Required</sup> <a name="templateName" id="@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.templateName"></a>

```java
public java.lang.String getTemplateName();
```

- *Type:* java.lang.String

Template Name - Example values: `AccountLockout`,`ADForgotPassword`,`ADForgotPasswordDenied`,`ADSelfServiceUnlock`,`ADUserActivation`,`AuthenticatorEnrolled`,`AuthenticatorReset`,`ChangeEmailConfirmation`,`EmailChallenge`,`EmailChangeConfirmation`,`EmailFactorVerification`,`ForgotPassword`,`ForgotPasswordDenied`,`IGAReviewerEndNotification`,`IGAReviewerNotification`,`IGAReviewerPendingNotification`,`IGAReviewerReassigned`,`LDAPForgotPassword`,`LDAPForgotPasswordDenied`,`LDAPSelfServiceUnlock`,`LDAPUserActivation`,`MyAccountChangeConfirmation`,`NewSignOnNotification`,`OktaVerifyActivation`,`PasswordChanged`,`PasswordResetByAdmin`,`PendingEmailChange`,`RegistrationActivation`,`RegistrationEmailVerification`,`SelfServiceUnlock`,`SelfServiceUnlockOnUnlockedAccount`,`UserActivation`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/email_customization#template_name EmailCustomization#template_name}

---

##### `body`<sup>Optional</sup> <a name="body" id="@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.body"></a>

```java
public java.lang.String getBody();
```

- *Type:* java.lang.String

The body of the customization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/email_customization#body EmailCustomization#body}

---

##### `forceIsDefault`<sup>Optional</sup> <a name="forceIsDefault" id="@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.forceIsDefault"></a>

```java
public java.lang.String getForceIsDefault();
```

- *Type:* java.lang.String

Force is_default on the create and delete by deleting all email customizations.

Comma separated string with values of 'create' or 'destroy' or both `create,destroy'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/email_customization#force_is_default EmailCustomization#force_is_default}

---

##### `isDefault`<sup>Optional</sup> <a name="isDefault" id="@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.isDefault"></a>

```java
public java.lang.Object getIsDefault();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the customization is the default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/email_customization#is_default EmailCustomization#is_default}

---

##### `language`<sup>Optional</sup> <a name="language" id="@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.language"></a>

```java
public java.lang.String getLanguage();
```

- *Type:* java.lang.String

The language supported by the customization - Example values from [supported languages](https://developer.okta.com/docs/reference/api/brands/#supported-languages).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/email_customization#language EmailCustomization#language}

---

##### `subject`<sup>Optional</sup> <a name="subject" id="@cdktf/provider-okta.emailCustomization.EmailCustomizationConfig.property.subject"></a>

```java
public java.lang.String getSubject();
```

- *Type:* java.lang.String

The subject of the customization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/email_customization#subject EmailCustomization#subject}

---



