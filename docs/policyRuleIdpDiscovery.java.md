# `policyRuleIdpDiscovery` Submodule <a name="`policyRuleIdpDiscovery` Submodule" id="@cdktf/provider-okta.policyRuleIdpDiscovery"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PolicyRuleIdpDiscovery <a name="PolicyRuleIdpDiscovery" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_rule_idp_discovery okta_policy_rule_idp_discovery}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.policy_rule_idp_discovery.PolicyRuleIdpDiscovery;

PolicyRuleIdpDiscovery.Builder.create(Construct scope, java.lang.String id)
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
//  .appExclude(java.util.List<PolicyRuleIdpDiscoveryAppExclude>)
//  .appInclude(IResolvable)
//  .appInclude(java.util.List<PolicyRuleIdpDiscoveryAppInclude>)
//  .id(java.lang.String)
//  .idpId(java.lang.String)
//  .idpType(java.lang.String)
//  .networkConnection(java.lang.String)
//  .networkExcludes(java.util.List<java.lang.String>)
//  .networkIncludes(java.util.List<java.lang.String>)
//  .platformInclude(IResolvable)
//  .platformInclude(java.util.List<PolicyRuleIdpDiscoveryPlatformInclude>)
//  .policyId(java.lang.String)
//  .priority(java.lang.Number)
//  .status(java.lang.String)
//  .userIdentifierAttribute(java.lang.String)
//  .userIdentifierPatterns(IResolvable)
//  .userIdentifierPatterns(java.util.List<PolicyRuleIdpDiscoveryUserIdentifierPatterns>)
//  .userIdentifierType(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Policy Rule Name. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.appExclude">appExclude</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExclude">PolicyRuleIdpDiscoveryAppExclude</a>></code> | app_exclude block. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.appInclude">appInclude</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppInclude">PolicyRuleIdpDiscoveryAppInclude</a>></code> | app_include block. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_rule_idp_discovery#id PolicyRuleIdpDiscovery#id}. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.idpId">idpId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_rule_idp_discovery#idp_id PolicyRuleIdpDiscovery#idp_id}. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.idpType">idpType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_rule_idp_discovery#idp_type PolicyRuleIdpDiscovery#idp_type}. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.networkConnection">networkConnection</a></code> | <code>java.lang.String</code> | Network selection mode: ANYWHERE, ZONE, ON_NETWORK, or OFF_NETWORK. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.networkExcludes">networkExcludes</a></code> | <code>java.util.List<java.lang.String></code> | The zones to exclude. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.networkIncludes">networkIncludes</a></code> | <code>java.util.List<java.lang.String></code> | The zones to include. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.platformInclude">platformInclude</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformInclude">PolicyRuleIdpDiscoveryPlatformInclude</a>></code> | platform_include block. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.policyId">policyId</a></code> | <code>java.lang.String</code> | Policy ID of the Rule. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.priority">priority</a></code> | <code>java.lang.Number</code> | Policy Rule Priority, this attribute can be set to a valid priority. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.status">status</a></code> | <code>java.lang.String</code> | Policy Rule Status: ACTIVE or INACTIVE. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.userIdentifierAttribute">userIdentifierAttribute</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_rule_idp_discovery#user_identifier_attribute PolicyRuleIdpDiscovery#user_identifier_attribute}. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.userIdentifierPatterns">userIdentifierPatterns</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatterns">PolicyRuleIdpDiscoveryUserIdentifierPatterns</a>></code> | user_identifier_patterns block. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.userIdentifierType">userIdentifierType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_rule_idp_discovery#user_identifier_type PolicyRuleIdpDiscovery#user_identifier_type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Policy Rule Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_rule_idp_discovery#name PolicyRuleIdpDiscovery#name}

---

##### `appExclude`<sup>Optional</sup> <a name="appExclude" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.appExclude"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExclude">PolicyRuleIdpDiscoveryAppExclude</a>>

app_exclude block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_rule_idp_discovery#app_exclude PolicyRuleIdpDiscovery#app_exclude}

---

##### `appInclude`<sup>Optional</sup> <a name="appInclude" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.appInclude"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppInclude">PolicyRuleIdpDiscoveryAppInclude</a>>

app_include block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_rule_idp_discovery#app_include PolicyRuleIdpDiscovery#app_include}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_rule_idp_discovery#id PolicyRuleIdpDiscovery#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idpId`<sup>Optional</sup> <a name="idpId" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.idpId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_rule_idp_discovery#idp_id PolicyRuleIdpDiscovery#idp_id}.

---

##### `idpType`<sup>Optional</sup> <a name="idpType" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.idpType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_rule_idp_discovery#idp_type PolicyRuleIdpDiscovery#idp_type}.

---

##### `networkConnection`<sup>Optional</sup> <a name="networkConnection" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.networkConnection"></a>

- *Type:* java.lang.String

Network selection mode: ANYWHERE, ZONE, ON_NETWORK, or OFF_NETWORK.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_rule_idp_discovery#network_connection PolicyRuleIdpDiscovery#network_connection}

---

##### `networkExcludes`<sup>Optional</sup> <a name="networkExcludes" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.networkExcludes"></a>

- *Type:* java.util.List<java.lang.String>

The zones to exclude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_rule_idp_discovery#network_excludes PolicyRuleIdpDiscovery#network_excludes}

---

##### `networkIncludes`<sup>Optional</sup> <a name="networkIncludes" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.networkIncludes"></a>

- *Type:* java.util.List<java.lang.String>

The zones to include.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_rule_idp_discovery#network_includes PolicyRuleIdpDiscovery#network_includes}

---

##### `platformInclude`<sup>Optional</sup> <a name="platformInclude" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.platformInclude"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformInclude">PolicyRuleIdpDiscoveryPlatformInclude</a>>

platform_include block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_rule_idp_discovery#platform_include PolicyRuleIdpDiscovery#platform_include}

---

##### `policyId`<sup>Optional</sup> <a name="policyId" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.policyId"></a>

- *Type:* java.lang.String

Policy ID of the Rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_rule_idp_discovery#policy_id PolicyRuleIdpDiscovery#policy_id}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.priority"></a>

- *Type:* java.lang.Number

Policy Rule Priority, this attribute can be set to a valid priority.

To avoid endless diff situation we error if an invalid priority is provided. API defaults it to the last (lowest) if not there.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_rule_idp_discovery#priority PolicyRuleIdpDiscovery#priority}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.status"></a>

- *Type:* java.lang.String

Policy Rule Status: ACTIVE or INACTIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_rule_idp_discovery#status PolicyRuleIdpDiscovery#status}

---

##### `userIdentifierAttribute`<sup>Optional</sup> <a name="userIdentifierAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.userIdentifierAttribute"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_rule_idp_discovery#user_identifier_attribute PolicyRuleIdpDiscovery#user_identifier_attribute}.

---

##### `userIdentifierPatterns`<sup>Optional</sup> <a name="userIdentifierPatterns" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.userIdentifierPatterns"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatterns">PolicyRuleIdpDiscoveryUserIdentifierPatterns</a>>

user_identifier_patterns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_rule_idp_discovery#user_identifier_patterns PolicyRuleIdpDiscovery#user_identifier_patterns}

---

##### `userIdentifierType`<sup>Optional</sup> <a name="userIdentifierType" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.Initializer.parameter.userIdentifierType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_rule_idp_discovery#user_identifier_type PolicyRuleIdpDiscovery#user_identifier_type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.putAppExclude">putAppExclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.putAppInclude">putAppInclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.putPlatformInclude">putPlatformInclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.putUserIdentifierPatterns">putUserIdentifierPatterns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetAppExclude">resetAppExclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetAppInclude">resetAppInclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetIdpId">resetIdpId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetIdpType">resetIdpType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetNetworkConnection">resetNetworkConnection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetNetworkExcludes">resetNetworkExcludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetNetworkIncludes">resetNetworkIncludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetPlatformInclude">resetPlatformInclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetPolicyId">resetPolicyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetUserIdentifierAttribute">resetUserIdentifierAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetUserIdentifierPatterns">resetUserIdentifierPatterns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetUserIdentifierType">resetUserIdentifierType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAppExclude` <a name="putAppExclude" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.putAppExclude"></a>

```java
public void putAppExclude(IResolvable OR java.util.List<PolicyRuleIdpDiscoveryAppExclude> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.putAppExclude.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExclude">PolicyRuleIdpDiscoveryAppExclude</a>>

---

##### `putAppInclude` <a name="putAppInclude" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.putAppInclude"></a>

```java
public void putAppInclude(IResolvable OR java.util.List<PolicyRuleIdpDiscoveryAppInclude> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.putAppInclude.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppInclude">PolicyRuleIdpDiscoveryAppInclude</a>>

---

##### `putPlatformInclude` <a name="putPlatformInclude" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.putPlatformInclude"></a>

```java
public void putPlatformInclude(IResolvable OR java.util.List<PolicyRuleIdpDiscoveryPlatformInclude> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.putPlatformInclude.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformInclude">PolicyRuleIdpDiscoveryPlatformInclude</a>>

---

##### `putUserIdentifierPatterns` <a name="putUserIdentifierPatterns" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.putUserIdentifierPatterns"></a>

```java
public void putUserIdentifierPatterns(IResolvable OR java.util.List<PolicyRuleIdpDiscoveryUserIdentifierPatterns> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.putUserIdentifierPatterns.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatterns">PolicyRuleIdpDiscoveryUserIdentifierPatterns</a>>

---

##### `resetAppExclude` <a name="resetAppExclude" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetAppExclude"></a>

```java
public void resetAppExclude()
```

##### `resetAppInclude` <a name="resetAppInclude" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetAppInclude"></a>

```java
public void resetAppInclude()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetId"></a>

```java
public void resetId()
```

##### `resetIdpId` <a name="resetIdpId" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetIdpId"></a>

```java
public void resetIdpId()
```

##### `resetIdpType` <a name="resetIdpType" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetIdpType"></a>

```java
public void resetIdpType()
```

##### `resetNetworkConnection` <a name="resetNetworkConnection" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetNetworkConnection"></a>

```java
public void resetNetworkConnection()
```

##### `resetNetworkExcludes` <a name="resetNetworkExcludes" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetNetworkExcludes"></a>

```java
public void resetNetworkExcludes()
```

##### `resetNetworkIncludes` <a name="resetNetworkIncludes" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetNetworkIncludes"></a>

```java
public void resetNetworkIncludes()
```

##### `resetPlatformInclude` <a name="resetPlatformInclude" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetPlatformInclude"></a>

```java
public void resetPlatformInclude()
```

##### `resetPolicyId` <a name="resetPolicyId" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetPolicyId"></a>

```java
public void resetPolicyId()
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetPriority"></a>

```java
public void resetPriority()
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetStatus"></a>

```java
public void resetStatus()
```

##### `resetUserIdentifierAttribute` <a name="resetUserIdentifierAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetUserIdentifierAttribute"></a>

```java
public void resetUserIdentifierAttribute()
```

##### `resetUserIdentifierPatterns` <a name="resetUserIdentifierPatterns" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetUserIdentifierPatterns"></a>

```java
public void resetUserIdentifierPatterns()
```

##### `resetUserIdentifierType` <a name="resetUserIdentifierType" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.resetUserIdentifierType"></a>

```java
public void resetUserIdentifierType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PolicyRuleIdpDiscovery resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.okta.policy_rule_idp_discovery.PolicyRuleIdpDiscovery;

PolicyRuleIdpDiscovery.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.okta.policy_rule_idp_discovery.PolicyRuleIdpDiscovery;

PolicyRuleIdpDiscovery.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.okta.policy_rule_idp_discovery.PolicyRuleIdpDiscovery;

PolicyRuleIdpDiscovery.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.okta.policy_rule_idp_discovery.PolicyRuleIdpDiscovery;

PolicyRuleIdpDiscovery.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),PolicyRuleIdpDiscovery.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a PolicyRuleIdpDiscovery resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the PolicyRuleIdpDiscovery to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing PolicyRuleIdpDiscovery that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_rule_idp_discovery#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the PolicyRuleIdpDiscovery to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.appExclude">appExclude</a></code> | <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList">PolicyRuleIdpDiscoveryAppExcludeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.appInclude">appInclude</a></code> | <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList">PolicyRuleIdpDiscoveryAppIncludeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.platformInclude">platformInclude</a></code> | <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList">PolicyRuleIdpDiscoveryPlatformIncludeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.userIdentifierPatterns">userIdentifierPatterns</a></code> | <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList">PolicyRuleIdpDiscoveryUserIdentifierPatternsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.appExcludeInput">appExcludeInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExclude">PolicyRuleIdpDiscoveryAppExclude</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.appIncludeInput">appIncludeInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppInclude">PolicyRuleIdpDiscoveryAppInclude</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.idpIdInput">idpIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.idpTypeInput">idpTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.networkConnectionInput">networkConnectionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.networkExcludesInput">networkExcludesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.networkIncludesInput">networkIncludesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.platformIncludeInput">platformIncludeInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformInclude">PolicyRuleIdpDiscoveryPlatformInclude</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.policyIdInput">policyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.userIdentifierAttributeInput">userIdentifierAttributeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.userIdentifierPatternsInput">userIdentifierPatternsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatterns">PolicyRuleIdpDiscoveryUserIdentifierPatterns</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.userIdentifierTypeInput">userIdentifierTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.idpId">idpId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.idpType">idpType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.networkConnection">networkConnection</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.networkExcludes">networkExcludes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.networkIncludes">networkIncludes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.policyId">policyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.userIdentifierAttribute">userIdentifierAttribute</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.userIdentifierType">userIdentifierType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `appExclude`<sup>Required</sup> <a name="appExclude" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.appExclude"></a>

```java
public PolicyRuleIdpDiscoveryAppExcludeList getAppExclude();
```

- *Type:* <a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList">PolicyRuleIdpDiscoveryAppExcludeList</a>

---

##### `appInclude`<sup>Required</sup> <a name="appInclude" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.appInclude"></a>

```java
public PolicyRuleIdpDiscoveryAppIncludeList getAppInclude();
```

- *Type:* <a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList">PolicyRuleIdpDiscoveryAppIncludeList</a>

---

##### `platformInclude`<sup>Required</sup> <a name="platformInclude" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.platformInclude"></a>

```java
public PolicyRuleIdpDiscoveryPlatformIncludeList getPlatformInclude();
```

- *Type:* <a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList">PolicyRuleIdpDiscoveryPlatformIncludeList</a>

---

##### `userIdentifierPatterns`<sup>Required</sup> <a name="userIdentifierPatterns" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.userIdentifierPatterns"></a>

```java
public PolicyRuleIdpDiscoveryUserIdentifierPatternsList getUserIdentifierPatterns();
```

- *Type:* <a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList">PolicyRuleIdpDiscoveryUserIdentifierPatternsList</a>

---

##### `appExcludeInput`<sup>Optional</sup> <a name="appExcludeInput" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.appExcludeInput"></a>

```java
public java.lang.Object getAppExcludeInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExclude">PolicyRuleIdpDiscoveryAppExclude</a>>

---

##### `appIncludeInput`<sup>Optional</sup> <a name="appIncludeInput" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.appIncludeInput"></a>

```java
public java.lang.Object getAppIncludeInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppInclude">PolicyRuleIdpDiscoveryAppInclude</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `idpIdInput`<sup>Optional</sup> <a name="idpIdInput" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.idpIdInput"></a>

```java
public java.lang.String getIdpIdInput();
```

- *Type:* java.lang.String

---

##### `idpTypeInput`<sup>Optional</sup> <a name="idpTypeInput" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.idpTypeInput"></a>

```java
public java.lang.String getIdpTypeInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkConnectionInput`<sup>Optional</sup> <a name="networkConnectionInput" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.networkConnectionInput"></a>

```java
public java.lang.String getNetworkConnectionInput();
```

- *Type:* java.lang.String

---

##### `networkExcludesInput`<sup>Optional</sup> <a name="networkExcludesInput" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.networkExcludesInput"></a>

```java
public java.util.List<java.lang.String> getNetworkExcludesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `networkIncludesInput`<sup>Optional</sup> <a name="networkIncludesInput" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.networkIncludesInput"></a>

```java
public java.util.List<java.lang.String> getNetworkIncludesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `platformIncludeInput`<sup>Optional</sup> <a name="platformIncludeInput" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.platformIncludeInput"></a>

```java
public java.lang.Object getPlatformIncludeInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformInclude">PolicyRuleIdpDiscoveryPlatformInclude</a>>

---

##### `policyIdInput`<sup>Optional</sup> <a name="policyIdInput" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.policyIdInput"></a>

```java
public java.lang.String getPolicyIdInput();
```

- *Type:* java.lang.String

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `userIdentifierAttributeInput`<sup>Optional</sup> <a name="userIdentifierAttributeInput" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.userIdentifierAttributeInput"></a>

```java
public java.lang.String getUserIdentifierAttributeInput();
```

- *Type:* java.lang.String

---

##### `userIdentifierPatternsInput`<sup>Optional</sup> <a name="userIdentifierPatternsInput" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.userIdentifierPatternsInput"></a>

```java
public java.lang.Object getUserIdentifierPatternsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatterns">PolicyRuleIdpDiscoveryUserIdentifierPatterns</a>>

---

##### `userIdentifierTypeInput`<sup>Optional</sup> <a name="userIdentifierTypeInput" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.userIdentifierTypeInput"></a>

```java
public java.lang.String getUserIdentifierTypeInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `idpId`<sup>Required</sup> <a name="idpId" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.idpId"></a>

```java
public java.lang.String getIdpId();
```

- *Type:* java.lang.String

---

##### `idpType`<sup>Required</sup> <a name="idpType" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.idpType"></a>

```java
public java.lang.String getIdpType();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `networkConnection`<sup>Required</sup> <a name="networkConnection" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.networkConnection"></a>

```java
public java.lang.String getNetworkConnection();
```

- *Type:* java.lang.String

---

##### `networkExcludes`<sup>Required</sup> <a name="networkExcludes" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.networkExcludes"></a>

```java
public java.util.List<java.lang.String> getNetworkExcludes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `networkIncludes`<sup>Required</sup> <a name="networkIncludes" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.networkIncludes"></a>

```java
public java.util.List<java.lang.String> getNetworkIncludes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.policyId"></a>

```java
public java.lang.String getPolicyId();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `userIdentifierAttribute`<sup>Required</sup> <a name="userIdentifierAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.userIdentifierAttribute"></a>

```java
public java.lang.String getUserIdentifierAttribute();
```

- *Type:* java.lang.String

---

##### `userIdentifierType`<sup>Required</sup> <a name="userIdentifierType" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.userIdentifierType"></a>

```java
public java.lang.String getUserIdentifierType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscovery.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PolicyRuleIdpDiscoveryAppExclude <a name="PolicyRuleIdpDiscoveryAppExclude" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExclude"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExclude.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.policy_rule_idp_discovery.PolicyRuleIdpDiscoveryAppExclude;

PolicyRuleIdpDiscoveryAppExclude.builder()
    .type(java.lang.String)
//  .id(java.lang.String)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExclude.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_rule_idp_discovery#type PolicyRuleIdpDiscovery#type}. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExclude.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_rule_idp_discovery#id PolicyRuleIdpDiscovery#id}. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExclude.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_rule_idp_discovery#name PolicyRuleIdpDiscovery#name}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExclude.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_rule_idp_discovery#type PolicyRuleIdpDiscovery#type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExclude.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_rule_idp_discovery#id PolicyRuleIdpDiscovery#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExclude.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_rule_idp_discovery#name PolicyRuleIdpDiscovery#name}.

---

### PolicyRuleIdpDiscoveryAppInclude <a name="PolicyRuleIdpDiscoveryAppInclude" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppInclude"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppInclude.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.policy_rule_idp_discovery.PolicyRuleIdpDiscoveryAppInclude;

PolicyRuleIdpDiscoveryAppInclude.builder()
    .type(java.lang.String)
//  .id(java.lang.String)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppInclude.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_rule_idp_discovery#type PolicyRuleIdpDiscovery#type}. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppInclude.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_rule_idp_discovery#id PolicyRuleIdpDiscovery#id}. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppInclude.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_rule_idp_discovery#name PolicyRuleIdpDiscovery#name}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppInclude.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_rule_idp_discovery#type PolicyRuleIdpDiscovery#type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppInclude.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_rule_idp_discovery#id PolicyRuleIdpDiscovery#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppInclude.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_rule_idp_discovery#name PolicyRuleIdpDiscovery#name}.

---

### PolicyRuleIdpDiscoveryConfig <a name="PolicyRuleIdpDiscoveryConfig" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.policy_rule_idp_discovery.PolicyRuleIdpDiscoveryConfig;

PolicyRuleIdpDiscoveryConfig.builder()
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
//  .appExclude(java.util.List<PolicyRuleIdpDiscoveryAppExclude>)
//  .appInclude(IResolvable)
//  .appInclude(java.util.List<PolicyRuleIdpDiscoveryAppInclude>)
//  .id(java.lang.String)
//  .idpId(java.lang.String)
//  .idpType(java.lang.String)
//  .networkConnection(java.lang.String)
//  .networkExcludes(java.util.List<java.lang.String>)
//  .networkIncludes(java.util.List<java.lang.String>)
//  .platformInclude(IResolvable)
//  .platformInclude(java.util.List<PolicyRuleIdpDiscoveryPlatformInclude>)
//  .policyId(java.lang.String)
//  .priority(java.lang.Number)
//  .status(java.lang.String)
//  .userIdentifierAttribute(java.lang.String)
//  .userIdentifierPatterns(IResolvable)
//  .userIdentifierPatterns(java.util.List<PolicyRuleIdpDiscoveryUserIdentifierPatterns>)
//  .userIdentifierType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.name">name</a></code> | <code>java.lang.String</code> | Policy Rule Name. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.appExclude">appExclude</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExclude">PolicyRuleIdpDiscoveryAppExclude</a>></code> | app_exclude block. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.appInclude">appInclude</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppInclude">PolicyRuleIdpDiscoveryAppInclude</a>></code> | app_include block. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_rule_idp_discovery#id PolicyRuleIdpDiscovery#id}. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.idpId">idpId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_rule_idp_discovery#idp_id PolicyRuleIdpDiscovery#idp_id}. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.idpType">idpType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_rule_idp_discovery#idp_type PolicyRuleIdpDiscovery#idp_type}. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.networkConnection">networkConnection</a></code> | <code>java.lang.String</code> | Network selection mode: ANYWHERE, ZONE, ON_NETWORK, or OFF_NETWORK. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.networkExcludes">networkExcludes</a></code> | <code>java.util.List<java.lang.String></code> | The zones to exclude. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.networkIncludes">networkIncludes</a></code> | <code>java.util.List<java.lang.String></code> | The zones to include. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.platformInclude">platformInclude</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformInclude">PolicyRuleIdpDiscoveryPlatformInclude</a>></code> | platform_include block. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.policyId">policyId</a></code> | <code>java.lang.String</code> | Policy ID of the Rule. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.priority">priority</a></code> | <code>java.lang.Number</code> | Policy Rule Priority, this attribute can be set to a valid priority. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.status">status</a></code> | <code>java.lang.String</code> | Policy Rule Status: ACTIVE or INACTIVE. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.userIdentifierAttribute">userIdentifierAttribute</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_rule_idp_discovery#user_identifier_attribute PolicyRuleIdpDiscovery#user_identifier_attribute}. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.userIdentifierPatterns">userIdentifierPatterns</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatterns">PolicyRuleIdpDiscoveryUserIdentifierPatterns</a>></code> | user_identifier_patterns block. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.userIdentifierType">userIdentifierType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_rule_idp_discovery#user_identifier_type PolicyRuleIdpDiscovery#user_identifier_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Policy Rule Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_rule_idp_discovery#name PolicyRuleIdpDiscovery#name}

---

##### `appExclude`<sup>Optional</sup> <a name="appExclude" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.appExclude"></a>

```java
public java.lang.Object getAppExclude();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExclude">PolicyRuleIdpDiscoveryAppExclude</a>>

app_exclude block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_rule_idp_discovery#app_exclude PolicyRuleIdpDiscovery#app_exclude}

---

##### `appInclude`<sup>Optional</sup> <a name="appInclude" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.appInclude"></a>

```java
public java.lang.Object getAppInclude();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppInclude">PolicyRuleIdpDiscoveryAppInclude</a>>

app_include block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_rule_idp_discovery#app_include PolicyRuleIdpDiscovery#app_include}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_rule_idp_discovery#id PolicyRuleIdpDiscovery#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idpId`<sup>Optional</sup> <a name="idpId" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.idpId"></a>

```java
public java.lang.String getIdpId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_rule_idp_discovery#idp_id PolicyRuleIdpDiscovery#idp_id}.

---

##### `idpType`<sup>Optional</sup> <a name="idpType" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.idpType"></a>

```java
public java.lang.String getIdpType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_rule_idp_discovery#idp_type PolicyRuleIdpDiscovery#idp_type}.

---

##### `networkConnection`<sup>Optional</sup> <a name="networkConnection" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.networkConnection"></a>

```java
public java.lang.String getNetworkConnection();
```

- *Type:* java.lang.String

Network selection mode: ANYWHERE, ZONE, ON_NETWORK, or OFF_NETWORK.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_rule_idp_discovery#network_connection PolicyRuleIdpDiscovery#network_connection}

---

##### `networkExcludes`<sup>Optional</sup> <a name="networkExcludes" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.networkExcludes"></a>

```java
public java.util.List<java.lang.String> getNetworkExcludes();
```

- *Type:* java.util.List<java.lang.String>

The zones to exclude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_rule_idp_discovery#network_excludes PolicyRuleIdpDiscovery#network_excludes}

---

##### `networkIncludes`<sup>Optional</sup> <a name="networkIncludes" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.networkIncludes"></a>

```java
public java.util.List<java.lang.String> getNetworkIncludes();
```

- *Type:* java.util.List<java.lang.String>

The zones to include.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_rule_idp_discovery#network_includes PolicyRuleIdpDiscovery#network_includes}

---

##### `platformInclude`<sup>Optional</sup> <a name="platformInclude" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.platformInclude"></a>

```java
public java.lang.Object getPlatformInclude();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformInclude">PolicyRuleIdpDiscoveryPlatformInclude</a>>

platform_include block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_rule_idp_discovery#platform_include PolicyRuleIdpDiscovery#platform_include}

---

##### `policyId`<sup>Optional</sup> <a name="policyId" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.policyId"></a>

```java
public java.lang.String getPolicyId();
```

- *Type:* java.lang.String

Policy ID of the Rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_rule_idp_discovery#policy_id PolicyRuleIdpDiscovery#policy_id}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

Policy Rule Priority, this attribute can be set to a valid priority.

To avoid endless diff situation we error if an invalid priority is provided. API defaults it to the last (lowest) if not there.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_rule_idp_discovery#priority PolicyRuleIdpDiscovery#priority}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Policy Rule Status: ACTIVE or INACTIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_rule_idp_discovery#status PolicyRuleIdpDiscovery#status}

---

##### `userIdentifierAttribute`<sup>Optional</sup> <a name="userIdentifierAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.userIdentifierAttribute"></a>

```java
public java.lang.String getUserIdentifierAttribute();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_rule_idp_discovery#user_identifier_attribute PolicyRuleIdpDiscovery#user_identifier_attribute}.

---

##### `userIdentifierPatterns`<sup>Optional</sup> <a name="userIdentifierPatterns" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.userIdentifierPatterns"></a>

```java
public java.lang.Object getUserIdentifierPatterns();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatterns">PolicyRuleIdpDiscoveryUserIdentifierPatterns</a>>

user_identifier_patterns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_rule_idp_discovery#user_identifier_patterns PolicyRuleIdpDiscovery#user_identifier_patterns}

---

##### `userIdentifierType`<sup>Optional</sup> <a name="userIdentifierType" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryConfig.property.userIdentifierType"></a>

```java
public java.lang.String getUserIdentifierType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_rule_idp_discovery#user_identifier_type PolicyRuleIdpDiscovery#user_identifier_type}.

---

### PolicyRuleIdpDiscoveryPlatformInclude <a name="PolicyRuleIdpDiscoveryPlatformInclude" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformInclude"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformInclude.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.policy_rule_idp_discovery.PolicyRuleIdpDiscoveryPlatformInclude;

PolicyRuleIdpDiscoveryPlatformInclude.builder()
//  .osExpression(java.lang.String)
//  .osType(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformInclude.property.osExpression">osExpression</a></code> | <code>java.lang.String</code> | Only available with OTHER OS type. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformInclude.property.osType">osType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_rule_idp_discovery#os_type PolicyRuleIdpDiscovery#os_type}. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformInclude.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_rule_idp_discovery#type PolicyRuleIdpDiscovery#type}. |

---

##### `osExpression`<sup>Optional</sup> <a name="osExpression" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformInclude.property.osExpression"></a>

```java
public java.lang.String getOsExpression();
```

- *Type:* java.lang.String

Only available with OTHER OS type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_rule_idp_discovery#os_expression PolicyRuleIdpDiscovery#os_expression}

---

##### `osType`<sup>Optional</sup> <a name="osType" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformInclude.property.osType"></a>

```java
public java.lang.String getOsType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_rule_idp_discovery#os_type PolicyRuleIdpDiscovery#os_type}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformInclude.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_rule_idp_discovery#type PolicyRuleIdpDiscovery#type}.

---

### PolicyRuleIdpDiscoveryUserIdentifierPatterns <a name="PolicyRuleIdpDiscoveryUserIdentifierPatterns" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatterns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatterns.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.policy_rule_idp_discovery.PolicyRuleIdpDiscoveryUserIdentifierPatterns;

PolicyRuleIdpDiscoveryUserIdentifierPatterns.builder()
//  .matchType(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatterns.property.matchType">matchType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_rule_idp_discovery#match_type PolicyRuleIdpDiscovery#match_type}. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatterns.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_rule_idp_discovery#value PolicyRuleIdpDiscovery#value}. |

---

##### `matchType`<sup>Optional</sup> <a name="matchType" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatterns.property.matchType"></a>

```java
public java.lang.String getMatchType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_rule_idp_discovery#match_type PolicyRuleIdpDiscovery#match_type}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatterns.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/resources/policy_rule_idp_discovery#value PolicyRuleIdpDiscovery#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### PolicyRuleIdpDiscoveryAppExcludeList <a name="PolicyRuleIdpDiscoveryAppExcludeList" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.policy_rule_idp_discovery.PolicyRuleIdpDiscoveryAppExcludeList;

new PolicyRuleIdpDiscoveryAppExcludeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList.get"></a>

```java
public PolicyRuleIdpDiscoveryAppExcludeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExclude">PolicyRuleIdpDiscoveryAppExclude</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExclude">PolicyRuleIdpDiscoveryAppExclude</a>>

---


### PolicyRuleIdpDiscoveryAppExcludeOutputReference <a name="PolicyRuleIdpDiscoveryAppExcludeOutputReference" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.policy_rule_idp_discovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference;

new PolicyRuleIdpDiscoveryAppExcludeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExclude">PolicyRuleIdpDiscoveryAppExclude</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExcludeOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppExclude">PolicyRuleIdpDiscoveryAppExclude</a>

---


### PolicyRuleIdpDiscoveryAppIncludeList <a name="PolicyRuleIdpDiscoveryAppIncludeList" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.policy_rule_idp_discovery.PolicyRuleIdpDiscoveryAppIncludeList;

new PolicyRuleIdpDiscoveryAppIncludeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList.get"></a>

```java
public PolicyRuleIdpDiscoveryAppIncludeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppInclude">PolicyRuleIdpDiscoveryAppInclude</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppInclude">PolicyRuleIdpDiscoveryAppInclude</a>>

---


### PolicyRuleIdpDiscoveryAppIncludeOutputReference <a name="PolicyRuleIdpDiscoveryAppIncludeOutputReference" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.policy_rule_idp_discovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference;

new PolicyRuleIdpDiscoveryAppIncludeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppInclude">PolicyRuleIdpDiscoveryAppInclude</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppIncludeOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryAppInclude">PolicyRuleIdpDiscoveryAppInclude</a>

---


### PolicyRuleIdpDiscoveryPlatformIncludeList <a name="PolicyRuleIdpDiscoveryPlatformIncludeList" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.policy_rule_idp_discovery.PolicyRuleIdpDiscoveryPlatformIncludeList;

new PolicyRuleIdpDiscoveryPlatformIncludeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList.get"></a>

```java
public PolicyRuleIdpDiscoveryPlatformIncludeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformInclude">PolicyRuleIdpDiscoveryPlatformInclude</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformInclude">PolicyRuleIdpDiscoveryPlatformInclude</a>>

---


### PolicyRuleIdpDiscoveryPlatformIncludeOutputReference <a name="PolicyRuleIdpDiscoveryPlatformIncludeOutputReference" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.policy_rule_idp_discovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference;

new PolicyRuleIdpDiscoveryPlatformIncludeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.resetOsExpression">resetOsExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.resetOsType">resetOsType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOsExpression` <a name="resetOsExpression" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.resetOsExpression"></a>

```java
public void resetOsExpression()
```

##### `resetOsType` <a name="resetOsType" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.resetOsType"></a>

```java
public void resetOsType()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.property.osExpressionInput">osExpressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.property.osTypeInput">osTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.property.osExpression">osExpression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.property.osType">osType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformInclude">PolicyRuleIdpDiscoveryPlatformInclude</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `osExpressionInput`<sup>Optional</sup> <a name="osExpressionInput" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.property.osExpressionInput"></a>

```java
public java.lang.String getOsExpressionInput();
```

- *Type:* java.lang.String

---

##### `osTypeInput`<sup>Optional</sup> <a name="osTypeInput" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.property.osTypeInput"></a>

```java
public java.lang.String getOsTypeInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `osExpression`<sup>Required</sup> <a name="osExpression" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.property.osExpression"></a>

```java
public java.lang.String getOsExpression();
```

- *Type:* java.lang.String

---

##### `osType`<sup>Required</sup> <a name="osType" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.property.osType"></a>

```java
public java.lang.String getOsType();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformIncludeOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryPlatformInclude">PolicyRuleIdpDiscoveryPlatformInclude</a>

---


### PolicyRuleIdpDiscoveryUserIdentifierPatternsList <a name="PolicyRuleIdpDiscoveryUserIdentifierPatternsList" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.policy_rule_idp_discovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList;

new PolicyRuleIdpDiscoveryUserIdentifierPatternsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList.get"></a>

```java
public PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatterns">PolicyRuleIdpDiscoveryUserIdentifierPatterns</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatterns">PolicyRuleIdpDiscoveryUserIdentifierPatterns</a>>

---


### PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference <a name="PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.policy_rule_idp_discovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference;

new PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.resetMatchType">resetMatchType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMatchType` <a name="resetMatchType" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.resetMatchType"></a>

```java
public void resetMatchType()
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.property.matchTypeInput">matchTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.property.matchType">matchType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatterns">PolicyRuleIdpDiscoveryUserIdentifierPatterns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `matchTypeInput`<sup>Optional</sup> <a name="matchTypeInput" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.property.matchTypeInput"></a>

```java
public java.lang.String getMatchTypeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `matchType`<sup>Required</sup> <a name="matchType" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.property.matchType"></a>

```java
public java.lang.String getMatchType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatternsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-okta.policyRuleIdpDiscovery.PolicyRuleIdpDiscoveryUserIdentifierPatterns">PolicyRuleIdpDiscoveryUserIdentifierPatterns</a>

---



