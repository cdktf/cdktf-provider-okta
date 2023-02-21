# `mfaPolicyRule` Submodule <a name="`mfaPolicyRule` Submodule" id="@cdktf/provider-okta.mfaPolicyRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MfaPolicyRule <a name="MfaPolicyRule" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule"></a>

Represents a {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy_rule okta_mfa_policy_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.mfa_policy_rule.MfaPolicyRule;

MfaPolicyRule.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
//  .appExclude(IResolvable)
//  .appExclude(java.util.List<MfaPolicyRuleAppExclude>)
//  .appInclude(IResolvable)
//  .appInclude(java.util.List<MfaPolicyRuleAppInclude>)
//  .enroll(java.lang.String)
//  .id(java.lang.String)
//  .networkConnection(java.lang.String)
//  .networkExcludes(java.util.List<java.lang.String>)
//  .networkIncludes(java.util.List<java.lang.String>)
//  .policyid(java.lang.String)
//  .policyId(java.lang.String)
//  .priority(java.lang.Number)
//  .status(java.lang.String)
//  .usersExcluded(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Policy Rule Name. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.Initializer.parameter.appExclude">appExclude</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExclude">MfaPolicyRuleAppExclude</a>></code> | app_exclude block. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.Initializer.parameter.appInclude">appInclude</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppInclude">MfaPolicyRuleAppInclude</a>></code> | app_include block. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.Initializer.parameter.enroll">enroll</a></code> | <code>java.lang.String</code> | Should the user be enrolled the first time they LOGIN, the next time they are CHALLENGED, or NEVER? |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy_rule#id MfaPolicyRule#id}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.Initializer.parameter.networkConnection">networkConnection</a></code> | <code>java.lang.String</code> | Network selection mode: ANYWHERE, ZONE, ON_NETWORK, or OFF_NETWORK. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.Initializer.parameter.networkExcludes">networkExcludes</a></code> | <code>java.util.List<java.lang.String></code> | The zones to exclude. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.Initializer.parameter.networkIncludes">networkIncludes</a></code> | <code>java.util.List<java.lang.String></code> | The zones to include. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.Initializer.parameter.policyid">policyid</a></code> | <code>java.lang.String</code> | Policy ID of the Rule. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.Initializer.parameter.policyId">policyId</a></code> | <code>java.lang.String</code> | Policy ID of the Rule. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.Initializer.parameter.priority">priority</a></code> | <code>java.lang.Number</code> | Policy Rule Priority, this attribute can be set to a valid priority. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.Initializer.parameter.status">status</a></code> | <code>java.lang.String</code> | Policy Rule Status: ACTIVE or INACTIVE. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.Initializer.parameter.usersExcluded">usersExcluded</a></code> | <code>java.util.List<java.lang.String></code> | Set of User IDs to Exclude. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Policy Rule Name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy_rule#name MfaPolicyRule#name}

---

##### `appExclude`<sup>Optional</sup> <a name="appExclude" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.Initializer.parameter.appExclude"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExclude">MfaPolicyRuleAppExclude</a>>

app_exclude block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy_rule#app_exclude MfaPolicyRule#app_exclude}

---

##### `appInclude`<sup>Optional</sup> <a name="appInclude" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.Initializer.parameter.appInclude"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppInclude">MfaPolicyRuleAppInclude</a>>

app_include block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy_rule#app_include MfaPolicyRule#app_include}

---

##### `enroll`<sup>Optional</sup> <a name="enroll" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.Initializer.parameter.enroll"></a>

- *Type:* java.lang.String

Should the user be enrolled the first time they LOGIN, the next time they are CHALLENGED, or NEVER?

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy_rule#enroll MfaPolicyRule#enroll}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy_rule#id MfaPolicyRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `networkConnection`<sup>Optional</sup> <a name="networkConnection" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.Initializer.parameter.networkConnection"></a>

- *Type:* java.lang.String

Network selection mode: ANYWHERE, ZONE, ON_NETWORK, or OFF_NETWORK.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy_rule#network_connection MfaPolicyRule#network_connection}

---

##### `networkExcludes`<sup>Optional</sup> <a name="networkExcludes" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.Initializer.parameter.networkExcludes"></a>

- *Type:* java.util.List<java.lang.String>

The zones to exclude.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy_rule#network_excludes MfaPolicyRule#network_excludes}

---

##### `networkIncludes`<sup>Optional</sup> <a name="networkIncludes" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.Initializer.parameter.networkIncludes"></a>

- *Type:* java.util.List<java.lang.String>

The zones to include.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy_rule#network_includes MfaPolicyRule#network_includes}

---

##### `policyid`<sup>Optional</sup> <a name="policyid" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.Initializer.parameter.policyid"></a>

- *Type:* java.lang.String

Policy ID of the Rule.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy_rule#policyid MfaPolicyRule#policyid}

---

##### `policyId`<sup>Optional</sup> <a name="policyId" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.Initializer.parameter.policyId"></a>

- *Type:* java.lang.String

Policy ID of the Rule.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy_rule#policy_id MfaPolicyRule#policy_id}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.Initializer.parameter.priority"></a>

- *Type:* java.lang.Number

Policy Rule Priority, this attribute can be set to a valid priority.

To avoid endless diff situation we error if an invalid priority is provided. API defaults it to the last (lowest) if not there.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy_rule#priority MfaPolicyRule#priority}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.Initializer.parameter.status"></a>

- *Type:* java.lang.String

Policy Rule Status: ACTIVE or INACTIVE.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy_rule#status MfaPolicyRule#status}

---

##### `usersExcluded`<sup>Optional</sup> <a name="usersExcluded" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.Initializer.parameter.usersExcluded"></a>

- *Type:* java.util.List<java.lang.String>

Set of User IDs to Exclude.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy_rule#users_excluded MfaPolicyRule#users_excluded}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.putAppExclude">putAppExclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.putAppInclude">putAppInclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.resetAppExclude">resetAppExclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.resetAppInclude">resetAppInclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.resetEnroll">resetEnroll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.resetNetworkConnection">resetNetworkConnection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.resetNetworkExcludes">resetNetworkExcludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.resetNetworkIncludes">resetNetworkIncludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.resetPolicyid">resetPolicyid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.resetPolicyId">resetPolicyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.resetUsersExcluded">resetUsersExcluded</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putAppExclude` <a name="putAppExclude" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.putAppExclude"></a>

```java
public void putAppExclude(IResolvable OR java.util.List<MfaPolicyRuleAppExclude> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.putAppExclude.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExclude">MfaPolicyRuleAppExclude</a>>

---

##### `putAppInclude` <a name="putAppInclude" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.putAppInclude"></a>

```java
public void putAppInclude(IResolvable OR java.util.List<MfaPolicyRuleAppInclude> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.putAppInclude.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppInclude">MfaPolicyRuleAppInclude</a>>

---

##### `resetAppExclude` <a name="resetAppExclude" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.resetAppExclude"></a>

```java
public void resetAppExclude()
```

##### `resetAppInclude` <a name="resetAppInclude" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.resetAppInclude"></a>

```java
public void resetAppInclude()
```

##### `resetEnroll` <a name="resetEnroll" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.resetEnroll"></a>

```java
public void resetEnroll()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.resetId"></a>

```java
public void resetId()
```

##### `resetNetworkConnection` <a name="resetNetworkConnection" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.resetNetworkConnection"></a>

```java
public void resetNetworkConnection()
```

##### `resetNetworkExcludes` <a name="resetNetworkExcludes" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.resetNetworkExcludes"></a>

```java
public void resetNetworkExcludes()
```

##### `resetNetworkIncludes` <a name="resetNetworkIncludes" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.resetNetworkIncludes"></a>

```java
public void resetNetworkIncludes()
```

##### `resetPolicyid` <a name="resetPolicyid" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.resetPolicyid"></a>

```java
public void resetPolicyid()
```

##### `resetPolicyId` <a name="resetPolicyId" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.resetPolicyId"></a>

```java
public void resetPolicyId()
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.resetPriority"></a>

```java
public void resetPriority()
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.resetStatus"></a>

```java
public void resetStatus()
```

##### `resetUsersExcluded` <a name="resetUsersExcluded" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.resetUsersExcluded"></a>

```java
public void resetUsersExcluded()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.okta.mfa_policy_rule.MfaPolicyRule;

MfaPolicyRule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.okta.mfa_policy_rule.MfaPolicyRule;

MfaPolicyRule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.okta.mfa_policy_rule.MfaPolicyRule;

MfaPolicyRule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.appExclude">appExclude</a></code> | <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeList">MfaPolicyRuleAppExcludeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.appInclude">appInclude</a></code> | <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeList">MfaPolicyRuleAppIncludeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.appExcludeInput">appExcludeInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExclude">MfaPolicyRuleAppExclude</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.appIncludeInput">appIncludeInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppInclude">MfaPolicyRuleAppInclude</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.enrollInput">enrollInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.networkConnectionInput">networkConnectionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.networkExcludesInput">networkExcludesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.networkIncludesInput">networkIncludesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.policyidInput">policyidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.policyIdInput">policyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.usersExcludedInput">usersExcludedInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.enroll">enroll</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.networkConnection">networkConnection</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.networkExcludes">networkExcludes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.networkIncludes">networkIncludes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.policyid">policyid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.policyId">policyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.usersExcluded">usersExcluded</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `appExclude`<sup>Required</sup> <a name="appExclude" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.appExclude"></a>

```java
public MfaPolicyRuleAppExcludeList getAppExclude();
```

- *Type:* <a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeList">MfaPolicyRuleAppExcludeList</a>

---

##### `appInclude`<sup>Required</sup> <a name="appInclude" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.appInclude"></a>

```java
public MfaPolicyRuleAppIncludeList getAppInclude();
```

- *Type:* <a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeList">MfaPolicyRuleAppIncludeList</a>

---

##### `appExcludeInput`<sup>Optional</sup> <a name="appExcludeInput" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.appExcludeInput"></a>

```java
public java.lang.Object getAppExcludeInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExclude">MfaPolicyRuleAppExclude</a>>

---

##### `appIncludeInput`<sup>Optional</sup> <a name="appIncludeInput" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.appIncludeInput"></a>

```java
public java.lang.Object getAppIncludeInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppInclude">MfaPolicyRuleAppInclude</a>>

---

##### `enrollInput`<sup>Optional</sup> <a name="enrollInput" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.enrollInput"></a>

```java
public java.lang.String getEnrollInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkConnectionInput`<sup>Optional</sup> <a name="networkConnectionInput" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.networkConnectionInput"></a>

```java
public java.lang.String getNetworkConnectionInput();
```

- *Type:* java.lang.String

---

##### `networkExcludesInput`<sup>Optional</sup> <a name="networkExcludesInput" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.networkExcludesInput"></a>

```java
public java.util.List<java.lang.String> getNetworkExcludesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `networkIncludesInput`<sup>Optional</sup> <a name="networkIncludesInput" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.networkIncludesInput"></a>

```java
public java.util.List<java.lang.String> getNetworkIncludesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `policyidInput`<sup>Optional</sup> <a name="policyidInput" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.policyidInput"></a>

```java
public java.lang.String getPolicyidInput();
```

- *Type:* java.lang.String

---

##### `policyIdInput`<sup>Optional</sup> <a name="policyIdInput" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.policyIdInput"></a>

```java
public java.lang.String getPolicyIdInput();
```

- *Type:* java.lang.String

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `usersExcludedInput`<sup>Optional</sup> <a name="usersExcludedInput" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.usersExcludedInput"></a>

```java
public java.util.List<java.lang.String> getUsersExcludedInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enroll`<sup>Required</sup> <a name="enroll" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.enroll"></a>

```java
public java.lang.String getEnroll();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `networkConnection`<sup>Required</sup> <a name="networkConnection" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.networkConnection"></a>

```java
public java.lang.String getNetworkConnection();
```

- *Type:* java.lang.String

---

##### `networkExcludes`<sup>Required</sup> <a name="networkExcludes" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.networkExcludes"></a>

```java
public java.util.List<java.lang.String> getNetworkExcludes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `networkIncludes`<sup>Required</sup> <a name="networkIncludes" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.networkIncludes"></a>

```java
public java.util.List<java.lang.String> getNetworkIncludes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `policyid`<sup>Required</sup> <a name="policyid" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.policyid"></a>

```java
public java.lang.String getPolicyid();
```

- *Type:* java.lang.String

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.policyId"></a>

```java
public java.lang.String getPolicyId();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `usersExcluded`<sup>Required</sup> <a name="usersExcluded" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.usersExcluded"></a>

```java
public java.util.List<java.lang.String> getUsersExcluded();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MfaPolicyRuleAppExclude <a name="MfaPolicyRuleAppExclude" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExclude"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExclude.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.mfa_policy_rule.MfaPolicyRuleAppExclude;

MfaPolicyRuleAppExclude.builder()
    .type(java.lang.String)
//  .id(java.lang.String)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExclude.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy_rule#type MfaPolicyRule#type}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExclude.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy_rule#id MfaPolicyRule#id}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExclude.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy_rule#name MfaPolicyRule#name}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExclude.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy_rule#type MfaPolicyRule#type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExclude.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy_rule#id MfaPolicyRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExclude.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy_rule#name MfaPolicyRule#name}.

---

### MfaPolicyRuleAppInclude <a name="MfaPolicyRuleAppInclude" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppInclude"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppInclude.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.mfa_policy_rule.MfaPolicyRuleAppInclude;

MfaPolicyRuleAppInclude.builder()
    .type(java.lang.String)
//  .id(java.lang.String)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppInclude.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy_rule#type MfaPolicyRule#type}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppInclude.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy_rule#id MfaPolicyRule#id}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppInclude.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy_rule#name MfaPolicyRule#name}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppInclude.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy_rule#type MfaPolicyRule#type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppInclude.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy_rule#id MfaPolicyRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppInclude.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy_rule#name MfaPolicyRule#name}.

---

### MfaPolicyRuleConfig <a name="MfaPolicyRuleConfig" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.mfa_policy_rule.MfaPolicyRuleConfig;

MfaPolicyRuleConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
//  .appExclude(IResolvable)
//  .appExclude(java.util.List<MfaPolicyRuleAppExclude>)
//  .appInclude(IResolvable)
//  .appInclude(java.util.List<MfaPolicyRuleAppInclude>)
//  .enroll(java.lang.String)
//  .id(java.lang.String)
//  .networkConnection(java.lang.String)
//  .networkExcludes(java.util.List<java.lang.String>)
//  .networkIncludes(java.util.List<java.lang.String>)
//  .policyid(java.lang.String)
//  .policyId(java.lang.String)
//  .priority(java.lang.Number)
//  .status(java.lang.String)
//  .usersExcluded(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.name">name</a></code> | <code>java.lang.String</code> | Policy Rule Name. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.appExclude">appExclude</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExclude">MfaPolicyRuleAppExclude</a>></code> | app_exclude block. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.appInclude">appInclude</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppInclude">MfaPolicyRuleAppInclude</a>></code> | app_include block. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.enroll">enroll</a></code> | <code>java.lang.String</code> | Should the user be enrolled the first time they LOGIN, the next time they are CHALLENGED, or NEVER? |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy_rule#id MfaPolicyRule#id}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.networkConnection">networkConnection</a></code> | <code>java.lang.String</code> | Network selection mode: ANYWHERE, ZONE, ON_NETWORK, or OFF_NETWORK. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.networkExcludes">networkExcludes</a></code> | <code>java.util.List<java.lang.String></code> | The zones to exclude. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.networkIncludes">networkIncludes</a></code> | <code>java.util.List<java.lang.String></code> | The zones to include. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.policyid">policyid</a></code> | <code>java.lang.String</code> | Policy ID of the Rule. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.policyId">policyId</a></code> | <code>java.lang.String</code> | Policy ID of the Rule. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.priority">priority</a></code> | <code>java.lang.Number</code> | Policy Rule Priority, this attribute can be set to a valid priority. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.status">status</a></code> | <code>java.lang.String</code> | Policy Rule Status: ACTIVE or INACTIVE. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.usersExcluded">usersExcluded</a></code> | <code>java.util.List<java.lang.String></code> | Set of User IDs to Exclude. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Policy Rule Name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy_rule#name MfaPolicyRule#name}

---

##### `appExclude`<sup>Optional</sup> <a name="appExclude" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.appExclude"></a>

```java
public java.lang.Object getAppExclude();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExclude">MfaPolicyRuleAppExclude</a>>

app_exclude block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy_rule#app_exclude MfaPolicyRule#app_exclude}

---

##### `appInclude`<sup>Optional</sup> <a name="appInclude" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.appInclude"></a>

```java
public java.lang.Object getAppInclude();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppInclude">MfaPolicyRuleAppInclude</a>>

app_include block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy_rule#app_include MfaPolicyRule#app_include}

---

##### `enroll`<sup>Optional</sup> <a name="enroll" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.enroll"></a>

```java
public java.lang.String getEnroll();
```

- *Type:* java.lang.String

Should the user be enrolled the first time they LOGIN, the next time they are CHALLENGED, or NEVER?

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy_rule#enroll MfaPolicyRule#enroll}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy_rule#id MfaPolicyRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `networkConnection`<sup>Optional</sup> <a name="networkConnection" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.networkConnection"></a>

```java
public java.lang.String getNetworkConnection();
```

- *Type:* java.lang.String

Network selection mode: ANYWHERE, ZONE, ON_NETWORK, or OFF_NETWORK.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy_rule#network_connection MfaPolicyRule#network_connection}

---

##### `networkExcludes`<sup>Optional</sup> <a name="networkExcludes" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.networkExcludes"></a>

```java
public java.util.List<java.lang.String> getNetworkExcludes();
```

- *Type:* java.util.List<java.lang.String>

The zones to exclude.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy_rule#network_excludes MfaPolicyRule#network_excludes}

---

##### `networkIncludes`<sup>Optional</sup> <a name="networkIncludes" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.networkIncludes"></a>

```java
public java.util.List<java.lang.String> getNetworkIncludes();
```

- *Type:* java.util.List<java.lang.String>

The zones to include.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy_rule#network_includes MfaPolicyRule#network_includes}

---

##### `policyid`<sup>Optional</sup> <a name="policyid" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.policyid"></a>

```java
public java.lang.String getPolicyid();
```

- *Type:* java.lang.String

Policy ID of the Rule.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy_rule#policyid MfaPolicyRule#policyid}

---

##### `policyId`<sup>Optional</sup> <a name="policyId" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.policyId"></a>

```java
public java.lang.String getPolicyId();
```

- *Type:* java.lang.String

Policy ID of the Rule.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy_rule#policy_id MfaPolicyRule#policy_id}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

Policy Rule Priority, this attribute can be set to a valid priority.

To avoid endless diff situation we error if an invalid priority is provided. API defaults it to the last (lowest) if not there.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy_rule#priority MfaPolicyRule#priority}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Policy Rule Status: ACTIVE or INACTIVE.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy_rule#status MfaPolicyRule#status}

---

##### `usersExcluded`<sup>Optional</sup> <a name="usersExcluded" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleConfig.property.usersExcluded"></a>

```java
public java.util.List<java.lang.String> getUsersExcluded();
```

- *Type:* java.util.List<java.lang.String>

Set of User IDs to Exclude.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy_rule#users_excluded MfaPolicyRule#users_excluded}

---

## Classes <a name="Classes" id="Classes"></a>

### MfaPolicyRuleAppExcludeList <a name="MfaPolicyRuleAppExcludeList" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.mfa_policy_rule.MfaPolicyRuleAppExcludeList;

new MfaPolicyRuleAppExcludeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeList.get"></a>

```java
public MfaPolicyRuleAppExcludeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExclude">MfaPolicyRuleAppExclude</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExclude">MfaPolicyRuleAppExclude</a>>

---


### MfaPolicyRuleAppExcludeOutputReference <a name="MfaPolicyRuleAppExcludeOutputReference" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.mfa_policy_rule.MfaPolicyRuleAppExcludeOutputReference;

new MfaPolicyRuleAppExcludeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExclude">MfaPolicyRuleAppExclude</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExcludeOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppExclude">MfaPolicyRuleAppExclude</a> OR com.hashicorp.cdktf.IResolvable

---


### MfaPolicyRuleAppIncludeList <a name="MfaPolicyRuleAppIncludeList" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.mfa_policy_rule.MfaPolicyRuleAppIncludeList;

new MfaPolicyRuleAppIncludeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeList.get"></a>

```java
public MfaPolicyRuleAppIncludeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppInclude">MfaPolicyRuleAppInclude</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppInclude">MfaPolicyRuleAppInclude</a>>

---


### MfaPolicyRuleAppIncludeOutputReference <a name="MfaPolicyRuleAppIncludeOutputReference" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.mfa_policy_rule.MfaPolicyRuleAppIncludeOutputReference;

new MfaPolicyRuleAppIncludeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppInclude">MfaPolicyRuleAppInclude</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppIncludeOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-okta.mfaPolicyRule.MfaPolicyRuleAppInclude">MfaPolicyRuleAppInclude</a> OR com.hashicorp.cdktf.IResolvable

---



