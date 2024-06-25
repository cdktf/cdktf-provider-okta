# `policyRuleProfileEnrollment` Submodule <a name="`policyRuleProfileEnrollment` Submodule" id="@cdktf/provider-okta.policyRuleProfileEnrollment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PolicyRuleProfileEnrollment <a name="PolicyRuleProfileEnrollment" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/policy_rule_profile_enrollment okta_policy_rule_profile_enrollment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.policy_rule_profile_enrollment.PolicyRuleProfileEnrollment;

PolicyRuleProfileEnrollment.Builder.create(Construct scope, java.lang.String id)
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
    .policyId(java.lang.String)
    .unknownUserAction(java.lang.String)
//  .access(java.lang.String)
//  .emailVerification(java.lang.Boolean)
//  .emailVerification(IResolvable)
//  .id(java.lang.String)
//  .inlineHookId(java.lang.String)
//  .profileAttributes(IResolvable)
//  .profileAttributes(java.util.List<PolicyRuleProfileEnrollmentProfileAttributes>)
//  .progressiveProfilingAction(java.lang.String)
//  .targetGroupId(java.lang.String)
//  .uiSchemaId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.Initializer.parameter.policyId">policyId</a></code> | <code>java.lang.String</code> | ID of the policy. |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.Initializer.parameter.unknownUserAction">unknownUserAction</a></code> | <code>java.lang.String</code> | Which action should be taken if this User is new. Valid values are: `DENY`, `REGISTER`. |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.Initializer.parameter.access">access</a></code> | <code>java.lang.String</code> | Allow or deny access based on the rule conditions. Valid values are: `ALLOW`, `DENY`. Default: `ALLOW`. |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.Initializer.parameter.emailVerification">emailVerification</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates whether email verification should occur before access is granted. Default: `true`. |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/policy_rule_profile_enrollment#id PolicyRuleProfileEnrollment#id}. |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.Initializer.parameter.inlineHookId">inlineHookId</a></code> | <code>java.lang.String</code> | ID of a Registration Inline Hook. |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.Initializer.parameter.profileAttributes">profileAttributes</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributes">PolicyRuleProfileEnrollmentProfileAttributes</a>></code> | profile_attributes block. |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.Initializer.parameter.progressiveProfilingAction">progressiveProfilingAction</a></code> | <code>java.lang.String</code> | Enabled or disabled progressive profiling action rule conditions: `ENABLED` or `DISABLED`. Default: `DISABLED`. |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.Initializer.parameter.targetGroupId">targetGroupId</a></code> | <code>java.lang.String</code> | The ID of a Group that this User should be added to. |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.Initializer.parameter.uiSchemaId">uiSchemaId</a></code> | <code>java.lang.String</code> | Value created by the backend. If present all policy updates must include this attribute/value. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.Initializer.parameter.policyId"></a>

- *Type:* java.lang.String

ID of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/policy_rule_profile_enrollment#policy_id PolicyRuleProfileEnrollment#policy_id}

---

##### `unknownUserAction`<sup>Required</sup> <a name="unknownUserAction" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.Initializer.parameter.unknownUserAction"></a>

- *Type:* java.lang.String

Which action should be taken if this User is new. Valid values are: `DENY`, `REGISTER`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/policy_rule_profile_enrollment#unknown_user_action PolicyRuleProfileEnrollment#unknown_user_action}

---

##### `access`<sup>Optional</sup> <a name="access" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.Initializer.parameter.access"></a>

- *Type:* java.lang.String

Allow or deny access based on the rule conditions. Valid values are: `ALLOW`, `DENY`. Default: `ALLOW`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/policy_rule_profile_enrollment#access PolicyRuleProfileEnrollment#access}

---

##### `emailVerification`<sup>Optional</sup> <a name="emailVerification" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.Initializer.parameter.emailVerification"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates whether email verification should occur before access is granted. Default: `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/policy_rule_profile_enrollment#email_verification PolicyRuleProfileEnrollment#email_verification}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/policy_rule_profile_enrollment#id PolicyRuleProfileEnrollment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inlineHookId`<sup>Optional</sup> <a name="inlineHookId" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.Initializer.parameter.inlineHookId"></a>

- *Type:* java.lang.String

ID of a Registration Inline Hook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/policy_rule_profile_enrollment#inline_hook_id PolicyRuleProfileEnrollment#inline_hook_id}

---

##### `profileAttributes`<sup>Optional</sup> <a name="profileAttributes" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.Initializer.parameter.profileAttributes"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributes">PolicyRuleProfileEnrollmentProfileAttributes</a>>

profile_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/policy_rule_profile_enrollment#profile_attributes PolicyRuleProfileEnrollment#profile_attributes}

---

##### `progressiveProfilingAction`<sup>Optional</sup> <a name="progressiveProfilingAction" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.Initializer.parameter.progressiveProfilingAction"></a>

- *Type:* java.lang.String

Enabled or disabled progressive profiling action rule conditions: `ENABLED` or `DISABLED`. Default: `DISABLED`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/policy_rule_profile_enrollment#progressive_profiling_action PolicyRuleProfileEnrollment#progressive_profiling_action}

---

##### `targetGroupId`<sup>Optional</sup> <a name="targetGroupId" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.Initializer.parameter.targetGroupId"></a>

- *Type:* java.lang.String

The ID of a Group that this User should be added to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/policy_rule_profile_enrollment#target_group_id PolicyRuleProfileEnrollment#target_group_id}

---

##### `uiSchemaId`<sup>Optional</sup> <a name="uiSchemaId" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.Initializer.parameter.uiSchemaId"></a>

- *Type:* java.lang.String

Value created by the backend. If present all policy updates must include this attribute/value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/policy_rule_profile_enrollment#ui_schema_id PolicyRuleProfileEnrollment#ui_schema_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.putProfileAttributes">putProfileAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.resetAccess">resetAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.resetEmailVerification">resetEmailVerification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.resetInlineHookId">resetInlineHookId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.resetProfileAttributes">resetProfileAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.resetProgressiveProfilingAction">resetProgressiveProfilingAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.resetTargetGroupId">resetTargetGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.resetUiSchemaId">resetUiSchemaId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putProfileAttributes` <a name="putProfileAttributes" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.putProfileAttributes"></a>

```java
public void putProfileAttributes(IResolvable OR java.util.List<PolicyRuleProfileEnrollmentProfileAttributes> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.putProfileAttributes.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributes">PolicyRuleProfileEnrollmentProfileAttributes</a>>

---

##### `resetAccess` <a name="resetAccess" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.resetAccess"></a>

```java
public void resetAccess()
```

##### `resetEmailVerification` <a name="resetEmailVerification" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.resetEmailVerification"></a>

```java
public void resetEmailVerification()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.resetId"></a>

```java
public void resetId()
```

##### `resetInlineHookId` <a name="resetInlineHookId" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.resetInlineHookId"></a>

```java
public void resetInlineHookId()
```

##### `resetProfileAttributes` <a name="resetProfileAttributes" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.resetProfileAttributes"></a>

```java
public void resetProfileAttributes()
```

##### `resetProgressiveProfilingAction` <a name="resetProgressiveProfilingAction" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.resetProgressiveProfilingAction"></a>

```java
public void resetProgressiveProfilingAction()
```

##### `resetTargetGroupId` <a name="resetTargetGroupId" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.resetTargetGroupId"></a>

```java
public void resetTargetGroupId()
```

##### `resetUiSchemaId` <a name="resetUiSchemaId" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.resetUiSchemaId"></a>

```java
public void resetUiSchemaId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PolicyRuleProfileEnrollment resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.okta.policy_rule_profile_enrollment.PolicyRuleProfileEnrollment;

PolicyRuleProfileEnrollment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.okta.policy_rule_profile_enrollment.PolicyRuleProfileEnrollment;

PolicyRuleProfileEnrollment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.okta.policy_rule_profile_enrollment.PolicyRuleProfileEnrollment;

PolicyRuleProfileEnrollment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.okta.policy_rule_profile_enrollment.PolicyRuleProfileEnrollment;

PolicyRuleProfileEnrollment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),PolicyRuleProfileEnrollment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a PolicyRuleProfileEnrollment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the PolicyRuleProfileEnrollment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing PolicyRuleProfileEnrollment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/policy_rule_profile_enrollment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the PolicyRuleProfileEnrollment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.profileAttributes">profileAttributes</a></code> | <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesList">PolicyRuleProfileEnrollmentProfileAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.accessInput">accessInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.emailVerificationInput">emailVerificationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.inlineHookIdInput">inlineHookIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.policyIdInput">policyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.profileAttributesInput">profileAttributesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributes">PolicyRuleProfileEnrollmentProfileAttributes</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.progressiveProfilingActionInput">progressiveProfilingActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.targetGroupIdInput">targetGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.uiSchemaIdInput">uiSchemaIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.unknownUserActionInput">unknownUserActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.access">access</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.emailVerification">emailVerification</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.inlineHookId">inlineHookId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.policyId">policyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.progressiveProfilingAction">progressiveProfilingAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.targetGroupId">targetGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.uiSchemaId">uiSchemaId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.unknownUserAction">unknownUserAction</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `profileAttributes`<sup>Required</sup> <a name="profileAttributes" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.profileAttributes"></a>

```java
public PolicyRuleProfileEnrollmentProfileAttributesList getProfileAttributes();
```

- *Type:* <a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesList">PolicyRuleProfileEnrollmentProfileAttributesList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `accessInput`<sup>Optional</sup> <a name="accessInput" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.accessInput"></a>

```java
public java.lang.String getAccessInput();
```

- *Type:* java.lang.String

---

##### `emailVerificationInput`<sup>Optional</sup> <a name="emailVerificationInput" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.emailVerificationInput"></a>

```java
public java.lang.Object getEmailVerificationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `inlineHookIdInput`<sup>Optional</sup> <a name="inlineHookIdInput" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.inlineHookIdInput"></a>

```java
public java.lang.String getInlineHookIdInput();
```

- *Type:* java.lang.String

---

##### `policyIdInput`<sup>Optional</sup> <a name="policyIdInput" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.policyIdInput"></a>

```java
public java.lang.String getPolicyIdInput();
```

- *Type:* java.lang.String

---

##### `profileAttributesInput`<sup>Optional</sup> <a name="profileAttributesInput" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.profileAttributesInput"></a>

```java
public java.lang.Object getProfileAttributesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributes">PolicyRuleProfileEnrollmentProfileAttributes</a>>

---

##### `progressiveProfilingActionInput`<sup>Optional</sup> <a name="progressiveProfilingActionInput" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.progressiveProfilingActionInput"></a>

```java
public java.lang.String getProgressiveProfilingActionInput();
```

- *Type:* java.lang.String

---

##### `targetGroupIdInput`<sup>Optional</sup> <a name="targetGroupIdInput" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.targetGroupIdInput"></a>

```java
public java.lang.String getTargetGroupIdInput();
```

- *Type:* java.lang.String

---

##### `uiSchemaIdInput`<sup>Optional</sup> <a name="uiSchemaIdInput" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.uiSchemaIdInput"></a>

```java
public java.lang.String getUiSchemaIdInput();
```

- *Type:* java.lang.String

---

##### `unknownUserActionInput`<sup>Optional</sup> <a name="unknownUserActionInput" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.unknownUserActionInput"></a>

```java
public java.lang.String getUnknownUserActionInput();
```

- *Type:* java.lang.String

---

##### `access`<sup>Required</sup> <a name="access" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.access"></a>

```java
public java.lang.String getAccess();
```

- *Type:* java.lang.String

---

##### `emailVerification`<sup>Required</sup> <a name="emailVerification" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.emailVerification"></a>

```java
public java.lang.Object getEmailVerification();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `inlineHookId`<sup>Required</sup> <a name="inlineHookId" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.inlineHookId"></a>

```java
public java.lang.String getInlineHookId();
```

- *Type:* java.lang.String

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.policyId"></a>

```java
public java.lang.String getPolicyId();
```

- *Type:* java.lang.String

---

##### `progressiveProfilingAction`<sup>Required</sup> <a name="progressiveProfilingAction" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.progressiveProfilingAction"></a>

```java
public java.lang.String getProgressiveProfilingAction();
```

- *Type:* java.lang.String

---

##### `targetGroupId`<sup>Required</sup> <a name="targetGroupId" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.targetGroupId"></a>

```java
public java.lang.String getTargetGroupId();
```

- *Type:* java.lang.String

---

##### `uiSchemaId`<sup>Required</sup> <a name="uiSchemaId" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.uiSchemaId"></a>

```java
public java.lang.String getUiSchemaId();
```

- *Type:* java.lang.String

---

##### `unknownUserAction`<sup>Required</sup> <a name="unknownUserAction" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.unknownUserAction"></a>

```java
public java.lang.String getUnknownUserAction();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PolicyRuleProfileEnrollmentConfig <a name="PolicyRuleProfileEnrollmentConfig" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.policy_rule_profile_enrollment.PolicyRuleProfileEnrollmentConfig;

PolicyRuleProfileEnrollmentConfig.builder()
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
    .policyId(java.lang.String)
    .unknownUserAction(java.lang.String)
//  .access(java.lang.String)
//  .emailVerification(java.lang.Boolean)
//  .emailVerification(IResolvable)
//  .id(java.lang.String)
//  .inlineHookId(java.lang.String)
//  .profileAttributes(IResolvable)
//  .profileAttributes(java.util.List<PolicyRuleProfileEnrollmentProfileAttributes>)
//  .progressiveProfilingAction(java.lang.String)
//  .targetGroupId(java.lang.String)
//  .uiSchemaId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentConfig.property.policyId">policyId</a></code> | <code>java.lang.String</code> | ID of the policy. |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentConfig.property.unknownUserAction">unknownUserAction</a></code> | <code>java.lang.String</code> | Which action should be taken if this User is new. Valid values are: `DENY`, `REGISTER`. |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentConfig.property.access">access</a></code> | <code>java.lang.String</code> | Allow or deny access based on the rule conditions. Valid values are: `ALLOW`, `DENY`. Default: `ALLOW`. |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentConfig.property.emailVerification">emailVerification</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates whether email verification should occur before access is granted. Default: `true`. |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/policy_rule_profile_enrollment#id PolicyRuleProfileEnrollment#id}. |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentConfig.property.inlineHookId">inlineHookId</a></code> | <code>java.lang.String</code> | ID of a Registration Inline Hook. |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentConfig.property.profileAttributes">profileAttributes</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributes">PolicyRuleProfileEnrollmentProfileAttributes</a>></code> | profile_attributes block. |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentConfig.property.progressiveProfilingAction">progressiveProfilingAction</a></code> | <code>java.lang.String</code> | Enabled or disabled progressive profiling action rule conditions: `ENABLED` or `DISABLED`. Default: `DISABLED`. |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentConfig.property.targetGroupId">targetGroupId</a></code> | <code>java.lang.String</code> | The ID of a Group that this User should be added to. |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentConfig.property.uiSchemaId">uiSchemaId</a></code> | <code>java.lang.String</code> | Value created by the backend. If present all policy updates must include this attribute/value. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentConfig.property.policyId"></a>

```java
public java.lang.String getPolicyId();
```

- *Type:* java.lang.String

ID of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/policy_rule_profile_enrollment#policy_id PolicyRuleProfileEnrollment#policy_id}

---

##### `unknownUserAction`<sup>Required</sup> <a name="unknownUserAction" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentConfig.property.unknownUserAction"></a>

```java
public java.lang.String getUnknownUserAction();
```

- *Type:* java.lang.String

Which action should be taken if this User is new. Valid values are: `DENY`, `REGISTER`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/policy_rule_profile_enrollment#unknown_user_action PolicyRuleProfileEnrollment#unknown_user_action}

---

##### `access`<sup>Optional</sup> <a name="access" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentConfig.property.access"></a>

```java
public java.lang.String getAccess();
```

- *Type:* java.lang.String

Allow or deny access based on the rule conditions. Valid values are: `ALLOW`, `DENY`. Default: `ALLOW`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/policy_rule_profile_enrollment#access PolicyRuleProfileEnrollment#access}

---

##### `emailVerification`<sup>Optional</sup> <a name="emailVerification" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentConfig.property.emailVerification"></a>

```java
public java.lang.Object getEmailVerification();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates whether email verification should occur before access is granted. Default: `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/policy_rule_profile_enrollment#email_verification PolicyRuleProfileEnrollment#email_verification}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/policy_rule_profile_enrollment#id PolicyRuleProfileEnrollment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inlineHookId`<sup>Optional</sup> <a name="inlineHookId" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentConfig.property.inlineHookId"></a>

```java
public java.lang.String getInlineHookId();
```

- *Type:* java.lang.String

ID of a Registration Inline Hook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/policy_rule_profile_enrollment#inline_hook_id PolicyRuleProfileEnrollment#inline_hook_id}

---

##### `profileAttributes`<sup>Optional</sup> <a name="profileAttributes" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentConfig.property.profileAttributes"></a>

```java
public java.lang.Object getProfileAttributes();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributes">PolicyRuleProfileEnrollmentProfileAttributes</a>>

profile_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/policy_rule_profile_enrollment#profile_attributes PolicyRuleProfileEnrollment#profile_attributes}

---

##### `progressiveProfilingAction`<sup>Optional</sup> <a name="progressiveProfilingAction" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentConfig.property.progressiveProfilingAction"></a>

```java
public java.lang.String getProgressiveProfilingAction();
```

- *Type:* java.lang.String

Enabled or disabled progressive profiling action rule conditions: `ENABLED` or `DISABLED`. Default: `DISABLED`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/policy_rule_profile_enrollment#progressive_profiling_action PolicyRuleProfileEnrollment#progressive_profiling_action}

---

##### `targetGroupId`<sup>Optional</sup> <a name="targetGroupId" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentConfig.property.targetGroupId"></a>

```java
public java.lang.String getTargetGroupId();
```

- *Type:* java.lang.String

The ID of a Group that this User should be added to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/policy_rule_profile_enrollment#target_group_id PolicyRuleProfileEnrollment#target_group_id}

---

##### `uiSchemaId`<sup>Optional</sup> <a name="uiSchemaId" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentConfig.property.uiSchemaId"></a>

```java
public java.lang.String getUiSchemaId();
```

- *Type:* java.lang.String

Value created by the backend. If present all policy updates must include this attribute/value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/policy_rule_profile_enrollment#ui_schema_id PolicyRuleProfileEnrollment#ui_schema_id}

---

### PolicyRuleProfileEnrollmentProfileAttributes <a name="PolicyRuleProfileEnrollmentProfileAttributes" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.policy_rule_profile_enrollment.PolicyRuleProfileEnrollmentProfileAttributes;

PolicyRuleProfileEnrollmentProfileAttributes.builder()
    .label(java.lang.String)
    .name(java.lang.String)
//  .required(java.lang.Boolean)
//  .required(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributes.property.label">label</a></code> | <code>java.lang.String</code> | A display-friendly label for this property. |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributes.property.name">name</a></code> | <code>java.lang.String</code> | The name of a User Profile property. |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributes.property.required">required</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates if this property is required for enrollment. |

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributes.property.label"></a>

```java
public java.lang.String getLabel();
```

- *Type:* java.lang.String

A display-friendly label for this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/policy_rule_profile_enrollment#label PolicyRuleProfileEnrollment#label}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributes.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of a User Profile property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/policy_rule_profile_enrollment#name PolicyRuleProfileEnrollment#name}

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributes.property.required"></a>

```java
public java.lang.Object getRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates if this property is required for enrollment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.9.1/docs/resources/policy_rule_profile_enrollment#required PolicyRuleProfileEnrollment#required}

---

## Classes <a name="Classes" id="Classes"></a>

### PolicyRuleProfileEnrollmentProfileAttributesList <a name="PolicyRuleProfileEnrollmentProfileAttributesList" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.policy_rule_profile_enrollment.PolicyRuleProfileEnrollmentProfileAttributesList;

new PolicyRuleProfileEnrollmentProfileAttributesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesList.get"></a>

```java
public PolicyRuleProfileEnrollmentProfileAttributesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributes">PolicyRuleProfileEnrollmentProfileAttributes</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributes">PolicyRuleProfileEnrollmentProfileAttributes</a>>

---


### PolicyRuleProfileEnrollmentProfileAttributesOutputReference <a name="PolicyRuleProfileEnrollmentProfileAttributesOutputReference" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.policy_rule_profile_enrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference;

new PolicyRuleProfileEnrollmentProfileAttributesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.resetRequired">resetRequired</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRequired` <a name="resetRequired" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.resetRequired"></a>

```java
public void resetRequired()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.property.labelInput">labelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.property.requiredInput">requiredInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.property.label">label</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.property.required">required</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributes">PolicyRuleProfileEnrollmentProfileAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `labelInput`<sup>Optional</sup> <a name="labelInput" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.property.labelInput"></a>

```java
public java.lang.String getLabelInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `requiredInput`<sup>Optional</sup> <a name="requiredInput" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.property.requiredInput"></a>

```java
public java.lang.Object getRequiredInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.property.label"></a>

```java
public java.lang.String getLabel();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.property.required"></a>

```java
public java.lang.Object getRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-okta.policyRuleProfileEnrollment.PolicyRuleProfileEnrollmentProfileAttributes">PolicyRuleProfileEnrollmentProfileAttributes</a>

---



