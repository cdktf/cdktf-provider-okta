# `dataOktaAuthServerClaim` Submodule <a name="`dataOktaAuthServerClaim` Submodule" id="@cdktf/provider-okta.dataOktaAuthServerClaim"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOktaAuthServerClaim <a name="DataOktaAuthServerClaim" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim"></a>

Represents a {@link https://www.terraform.io/docs/providers/okta/d/auth_server_claim okta_auth_server_claim}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.data_okta_auth_server_claim.DataOktaAuthServerClaim;

DataOktaAuthServerClaim.Builder.create(Construct scope, java.lang.String id)
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
    .authServerId(java.lang.String)
//  .id(java.lang.String)
//  .name(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.Initializer.parameter.authServerId">authServerId</a></code> | <code>java.lang.String</code> | Auth server ID. |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/d/auth_server_claim#id DataOktaAuthServerClaim#id}. |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/d/auth_server_claim#name DataOktaAuthServerClaim#name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `authServerId`<sup>Required</sup> <a name="authServerId" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.Initializer.parameter.authServerId"></a>

- *Type:* java.lang.String

Auth server ID.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/d/auth_server_claim#auth_server_id DataOktaAuthServerClaim#auth_server_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/d/auth_server_claim#id DataOktaAuthServerClaim#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/d/auth_server_claim#name DataOktaAuthServerClaim#name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.resetName">resetName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.resetId"></a>

```java
public void resetId()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.resetName"></a>

```java
public void resetName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.okta.data_okta_auth_server_claim.DataOktaAuthServerClaim;

DataOktaAuthServerClaim.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.okta.data_okta_auth_server_claim.DataOktaAuthServerClaim;

DataOktaAuthServerClaim.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.okta.data_okta_auth_server_claim.DataOktaAuthServerClaim;

DataOktaAuthServerClaim.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.property.alwaysIncludeInToken">alwaysIncludeInToken</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.property.claimType">claimType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.property.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.property.valueType">valueType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.property.authServerIdInput">authServerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.property.authServerId">authServerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `alwaysIncludeInToken`<sup>Required</sup> <a name="alwaysIncludeInToken" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.property.alwaysIncludeInToken"></a>

```java
public IResolvable getAlwaysIncludeInToken();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `claimType`<sup>Required</sup> <a name="claimType" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.property.claimType"></a>

```java
public java.lang.String getClaimType();
```

- *Type:* java.lang.String

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.property.scopes"></a>

```java
public java.util.List<java.lang.String> getScopes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `valueType`<sup>Required</sup> <a name="valueType" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.property.valueType"></a>

```java
public java.lang.String getValueType();
```

- *Type:* java.lang.String

---

##### `authServerIdInput`<sup>Optional</sup> <a name="authServerIdInput" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.property.authServerIdInput"></a>

```java
public java.lang.String getAuthServerIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `authServerId`<sup>Required</sup> <a name="authServerId" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.property.authServerId"></a>

```java
public java.lang.String getAuthServerId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaim.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOktaAuthServerClaimConfig <a name="DataOktaAuthServerClaimConfig" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaimConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaimConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.data_okta_auth_server_claim.DataOktaAuthServerClaimConfig;

DataOktaAuthServerClaimConfig.builder()
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
    .authServerId(java.lang.String)
//  .id(java.lang.String)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaimConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaimConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaimConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaimConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaimConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaimConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaimConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaimConfig.property.authServerId">authServerId</a></code> | <code>java.lang.String</code> | Auth server ID. |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaimConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/d/auth_server_claim#id DataOktaAuthServerClaim#id}. |
| <code><a href="#@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaimConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/d/auth_server_claim#name DataOktaAuthServerClaim#name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaimConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaimConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaimConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaimConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaimConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaimConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaimConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `authServerId`<sup>Required</sup> <a name="authServerId" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaimConfig.property.authServerId"></a>

```java
public java.lang.String getAuthServerId();
```

- *Type:* java.lang.String

Auth server ID.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/d/auth_server_claim#auth_server_id DataOktaAuthServerClaim#auth_server_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaimConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/d/auth_server_claim#id DataOktaAuthServerClaim#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-okta.dataOktaAuthServerClaim.DataOktaAuthServerClaimConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/d/auth_server_claim#name DataOktaAuthServerClaim#name}.

---



