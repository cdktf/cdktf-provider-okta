# `okta_policy_rule_password`

Refer to the Terraform Registory for docs: [`okta_policy_rule_password`](https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_password).

# `policyRulePassword` Submodule <a name="`policyRulePassword` Submodule" id="@cdktf/provider-okta.policyRulePassword"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PolicyRulePassword <a name="PolicyRulePassword" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePassword"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_password okta_policy_rule_password}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.policy_rule_password.PolicyRulePassword;

PolicyRulePassword.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
//  .id(java.lang.String)
//  .networkConnection(java.lang.String)
//  .networkExcludes(java.util.List<java.lang.String>)
//  .networkIncludes(java.util.List<java.lang.String>)
//  .passwordChange(java.lang.String)
//  .passwordReset(java.lang.String)
//  .passwordUnlock(java.lang.String)
//  .policyId(java.lang.String)
//  .priority(java.lang.Number)
//  .status(java.lang.String)
//  .usersExcluded(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Policy Rule Name. |
| <code><a href="#@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_password#id PolicyRulePassword#id}. |
| <code><a href="#@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.Initializer.parameter.networkConnection">networkConnection</a></code> | <code>java.lang.String</code> | Network selection mode: ANYWHERE, ZONE, ON_NETWORK, or OFF_NETWORK. |
| <code><a href="#@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.Initializer.parameter.networkExcludes">networkExcludes</a></code> | <code>java.util.List<java.lang.String></code> | The zones to exclude. |
| <code><a href="#@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.Initializer.parameter.networkIncludes">networkIncludes</a></code> | <code>java.util.List<java.lang.String></code> | The zones to include. |
| <code><a href="#@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.Initializer.parameter.passwordChange">passwordChange</a></code> | <code>java.lang.String</code> | Allow or deny a user to change their password: ALLOW or DENY. Default = ALLOW. |
| <code><a href="#@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.Initializer.parameter.passwordReset">passwordReset</a></code> | <code>java.lang.String</code> | Allow or deny a user to reset their password: ALLOW or DENY. Default = ALLOW. |
| <code><a href="#@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.Initializer.parameter.passwordUnlock">passwordUnlock</a></code> | <code>java.lang.String</code> | Allow or deny a user to unlock. Default = DENY. |
| <code><a href="#@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.Initializer.parameter.policyId">policyId</a></code> | <code>java.lang.String</code> | Policy ID of the Rule. |
| <code><a href="#@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.Initializer.parameter.priority">priority</a></code> | <code>java.lang.Number</code> | Policy Rule Priority, this attribute can be set to a valid priority. |
| <code><a href="#@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.Initializer.parameter.status">status</a></code> | <code>java.lang.String</code> | Policy Rule Status: ACTIVE or INACTIVE. |
| <code><a href="#@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.Initializer.parameter.usersExcluded">usersExcluded</a></code> | <code>java.util.List<java.lang.String></code> | Set of User IDs to Exclude. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Policy Rule Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_password#name PolicyRulePassword#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_password#id PolicyRulePassword#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `networkConnection`<sup>Optional</sup> <a name="networkConnection" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.Initializer.parameter.networkConnection"></a>

- *Type:* java.lang.String

Network selection mode: ANYWHERE, ZONE, ON_NETWORK, or OFF_NETWORK.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_password#network_connection PolicyRulePassword#network_connection}

---

##### `networkExcludes`<sup>Optional</sup> <a name="networkExcludes" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.Initializer.parameter.networkExcludes"></a>

- *Type:* java.util.List<java.lang.String>

The zones to exclude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_password#network_excludes PolicyRulePassword#network_excludes}

---

##### `networkIncludes`<sup>Optional</sup> <a name="networkIncludes" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.Initializer.parameter.networkIncludes"></a>

- *Type:* java.util.List<java.lang.String>

The zones to include.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_password#network_includes PolicyRulePassword#network_includes}

---

##### `passwordChange`<sup>Optional</sup> <a name="passwordChange" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.Initializer.parameter.passwordChange"></a>

- *Type:* java.lang.String

Allow or deny a user to change their password: ALLOW or DENY. Default = ALLOW.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_password#password_change PolicyRulePassword#password_change}

---

##### `passwordReset`<sup>Optional</sup> <a name="passwordReset" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.Initializer.parameter.passwordReset"></a>

- *Type:* java.lang.String

Allow or deny a user to reset their password: ALLOW or DENY. Default = ALLOW.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_password#password_reset PolicyRulePassword#password_reset}

---

##### `passwordUnlock`<sup>Optional</sup> <a name="passwordUnlock" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.Initializer.parameter.passwordUnlock"></a>

- *Type:* java.lang.String

Allow or deny a user to unlock. Default = DENY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_password#password_unlock PolicyRulePassword#password_unlock}

---

##### `policyId`<sup>Optional</sup> <a name="policyId" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.Initializer.parameter.policyId"></a>

- *Type:* java.lang.String

Policy ID of the Rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_password#policy_id PolicyRulePassword#policy_id}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.Initializer.parameter.priority"></a>

- *Type:* java.lang.Number

Policy Rule Priority, this attribute can be set to a valid priority.

To avoid endless diff situation we error if an invalid priority is provided. API defaults it to the last (lowest) if not there.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_password#priority PolicyRulePassword#priority}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.Initializer.parameter.status"></a>

- *Type:* java.lang.String

Policy Rule Status: ACTIVE or INACTIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_password#status PolicyRulePassword#status}

---

##### `usersExcluded`<sup>Optional</sup> <a name="usersExcluded" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.Initializer.parameter.usersExcluded"></a>

- *Type:* java.util.List<java.lang.String>

Set of User IDs to Exclude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_password#users_excluded PolicyRulePassword#users_excluded}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.resetNetworkConnection">resetNetworkConnection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.resetNetworkExcludes">resetNetworkExcludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.resetNetworkIncludes">resetNetworkIncludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.resetPasswordChange">resetPasswordChange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.resetPasswordReset">resetPasswordReset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.resetPasswordUnlock">resetPasswordUnlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.resetPolicyId">resetPolicyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.resetUsersExcluded">resetUsersExcluded</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.resetId"></a>

```java
public void resetId()
```

##### `resetNetworkConnection` <a name="resetNetworkConnection" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.resetNetworkConnection"></a>

```java
public void resetNetworkConnection()
```

##### `resetNetworkExcludes` <a name="resetNetworkExcludes" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.resetNetworkExcludes"></a>

```java
public void resetNetworkExcludes()
```

##### `resetNetworkIncludes` <a name="resetNetworkIncludes" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.resetNetworkIncludes"></a>

```java
public void resetNetworkIncludes()
```

##### `resetPasswordChange` <a name="resetPasswordChange" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.resetPasswordChange"></a>

```java
public void resetPasswordChange()
```

##### `resetPasswordReset` <a name="resetPasswordReset" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.resetPasswordReset"></a>

```java
public void resetPasswordReset()
```

##### `resetPasswordUnlock` <a name="resetPasswordUnlock" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.resetPasswordUnlock"></a>

```java
public void resetPasswordUnlock()
```

##### `resetPolicyId` <a name="resetPolicyId" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.resetPolicyId"></a>

```java
public void resetPolicyId()
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.resetPriority"></a>

```java
public void resetPriority()
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.resetStatus"></a>

```java
public void resetStatus()
```

##### `resetUsersExcluded` <a name="resetUsersExcluded" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.resetUsersExcluded"></a>

```java
public void resetUsersExcluded()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.okta.policy_rule_password.PolicyRulePassword;

PolicyRulePassword.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.okta.policy_rule_password.PolicyRulePassword;

PolicyRulePassword.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.okta.policy_rule_password.PolicyRulePassword;

PolicyRulePassword.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.property.networkConnectionInput">networkConnectionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.property.networkExcludesInput">networkExcludesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.property.networkIncludesInput">networkIncludesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.property.passwordChangeInput">passwordChangeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.property.passwordResetInput">passwordResetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.property.passwordUnlockInput">passwordUnlockInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.property.policyIdInput">policyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.property.usersExcludedInput">usersExcludedInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.property.networkConnection">networkConnection</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.property.networkExcludes">networkExcludes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.property.networkIncludes">networkIncludes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.property.passwordChange">passwordChange</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.property.passwordReset">passwordReset</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.property.passwordUnlock">passwordUnlock</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.property.policyId">policyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.property.usersExcluded">usersExcluded</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkConnectionInput`<sup>Optional</sup> <a name="networkConnectionInput" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.property.networkConnectionInput"></a>

```java
public java.lang.String getNetworkConnectionInput();
```

- *Type:* java.lang.String

---

##### `networkExcludesInput`<sup>Optional</sup> <a name="networkExcludesInput" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.property.networkExcludesInput"></a>

```java
public java.util.List<java.lang.String> getNetworkExcludesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `networkIncludesInput`<sup>Optional</sup> <a name="networkIncludesInput" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.property.networkIncludesInput"></a>

```java
public java.util.List<java.lang.String> getNetworkIncludesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `passwordChangeInput`<sup>Optional</sup> <a name="passwordChangeInput" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.property.passwordChangeInput"></a>

```java
public java.lang.String getPasswordChangeInput();
```

- *Type:* java.lang.String

---

##### `passwordResetInput`<sup>Optional</sup> <a name="passwordResetInput" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.property.passwordResetInput"></a>

```java
public java.lang.String getPasswordResetInput();
```

- *Type:* java.lang.String

---

##### `passwordUnlockInput`<sup>Optional</sup> <a name="passwordUnlockInput" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.property.passwordUnlockInput"></a>

```java
public java.lang.String getPasswordUnlockInput();
```

- *Type:* java.lang.String

---

##### `policyIdInput`<sup>Optional</sup> <a name="policyIdInput" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.property.policyIdInput"></a>

```java
public java.lang.String getPolicyIdInput();
```

- *Type:* java.lang.String

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `usersExcludedInput`<sup>Optional</sup> <a name="usersExcludedInput" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.property.usersExcludedInput"></a>

```java
public java.util.List<java.lang.String> getUsersExcludedInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `networkConnection`<sup>Required</sup> <a name="networkConnection" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.property.networkConnection"></a>

```java
public java.lang.String getNetworkConnection();
```

- *Type:* java.lang.String

---

##### `networkExcludes`<sup>Required</sup> <a name="networkExcludes" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.property.networkExcludes"></a>

```java
public java.util.List<java.lang.String> getNetworkExcludes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `networkIncludes`<sup>Required</sup> <a name="networkIncludes" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.property.networkIncludes"></a>

```java
public java.util.List<java.lang.String> getNetworkIncludes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `passwordChange`<sup>Required</sup> <a name="passwordChange" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.property.passwordChange"></a>

```java
public java.lang.String getPasswordChange();
```

- *Type:* java.lang.String

---

##### `passwordReset`<sup>Required</sup> <a name="passwordReset" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.property.passwordReset"></a>

```java
public java.lang.String getPasswordReset();
```

- *Type:* java.lang.String

---

##### `passwordUnlock`<sup>Required</sup> <a name="passwordUnlock" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.property.passwordUnlock"></a>

```java
public java.lang.String getPasswordUnlock();
```

- *Type:* java.lang.String

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.property.policyId"></a>

```java
public java.lang.String getPolicyId();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `usersExcluded`<sup>Required</sup> <a name="usersExcluded" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.property.usersExcluded"></a>

```java
public java.util.List<java.lang.String> getUsersExcluded();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePassword.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PolicyRulePasswordConfig <a name="PolicyRulePasswordConfig" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePasswordConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePasswordConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.policy_rule_password.PolicyRulePasswordConfig;

PolicyRulePasswordConfig.builder()
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
    .name(java.lang.String)
//  .id(java.lang.String)
//  .networkConnection(java.lang.String)
//  .networkExcludes(java.util.List<java.lang.String>)
//  .networkIncludes(java.util.List<java.lang.String>)
//  .passwordChange(java.lang.String)
//  .passwordReset(java.lang.String)
//  .passwordUnlock(java.lang.String)
//  .policyId(java.lang.String)
//  .priority(java.lang.Number)
//  .status(java.lang.String)
//  .usersExcluded(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRulePassword.PolicyRulePasswordConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRulePassword.PolicyRulePasswordConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRulePassword.PolicyRulePasswordConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRulePassword.PolicyRulePasswordConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRulePassword.PolicyRulePasswordConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRulePassword.PolicyRulePasswordConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRulePassword.PolicyRulePasswordConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRulePassword.PolicyRulePasswordConfig.property.name">name</a></code> | <code>java.lang.String</code> | Policy Rule Name. |
| <code><a href="#@cdktf/provider-okta.policyRulePassword.PolicyRulePasswordConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_password#id PolicyRulePassword#id}. |
| <code><a href="#@cdktf/provider-okta.policyRulePassword.PolicyRulePasswordConfig.property.networkConnection">networkConnection</a></code> | <code>java.lang.String</code> | Network selection mode: ANYWHERE, ZONE, ON_NETWORK, or OFF_NETWORK. |
| <code><a href="#@cdktf/provider-okta.policyRulePassword.PolicyRulePasswordConfig.property.networkExcludes">networkExcludes</a></code> | <code>java.util.List<java.lang.String></code> | The zones to exclude. |
| <code><a href="#@cdktf/provider-okta.policyRulePassword.PolicyRulePasswordConfig.property.networkIncludes">networkIncludes</a></code> | <code>java.util.List<java.lang.String></code> | The zones to include. |
| <code><a href="#@cdktf/provider-okta.policyRulePassword.PolicyRulePasswordConfig.property.passwordChange">passwordChange</a></code> | <code>java.lang.String</code> | Allow or deny a user to change their password: ALLOW or DENY. Default = ALLOW. |
| <code><a href="#@cdktf/provider-okta.policyRulePassword.PolicyRulePasswordConfig.property.passwordReset">passwordReset</a></code> | <code>java.lang.String</code> | Allow or deny a user to reset their password: ALLOW or DENY. Default = ALLOW. |
| <code><a href="#@cdktf/provider-okta.policyRulePassword.PolicyRulePasswordConfig.property.passwordUnlock">passwordUnlock</a></code> | <code>java.lang.String</code> | Allow or deny a user to unlock. Default = DENY. |
| <code><a href="#@cdktf/provider-okta.policyRulePassword.PolicyRulePasswordConfig.property.policyId">policyId</a></code> | <code>java.lang.String</code> | Policy ID of the Rule. |
| <code><a href="#@cdktf/provider-okta.policyRulePassword.PolicyRulePasswordConfig.property.priority">priority</a></code> | <code>java.lang.Number</code> | Policy Rule Priority, this attribute can be set to a valid priority. |
| <code><a href="#@cdktf/provider-okta.policyRulePassword.PolicyRulePasswordConfig.property.status">status</a></code> | <code>java.lang.String</code> | Policy Rule Status: ACTIVE or INACTIVE. |
| <code><a href="#@cdktf/provider-okta.policyRulePassword.PolicyRulePasswordConfig.property.usersExcluded">usersExcluded</a></code> | <code>java.util.List<java.lang.String></code> | Set of User IDs to Exclude. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePasswordConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePasswordConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePasswordConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePasswordConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePasswordConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePasswordConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePasswordConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePasswordConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Policy Rule Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_password#name PolicyRulePassword#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePasswordConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_password#id PolicyRulePassword#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `networkConnection`<sup>Optional</sup> <a name="networkConnection" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePasswordConfig.property.networkConnection"></a>

```java
public java.lang.String getNetworkConnection();
```

- *Type:* java.lang.String

Network selection mode: ANYWHERE, ZONE, ON_NETWORK, or OFF_NETWORK.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_password#network_connection PolicyRulePassword#network_connection}

---

##### `networkExcludes`<sup>Optional</sup> <a name="networkExcludes" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePasswordConfig.property.networkExcludes"></a>

```java
public java.util.List<java.lang.String> getNetworkExcludes();
```

- *Type:* java.util.List<java.lang.String>

The zones to exclude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_password#network_excludes PolicyRulePassword#network_excludes}

---

##### `networkIncludes`<sup>Optional</sup> <a name="networkIncludes" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePasswordConfig.property.networkIncludes"></a>

```java
public java.util.List<java.lang.String> getNetworkIncludes();
```

- *Type:* java.util.List<java.lang.String>

The zones to include.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_password#network_includes PolicyRulePassword#network_includes}

---

##### `passwordChange`<sup>Optional</sup> <a name="passwordChange" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePasswordConfig.property.passwordChange"></a>

```java
public java.lang.String getPasswordChange();
```

- *Type:* java.lang.String

Allow or deny a user to change their password: ALLOW or DENY. Default = ALLOW.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_password#password_change PolicyRulePassword#password_change}

---

##### `passwordReset`<sup>Optional</sup> <a name="passwordReset" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePasswordConfig.property.passwordReset"></a>

```java
public java.lang.String getPasswordReset();
```

- *Type:* java.lang.String

Allow or deny a user to reset their password: ALLOW or DENY. Default = ALLOW.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_password#password_reset PolicyRulePassword#password_reset}

---

##### `passwordUnlock`<sup>Optional</sup> <a name="passwordUnlock" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePasswordConfig.property.passwordUnlock"></a>

```java
public java.lang.String getPasswordUnlock();
```

- *Type:* java.lang.String

Allow or deny a user to unlock. Default = DENY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_password#password_unlock PolicyRulePassword#password_unlock}

---

##### `policyId`<sup>Optional</sup> <a name="policyId" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePasswordConfig.property.policyId"></a>

```java
public java.lang.String getPolicyId();
```

- *Type:* java.lang.String

Policy ID of the Rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_password#policy_id PolicyRulePassword#policy_id}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePasswordConfig.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

Policy Rule Priority, this attribute can be set to a valid priority.

To avoid endless diff situation we error if an invalid priority is provided. API defaults it to the last (lowest) if not there.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_password#priority PolicyRulePassword#priority}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePasswordConfig.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Policy Rule Status: ACTIVE or INACTIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_password#status PolicyRulePassword#status}

---

##### `usersExcluded`<sup>Optional</sup> <a name="usersExcluded" id="@cdktf/provider-okta.policyRulePassword.PolicyRulePasswordConfig.property.usersExcluded"></a>

```java
public java.util.List<java.lang.String> getUsersExcluded();
```

- *Type:* java.util.List<java.lang.String>

Set of User IDs to Exclude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/policy_rule_password#users_excluded PolicyRulePassword#users_excluded}

---



