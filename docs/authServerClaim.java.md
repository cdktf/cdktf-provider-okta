# `authServerClaim` Submodule <a name="`authServerClaim` Submodule" id="@cdktf/provider-okta.authServerClaim"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AuthServerClaim <a name="AuthServerClaim" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/auth_server_claim okta_auth_server_claim}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.auth_server_claim.AuthServerClaim;

AuthServerClaim.Builder.create(Construct scope, java.lang.String id)
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
    .authServerId(java.lang.String)
    .claimType(java.lang.String)
    .name(java.lang.String)
    .value(java.lang.String)
//  .alwaysIncludeInToken(java.lang.Boolean)
//  .alwaysIncludeInToken(IResolvable)
//  .groupFilterType(java.lang.String)
//  .id(java.lang.String)
//  .scopes(java.util.List<java.lang.String>)
//  .status(java.lang.String)
//  .valueType(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.Initializer.parameter.authServerId">authServerId</a></code> | <code>java.lang.String</code> | ID of the authorization server. |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.Initializer.parameter.claimType">claimType</a></code> | <code>java.lang.String</code> | Specifies whether the claim is for an access token `RESOURCE` or ID token `IDENTITY`. |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the claim. |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.Initializer.parameter.value">value</a></code> | <code>java.lang.String</code> | The value of the claim. |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.Initializer.parameter.alwaysIncludeInToken">alwaysIncludeInToken</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies whether to include claims in token, by default it is set to `true`. |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.Initializer.parameter.groupFilterType">groupFilterType</a></code> | <code>java.lang.String</code> | Specifies the type of group filter if `value_type` is `GROUPS`. |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/auth_server_claim#id AuthServerClaim#id}. |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.Initializer.parameter.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | The list of scopes the auth server claim is tied to. |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.Initializer.parameter.status">status</a></code> | <code>java.lang.String</code> | Default to `ACTIVE`. |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.Initializer.parameter.valueType">valueType</a></code> | <code>java.lang.String</code> | The type of value of the claim. It can be set to `EXPRESSION` or `GROUPS`. It defaults to `EXPRESSION`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `authServerId`<sup>Required</sup> <a name="authServerId" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.Initializer.parameter.authServerId"></a>

- *Type:* java.lang.String

ID of the authorization server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/auth_server_claim#auth_server_id AuthServerClaim#auth_server_id}

---

##### `claimType`<sup>Required</sup> <a name="claimType" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.Initializer.parameter.claimType"></a>

- *Type:* java.lang.String

Specifies whether the claim is for an access token `RESOURCE` or ID token `IDENTITY`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/auth_server_claim#claim_type AuthServerClaim#claim_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the claim.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/auth_server_claim#name AuthServerClaim#name}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.Initializer.parameter.value"></a>

- *Type:* java.lang.String

The value of the claim.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/auth_server_claim#value AuthServerClaim#value}

---

##### `alwaysIncludeInToken`<sup>Optional</sup> <a name="alwaysIncludeInToken" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.Initializer.parameter.alwaysIncludeInToken"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies whether to include claims in token, by default it is set to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/auth_server_claim#always_include_in_token AuthServerClaim#always_include_in_token}

---

##### `groupFilterType`<sup>Optional</sup> <a name="groupFilterType" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.Initializer.parameter.groupFilterType"></a>

- *Type:* java.lang.String

Specifies the type of group filter if `value_type` is `GROUPS`.

Can be set to one of the following `STARTS_WITH`, `EQUALS`, `CONTAINS`, `REGEX`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/auth_server_claim#group_filter_type AuthServerClaim#group_filter_type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/auth_server_claim#id AuthServerClaim#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.Initializer.parameter.scopes"></a>

- *Type:* java.util.List<java.lang.String>

The list of scopes the auth server claim is tied to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/auth_server_claim#scopes AuthServerClaim#scopes}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.Initializer.parameter.status"></a>

- *Type:* java.lang.String

Default to `ACTIVE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/auth_server_claim#status AuthServerClaim#status}

---

##### `valueType`<sup>Optional</sup> <a name="valueType" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.Initializer.parameter.valueType"></a>

- *Type:* java.lang.String

The type of value of the claim. It can be set to `EXPRESSION` or `GROUPS`. It defaults to `EXPRESSION`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/auth_server_claim#value_type AuthServerClaim#value_type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.resetAlwaysIncludeInToken">resetAlwaysIncludeInToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.resetGroupFilterType">resetGroupFilterType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.resetScopes">resetScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.resetValueType">resetValueType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAlwaysIncludeInToken` <a name="resetAlwaysIncludeInToken" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.resetAlwaysIncludeInToken"></a>

```java
public void resetAlwaysIncludeInToken()
```

##### `resetGroupFilterType` <a name="resetGroupFilterType" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.resetGroupFilterType"></a>

```java
public void resetGroupFilterType()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.resetId"></a>

```java
public void resetId()
```

##### `resetScopes` <a name="resetScopes" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.resetScopes"></a>

```java
public void resetScopes()
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.resetStatus"></a>

```java
public void resetStatus()
```

##### `resetValueType` <a name="resetValueType" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.resetValueType"></a>

```java
public void resetValueType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AuthServerClaim resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.okta.auth_server_claim.AuthServerClaim;

AuthServerClaim.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.okta.auth_server_claim.AuthServerClaim;

AuthServerClaim.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.okta.auth_server_claim.AuthServerClaim;

AuthServerClaim.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.okta.auth_server_claim.AuthServerClaim;

AuthServerClaim.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AuthServerClaim.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a AuthServerClaim resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AuthServerClaim to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AuthServerClaim that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/auth_server_claim#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the AuthServerClaim to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.alwaysIncludeInTokenInput">alwaysIncludeInTokenInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.authServerIdInput">authServerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.claimTypeInput">claimTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.groupFilterTypeInput">groupFilterTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.scopesInput">scopesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.valueTypeInput">valueTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.alwaysIncludeInToken">alwaysIncludeInToken</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.authServerId">authServerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.claimType">claimType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.groupFilterType">groupFilterType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.valueType">valueType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `alwaysIncludeInTokenInput`<sup>Optional</sup> <a name="alwaysIncludeInTokenInput" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.alwaysIncludeInTokenInput"></a>

```java
public java.lang.Object getAlwaysIncludeInTokenInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `authServerIdInput`<sup>Optional</sup> <a name="authServerIdInput" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.authServerIdInput"></a>

```java
public java.lang.String getAuthServerIdInput();
```

- *Type:* java.lang.String

---

##### `claimTypeInput`<sup>Optional</sup> <a name="claimTypeInput" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.claimTypeInput"></a>

```java
public java.lang.String getClaimTypeInput();
```

- *Type:* java.lang.String

---

##### `groupFilterTypeInput`<sup>Optional</sup> <a name="groupFilterTypeInput" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.groupFilterTypeInput"></a>

```java
public java.lang.String getGroupFilterTypeInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `scopesInput`<sup>Optional</sup> <a name="scopesInput" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.scopesInput"></a>

```java
public java.util.List<java.lang.String> getScopesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `valueTypeInput`<sup>Optional</sup> <a name="valueTypeInput" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.valueTypeInput"></a>

```java
public java.lang.String getValueTypeInput();
```

- *Type:* java.lang.String

---

##### `alwaysIncludeInToken`<sup>Required</sup> <a name="alwaysIncludeInToken" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.alwaysIncludeInToken"></a>

```java
public java.lang.Object getAlwaysIncludeInToken();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `authServerId`<sup>Required</sup> <a name="authServerId" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.authServerId"></a>

```java
public java.lang.String getAuthServerId();
```

- *Type:* java.lang.String

---

##### `claimType`<sup>Required</sup> <a name="claimType" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.claimType"></a>

```java
public java.lang.String getClaimType();
```

- *Type:* java.lang.String

---

##### `groupFilterType`<sup>Required</sup> <a name="groupFilterType" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.groupFilterType"></a>

```java
public java.lang.String getGroupFilterType();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.scopes"></a>

```java
public java.util.List<java.lang.String> getScopes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `valueType`<sup>Required</sup> <a name="valueType" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.valueType"></a>

```java
public java.lang.String getValueType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.authServerClaim.AuthServerClaim.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AuthServerClaimConfig <a name="AuthServerClaimConfig" id="@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.auth_server_claim.AuthServerClaimConfig;

AuthServerClaimConfig.builder()
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
    .authServerId(java.lang.String)
    .claimType(java.lang.String)
    .name(java.lang.String)
    .value(java.lang.String)
//  .alwaysIncludeInToken(java.lang.Boolean)
//  .alwaysIncludeInToken(IResolvable)
//  .groupFilterType(java.lang.String)
//  .id(java.lang.String)
//  .scopes(java.util.List<java.lang.String>)
//  .status(java.lang.String)
//  .valueType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.authServerId">authServerId</a></code> | <code>java.lang.String</code> | ID of the authorization server. |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.claimType">claimType</a></code> | <code>java.lang.String</code> | Specifies whether the claim is for an access token `RESOURCE` or ID token `IDENTITY`. |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the claim. |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.value">value</a></code> | <code>java.lang.String</code> | The value of the claim. |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.alwaysIncludeInToken">alwaysIncludeInToken</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies whether to include claims in token, by default it is set to `true`. |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.groupFilterType">groupFilterType</a></code> | <code>java.lang.String</code> | Specifies the type of group filter if `value_type` is `GROUPS`. |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/auth_server_claim#id AuthServerClaim#id}. |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | The list of scopes the auth server claim is tied to. |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.status">status</a></code> | <code>java.lang.String</code> | Default to `ACTIVE`. |
| <code><a href="#@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.valueType">valueType</a></code> | <code>java.lang.String</code> | The type of value of the claim. It can be set to `EXPRESSION` or `GROUPS`. It defaults to `EXPRESSION`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `authServerId`<sup>Required</sup> <a name="authServerId" id="@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.authServerId"></a>

```java
public java.lang.String getAuthServerId();
```

- *Type:* java.lang.String

ID of the authorization server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/auth_server_claim#auth_server_id AuthServerClaim#auth_server_id}

---

##### `claimType`<sup>Required</sup> <a name="claimType" id="@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.claimType"></a>

```java
public java.lang.String getClaimType();
```

- *Type:* java.lang.String

Specifies whether the claim is for an access token `RESOURCE` or ID token `IDENTITY`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/auth_server_claim#claim_type AuthServerClaim#claim_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the claim.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/auth_server_claim#name AuthServerClaim#name}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value of the claim.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/auth_server_claim#value AuthServerClaim#value}

---

##### `alwaysIncludeInToken`<sup>Optional</sup> <a name="alwaysIncludeInToken" id="@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.alwaysIncludeInToken"></a>

```java
public java.lang.Object getAlwaysIncludeInToken();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies whether to include claims in token, by default it is set to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/auth_server_claim#always_include_in_token AuthServerClaim#always_include_in_token}

---

##### `groupFilterType`<sup>Optional</sup> <a name="groupFilterType" id="@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.groupFilterType"></a>

```java
public java.lang.String getGroupFilterType();
```

- *Type:* java.lang.String

Specifies the type of group filter if `value_type` is `GROUPS`.

Can be set to one of the following `STARTS_WITH`, `EQUALS`, `CONTAINS`, `REGEX`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/auth_server_claim#group_filter_type AuthServerClaim#group_filter_type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/auth_server_claim#id AuthServerClaim#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.scopes"></a>

```java
public java.util.List<java.lang.String> getScopes();
```

- *Type:* java.util.List<java.lang.String>

The list of scopes the auth server claim is tied to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/auth_server_claim#scopes AuthServerClaim#scopes}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Default to `ACTIVE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/auth_server_claim#status AuthServerClaim#status}

---

##### `valueType`<sup>Optional</sup> <a name="valueType" id="@cdktf/provider-okta.authServerClaim.AuthServerClaimConfig.property.valueType"></a>

```java
public java.lang.String getValueType();
```

- *Type:* java.lang.String

The type of value of the claim. It can be set to `EXPRESSION` or `GROUPS`. It defaults to `EXPRESSION`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/resources/auth_server_claim#value_type AuthServerClaim#value_type}

---



