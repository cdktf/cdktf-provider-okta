# `policyRuleMfa` Submodule <a name="`policyRuleMfa` Submodule" id="@cdktf/provider-okta.policyRuleMfa"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PolicyRuleMfa <a name="PolicyRuleMfa" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/policy_rule_mfa okta_policy_rule_mfa}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.policy_rule_mfa.PolicyRuleMfa;

PolicyRuleMfa.Builder.create(Construct scope, java.lang.String id)
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
//  .appExclude(IResolvable)
//  .appExclude(java.util.List<PolicyRuleMfaAppExclude>)
//  .appInclude(IResolvable)
//  .appInclude(java.util.List<PolicyRuleMfaAppInclude>)
//  .enroll(java.lang.String)
//  .id(java.lang.String)
//  .networkConnection(java.lang.String)
//  .networkExcludes(java.util.List<java.lang.String>)
//  .networkIncludes(java.util.List<java.lang.String>)
//  .policyId(java.lang.String)
//  .priority(java.lang.Number)
//  .status(java.lang.String)
//  .usersExcluded(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Policy Rule Name. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.Initializer.parameter.appExclude">appExclude</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExclude">PolicyRuleMfaAppExclude</a>></code> | app_exclude block. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.Initializer.parameter.appInclude">appInclude</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppInclude">PolicyRuleMfaAppInclude</a>></code> | app_include block. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.Initializer.parameter.enroll">enroll</a></code> | <code>java.lang.String</code> | When a user should be prompted for MFA. It can be `CHALLENGE`, `LOGIN`, or `NEVER`. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/policy_rule_mfa#id PolicyRuleMfa#id}. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.Initializer.parameter.networkConnection">networkConnection</a></code> | <code>java.lang.String</code> | Network selection mode: `ANYWHERE`, `ZONE`, `ON_NETWORK`, or `OFF_NETWORK`. Default: `ANYWHERE`. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.Initializer.parameter.networkExcludes">networkExcludes</a></code> | <code>java.util.List<java.lang.String></code> | Required if `network_connection` = `ZONE`. Indicates the network zones to exclude. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.Initializer.parameter.networkIncludes">networkIncludes</a></code> | <code>java.util.List<java.lang.String></code> | Required if `network_connection` = `ZONE`. Indicates the network zones to include. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.Initializer.parameter.policyId">policyId</a></code> | <code>java.lang.String</code> | Policy ID of the Rule. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.Initializer.parameter.priority">priority</a></code> | <code>java.lang.Number</code> | Rule priority. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.Initializer.parameter.status">status</a></code> | <code>java.lang.String</code> | Policy Rule Status: `ACTIVE` or `INACTIVE`. Default: `ACTIVE`. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.Initializer.parameter.usersExcluded">usersExcluded</a></code> | <code>java.util.List<java.lang.String></code> | Set of User IDs to Exclude. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Policy Rule Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/policy_rule_mfa#name PolicyRuleMfa#name}

---

##### `appExclude`<sup>Optional</sup> <a name="appExclude" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.Initializer.parameter.appExclude"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExclude">PolicyRuleMfaAppExclude</a>>

app_exclude block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/policy_rule_mfa#app_exclude PolicyRuleMfa#app_exclude}

---

##### `appInclude`<sup>Optional</sup> <a name="appInclude" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.Initializer.parameter.appInclude"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppInclude">PolicyRuleMfaAppInclude</a>>

app_include block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/policy_rule_mfa#app_include PolicyRuleMfa#app_include}

---

##### `enroll`<sup>Optional</sup> <a name="enroll" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.Initializer.parameter.enroll"></a>

- *Type:* java.lang.String

When a user should be prompted for MFA. It can be `CHALLENGE`, `LOGIN`, or `NEVER`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/policy_rule_mfa#enroll PolicyRuleMfa#enroll}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/policy_rule_mfa#id PolicyRuleMfa#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `networkConnection`<sup>Optional</sup> <a name="networkConnection" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.Initializer.parameter.networkConnection"></a>

- *Type:* java.lang.String

Network selection mode: `ANYWHERE`, `ZONE`, `ON_NETWORK`, or `OFF_NETWORK`. Default: `ANYWHERE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/policy_rule_mfa#network_connection PolicyRuleMfa#network_connection}

---

##### `networkExcludes`<sup>Optional</sup> <a name="networkExcludes" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.Initializer.parameter.networkExcludes"></a>

- *Type:* java.util.List<java.lang.String>

Required if `network_connection` = `ZONE`. Indicates the network zones to exclude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/policy_rule_mfa#network_excludes PolicyRuleMfa#network_excludes}

---

##### `networkIncludes`<sup>Optional</sup> <a name="networkIncludes" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.Initializer.parameter.networkIncludes"></a>

- *Type:* java.util.List<java.lang.String>

Required if `network_connection` = `ZONE`. Indicates the network zones to include.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/policy_rule_mfa#network_includes PolicyRuleMfa#network_includes}

---

##### `policyId`<sup>Optional</sup> <a name="policyId" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.Initializer.parameter.policyId"></a>

- *Type:* java.lang.String

Policy ID of the Rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/policy_rule_mfa#policy_id PolicyRuleMfa#policy_id}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.Initializer.parameter.priority"></a>

- *Type:* java.lang.Number

Rule priority.

This attribute can be set to a valid priority. To avoid an endless diff situation an error is thrown if an invalid property is provided. The Okta API defaults to the last (lowest) if not provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/policy_rule_mfa#priority PolicyRuleMfa#priority}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.Initializer.parameter.status"></a>

- *Type:* java.lang.String

Policy Rule Status: `ACTIVE` or `INACTIVE`. Default: `ACTIVE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/policy_rule_mfa#status PolicyRuleMfa#status}

---

##### `usersExcluded`<sup>Optional</sup> <a name="usersExcluded" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.Initializer.parameter.usersExcluded"></a>

- *Type:* java.util.List<java.lang.String>

Set of User IDs to Exclude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/policy_rule_mfa#users_excluded PolicyRuleMfa#users_excluded}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.putAppExclude">putAppExclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.putAppInclude">putAppInclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.resetAppExclude">resetAppExclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.resetAppInclude">resetAppInclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.resetEnroll">resetEnroll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.resetNetworkConnection">resetNetworkConnection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.resetNetworkExcludes">resetNetworkExcludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.resetNetworkIncludes">resetNetworkIncludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.resetPolicyId">resetPolicyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.resetUsersExcluded">resetUsersExcluded</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAppExclude` <a name="putAppExclude" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.putAppExclude"></a>

```java
public void putAppExclude(IResolvable OR java.util.List<PolicyRuleMfaAppExclude> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.putAppExclude.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExclude">PolicyRuleMfaAppExclude</a>>

---

##### `putAppInclude` <a name="putAppInclude" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.putAppInclude"></a>

```java
public void putAppInclude(IResolvable OR java.util.List<PolicyRuleMfaAppInclude> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.putAppInclude.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppInclude">PolicyRuleMfaAppInclude</a>>

---

##### `resetAppExclude` <a name="resetAppExclude" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.resetAppExclude"></a>

```java
public void resetAppExclude()
```

##### `resetAppInclude` <a name="resetAppInclude" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.resetAppInclude"></a>

```java
public void resetAppInclude()
```

##### `resetEnroll` <a name="resetEnroll" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.resetEnroll"></a>

```java
public void resetEnroll()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.resetId"></a>

```java
public void resetId()
```

##### `resetNetworkConnection` <a name="resetNetworkConnection" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.resetNetworkConnection"></a>

```java
public void resetNetworkConnection()
```

##### `resetNetworkExcludes` <a name="resetNetworkExcludes" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.resetNetworkExcludes"></a>

```java
public void resetNetworkExcludes()
```

##### `resetNetworkIncludes` <a name="resetNetworkIncludes" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.resetNetworkIncludes"></a>

```java
public void resetNetworkIncludes()
```

##### `resetPolicyId` <a name="resetPolicyId" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.resetPolicyId"></a>

```java
public void resetPolicyId()
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.resetPriority"></a>

```java
public void resetPriority()
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.resetStatus"></a>

```java
public void resetStatus()
```

##### `resetUsersExcluded` <a name="resetUsersExcluded" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.resetUsersExcluded"></a>

```java
public void resetUsersExcluded()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PolicyRuleMfa resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.okta.policy_rule_mfa.PolicyRuleMfa;

PolicyRuleMfa.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.okta.policy_rule_mfa.PolicyRuleMfa;

PolicyRuleMfa.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.okta.policy_rule_mfa.PolicyRuleMfa;

PolicyRuleMfa.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.okta.policy_rule_mfa.PolicyRuleMfa;

PolicyRuleMfa.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),PolicyRuleMfa.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a PolicyRuleMfa resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the PolicyRuleMfa to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing PolicyRuleMfa that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/policy_rule_mfa#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the PolicyRuleMfa to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.appExclude">appExclude</a></code> | <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeList">PolicyRuleMfaAppExcludeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.appInclude">appInclude</a></code> | <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeList">PolicyRuleMfaAppIncludeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.appExcludeInput">appExcludeInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExclude">PolicyRuleMfaAppExclude</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.appIncludeInput">appIncludeInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppInclude">PolicyRuleMfaAppInclude</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.enrollInput">enrollInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.networkConnectionInput">networkConnectionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.networkExcludesInput">networkExcludesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.networkIncludesInput">networkIncludesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.policyIdInput">policyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.usersExcludedInput">usersExcludedInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.enroll">enroll</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.networkConnection">networkConnection</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.networkExcludes">networkExcludes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.networkIncludes">networkIncludes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.policyId">policyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.usersExcluded">usersExcluded</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `appExclude`<sup>Required</sup> <a name="appExclude" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.appExclude"></a>

```java
public PolicyRuleMfaAppExcludeList getAppExclude();
```

- *Type:* <a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeList">PolicyRuleMfaAppExcludeList</a>

---

##### `appInclude`<sup>Required</sup> <a name="appInclude" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.appInclude"></a>

```java
public PolicyRuleMfaAppIncludeList getAppInclude();
```

- *Type:* <a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeList">PolicyRuleMfaAppIncludeList</a>

---

##### `appExcludeInput`<sup>Optional</sup> <a name="appExcludeInput" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.appExcludeInput"></a>

```java
public java.lang.Object getAppExcludeInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExclude">PolicyRuleMfaAppExclude</a>>

---

##### `appIncludeInput`<sup>Optional</sup> <a name="appIncludeInput" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.appIncludeInput"></a>

```java
public java.lang.Object getAppIncludeInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppInclude">PolicyRuleMfaAppInclude</a>>

---

##### `enrollInput`<sup>Optional</sup> <a name="enrollInput" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.enrollInput"></a>

```java
public java.lang.String getEnrollInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkConnectionInput`<sup>Optional</sup> <a name="networkConnectionInput" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.networkConnectionInput"></a>

```java
public java.lang.String getNetworkConnectionInput();
```

- *Type:* java.lang.String

---

##### `networkExcludesInput`<sup>Optional</sup> <a name="networkExcludesInput" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.networkExcludesInput"></a>

```java
public java.util.List<java.lang.String> getNetworkExcludesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `networkIncludesInput`<sup>Optional</sup> <a name="networkIncludesInput" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.networkIncludesInput"></a>

```java
public java.util.List<java.lang.String> getNetworkIncludesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `policyIdInput`<sup>Optional</sup> <a name="policyIdInput" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.policyIdInput"></a>

```java
public java.lang.String getPolicyIdInput();
```

- *Type:* java.lang.String

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `usersExcludedInput`<sup>Optional</sup> <a name="usersExcludedInput" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.usersExcludedInput"></a>

```java
public java.util.List<java.lang.String> getUsersExcludedInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enroll`<sup>Required</sup> <a name="enroll" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.enroll"></a>

```java
public java.lang.String getEnroll();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `networkConnection`<sup>Required</sup> <a name="networkConnection" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.networkConnection"></a>

```java
public java.lang.String getNetworkConnection();
```

- *Type:* java.lang.String

---

##### `networkExcludes`<sup>Required</sup> <a name="networkExcludes" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.networkExcludes"></a>

```java
public java.util.List<java.lang.String> getNetworkExcludes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `networkIncludes`<sup>Required</sup> <a name="networkIncludes" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.networkIncludes"></a>

```java
public java.util.List<java.lang.String> getNetworkIncludes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.policyId"></a>

```java
public java.lang.String getPolicyId();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `usersExcluded`<sup>Required</sup> <a name="usersExcluded" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.usersExcluded"></a>

```java
public java.util.List<java.lang.String> getUsersExcluded();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PolicyRuleMfaAppExclude <a name="PolicyRuleMfaAppExclude" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExclude"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExclude.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.policy_rule_mfa.PolicyRuleMfaAppExclude;

PolicyRuleMfaAppExclude.builder()
    .type(java.lang.String)
//  .id(java.lang.String)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExclude.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/policy_rule_mfa#type PolicyRuleMfa#type}. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExclude.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/policy_rule_mfa#id PolicyRuleMfa#id}. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExclude.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/policy_rule_mfa#name PolicyRuleMfa#name}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExclude.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/policy_rule_mfa#type PolicyRuleMfa#type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExclude.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/policy_rule_mfa#id PolicyRuleMfa#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExclude.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/policy_rule_mfa#name PolicyRuleMfa#name}.

---

### PolicyRuleMfaAppInclude <a name="PolicyRuleMfaAppInclude" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppInclude"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppInclude.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.policy_rule_mfa.PolicyRuleMfaAppInclude;

PolicyRuleMfaAppInclude.builder()
    .type(java.lang.String)
//  .id(java.lang.String)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppInclude.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/policy_rule_mfa#type PolicyRuleMfa#type}. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppInclude.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/policy_rule_mfa#id PolicyRuleMfa#id}. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppInclude.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/policy_rule_mfa#name PolicyRuleMfa#name}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppInclude.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/policy_rule_mfa#type PolicyRuleMfa#type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppInclude.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/policy_rule_mfa#id PolicyRuleMfa#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppInclude.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/policy_rule_mfa#name PolicyRuleMfa#name}.

---

### PolicyRuleMfaConfig <a name="PolicyRuleMfaConfig" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.policy_rule_mfa.PolicyRuleMfaConfig;

PolicyRuleMfaConfig.builder()
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
//  .appExclude(IResolvable)
//  .appExclude(java.util.List<PolicyRuleMfaAppExclude>)
//  .appInclude(IResolvable)
//  .appInclude(java.util.List<PolicyRuleMfaAppInclude>)
//  .enroll(java.lang.String)
//  .id(java.lang.String)
//  .networkConnection(java.lang.String)
//  .networkExcludes(java.util.List<java.lang.String>)
//  .networkIncludes(java.util.List<java.lang.String>)
//  .policyId(java.lang.String)
//  .priority(java.lang.Number)
//  .status(java.lang.String)
//  .usersExcluded(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.name">name</a></code> | <code>java.lang.String</code> | Policy Rule Name. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.appExclude">appExclude</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExclude">PolicyRuleMfaAppExclude</a>></code> | app_exclude block. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.appInclude">appInclude</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppInclude">PolicyRuleMfaAppInclude</a>></code> | app_include block. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.enroll">enroll</a></code> | <code>java.lang.String</code> | When a user should be prompted for MFA. It can be `CHALLENGE`, `LOGIN`, or `NEVER`. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/policy_rule_mfa#id PolicyRuleMfa#id}. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.networkConnection">networkConnection</a></code> | <code>java.lang.String</code> | Network selection mode: `ANYWHERE`, `ZONE`, `ON_NETWORK`, or `OFF_NETWORK`. Default: `ANYWHERE`. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.networkExcludes">networkExcludes</a></code> | <code>java.util.List<java.lang.String></code> | Required if `network_connection` = `ZONE`. Indicates the network zones to exclude. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.networkIncludes">networkIncludes</a></code> | <code>java.util.List<java.lang.String></code> | Required if `network_connection` = `ZONE`. Indicates the network zones to include. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.policyId">policyId</a></code> | <code>java.lang.String</code> | Policy ID of the Rule. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.priority">priority</a></code> | <code>java.lang.Number</code> | Rule priority. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.status">status</a></code> | <code>java.lang.String</code> | Policy Rule Status: `ACTIVE` or `INACTIVE`. Default: `ACTIVE`. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.usersExcluded">usersExcluded</a></code> | <code>java.util.List<java.lang.String></code> | Set of User IDs to Exclude. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Policy Rule Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/policy_rule_mfa#name PolicyRuleMfa#name}

---

##### `appExclude`<sup>Optional</sup> <a name="appExclude" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.appExclude"></a>

```java
public java.lang.Object getAppExclude();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExclude">PolicyRuleMfaAppExclude</a>>

app_exclude block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/policy_rule_mfa#app_exclude PolicyRuleMfa#app_exclude}

---

##### `appInclude`<sup>Optional</sup> <a name="appInclude" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.appInclude"></a>

```java
public java.lang.Object getAppInclude();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppInclude">PolicyRuleMfaAppInclude</a>>

app_include block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/policy_rule_mfa#app_include PolicyRuleMfa#app_include}

---

##### `enroll`<sup>Optional</sup> <a name="enroll" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.enroll"></a>

```java
public java.lang.String getEnroll();
```

- *Type:* java.lang.String

When a user should be prompted for MFA. It can be `CHALLENGE`, `LOGIN`, or `NEVER`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/policy_rule_mfa#enroll PolicyRuleMfa#enroll}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/policy_rule_mfa#id PolicyRuleMfa#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `networkConnection`<sup>Optional</sup> <a name="networkConnection" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.networkConnection"></a>

```java
public java.lang.String getNetworkConnection();
```

- *Type:* java.lang.String

Network selection mode: `ANYWHERE`, `ZONE`, `ON_NETWORK`, or `OFF_NETWORK`. Default: `ANYWHERE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/policy_rule_mfa#network_connection PolicyRuleMfa#network_connection}

---

##### `networkExcludes`<sup>Optional</sup> <a name="networkExcludes" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.networkExcludes"></a>

```java
public java.util.List<java.lang.String> getNetworkExcludes();
```

- *Type:* java.util.List<java.lang.String>

Required if `network_connection` = `ZONE`. Indicates the network zones to exclude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/policy_rule_mfa#network_excludes PolicyRuleMfa#network_excludes}

---

##### `networkIncludes`<sup>Optional</sup> <a name="networkIncludes" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.networkIncludes"></a>

```java
public java.util.List<java.lang.String> getNetworkIncludes();
```

- *Type:* java.util.List<java.lang.String>

Required if `network_connection` = `ZONE`. Indicates the network zones to include.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/policy_rule_mfa#network_includes PolicyRuleMfa#network_includes}

---

##### `policyId`<sup>Optional</sup> <a name="policyId" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.policyId"></a>

```java
public java.lang.String getPolicyId();
```

- *Type:* java.lang.String

Policy ID of the Rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/policy_rule_mfa#policy_id PolicyRuleMfa#policy_id}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

Rule priority.

This attribute can be set to a valid priority. To avoid an endless diff situation an error is thrown if an invalid property is provided. The Okta API defaults to the last (lowest) if not provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/policy_rule_mfa#priority PolicyRuleMfa#priority}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Policy Rule Status: `ACTIVE` or `INACTIVE`. Default: `ACTIVE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/policy_rule_mfa#status PolicyRuleMfa#status}

---

##### `usersExcluded`<sup>Optional</sup> <a name="usersExcluded" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.usersExcluded"></a>

```java
public java.util.List<java.lang.String> getUsersExcluded();
```

- *Type:* java.util.List<java.lang.String>

Set of User IDs to Exclude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/policy_rule_mfa#users_excluded PolicyRuleMfa#users_excluded}

---

## Classes <a name="Classes" id="Classes"></a>

### PolicyRuleMfaAppExcludeList <a name="PolicyRuleMfaAppExcludeList" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.policy_rule_mfa.PolicyRuleMfaAppExcludeList;

new PolicyRuleMfaAppExcludeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeList.get"></a>

```java
public PolicyRuleMfaAppExcludeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExclude">PolicyRuleMfaAppExclude</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExclude">PolicyRuleMfaAppExclude</a>>

---


### PolicyRuleMfaAppExcludeOutputReference <a name="PolicyRuleMfaAppExcludeOutputReference" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.policy_rule_mfa.PolicyRuleMfaAppExcludeOutputReference;

new PolicyRuleMfaAppExcludeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExclude">PolicyRuleMfaAppExclude</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExclude">PolicyRuleMfaAppExclude</a>

---


### PolicyRuleMfaAppIncludeList <a name="PolicyRuleMfaAppIncludeList" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.policy_rule_mfa.PolicyRuleMfaAppIncludeList;

new PolicyRuleMfaAppIncludeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeList.get"></a>

```java
public PolicyRuleMfaAppIncludeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppInclude">PolicyRuleMfaAppInclude</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppInclude">PolicyRuleMfaAppInclude</a>>

---


### PolicyRuleMfaAppIncludeOutputReference <a name="PolicyRuleMfaAppIncludeOutputReference" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.policy_rule_mfa.PolicyRuleMfaAppIncludeOutputReference;

new PolicyRuleMfaAppIncludeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppInclude">PolicyRuleMfaAppInclude</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppInclude">PolicyRuleMfaAppInclude</a>

---



