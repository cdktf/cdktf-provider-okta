# `data_okta_idp_social`

Refer to the Terraform Registory for docs: [`data_okta_idp_social`](https://registry.terraform.io/providers/okta/okta/4.1.0/docs/data-sources/idp_social).

# `dataOktaIdpSocial` Submodule <a name="`dataOktaIdpSocial` Submodule" id="@cdktf/provider-okta.dataOktaIdpSocial"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOktaIdpSocial <a name="DataOktaIdpSocial" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/data-sources/idp_social okta_idp_social}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.data_okta_idp_social.DataOktaIdpSocial;

DataOktaIdpSocial.Builder.create(Construct scope, java.lang.String id)
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
//  .name(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | ID of the IdP. |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | name of the IdP. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.Initializer.parameter.id"></a>

- *Type:* java.lang.String

ID of the IdP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/data-sources/idp_social#id DataOktaIdpSocial#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.Initializer.parameter.name"></a>

- *Type:* java.lang.String

name of the IdP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/data-sources/idp_social#name DataOktaIdpSocial#name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.resetName">resetName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.resetId"></a>

```java
public void resetId()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.resetName"></a>

```java
public void resetName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.okta.data_okta_idp_social.DataOktaIdpSocial;

DataOktaIdpSocial.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.okta.data_okta_idp_social.DataOktaIdpSocial;

DataOktaIdpSocial.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.okta.data_okta_idp_social.DataOktaIdpSocial;

DataOktaIdpSocial.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.accountLinkAction">accountLinkAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.accountLinkGroupInclude">accountLinkGroupInclude</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.authorizationBinding">authorizationBinding</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.authorizationUrl">authorizationUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.deprovisionedAction">deprovisionedAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.groupsAction">groupsAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.groupsAssignment">groupsAssignment</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.groupsAttribute">groupsAttribute</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.groupsFilter">groupsFilter</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.issuerMode">issuerMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.maxClockSkew">maxClockSkew</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.profileMaster">profileMaster</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.protocolType">protocolType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.provisioningAction">provisioningAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.subjectMatchAttribute">subjectMatchAttribute</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.subjectMatchType">subjectMatchType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.suspendedAction">suspendedAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.tokenBinding">tokenBinding</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.tokenUrl">tokenUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.usernameTemplate">usernameTemplate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `accountLinkAction`<sup>Required</sup> <a name="accountLinkAction" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.accountLinkAction"></a>

```java
public java.lang.String getAccountLinkAction();
```

- *Type:* java.lang.String

---

##### `accountLinkGroupInclude`<sup>Required</sup> <a name="accountLinkGroupInclude" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.accountLinkGroupInclude"></a>

```java
public java.util.List<java.lang.String> getAccountLinkGroupInclude();
```

- *Type:* java.util.List<java.lang.String>

---

##### `authorizationBinding`<sup>Required</sup> <a name="authorizationBinding" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.authorizationBinding"></a>

```java
public java.lang.String getAuthorizationBinding();
```

- *Type:* java.lang.String

---

##### `authorizationUrl`<sup>Required</sup> <a name="authorizationUrl" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.authorizationUrl"></a>

```java
public java.lang.String getAuthorizationUrl();
```

- *Type:* java.lang.String

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

---

##### `deprovisionedAction`<sup>Required</sup> <a name="deprovisionedAction" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.deprovisionedAction"></a>

```java
public java.lang.String getDeprovisionedAction();
```

- *Type:* java.lang.String

---

##### `groupsAction`<sup>Required</sup> <a name="groupsAction" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.groupsAction"></a>

```java
public java.lang.String getGroupsAction();
```

- *Type:* java.lang.String

---

##### `groupsAssignment`<sup>Required</sup> <a name="groupsAssignment" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.groupsAssignment"></a>

```java
public java.util.List<java.lang.String> getGroupsAssignment();
```

- *Type:* java.util.List<java.lang.String>

---

##### `groupsAttribute`<sup>Required</sup> <a name="groupsAttribute" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.groupsAttribute"></a>

```java
public java.lang.String getGroupsAttribute();
```

- *Type:* java.lang.String

---

##### `groupsFilter`<sup>Required</sup> <a name="groupsFilter" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.groupsFilter"></a>

```java
public java.util.List<java.lang.String> getGroupsFilter();
```

- *Type:* java.util.List<java.lang.String>

---

##### `issuerMode`<sup>Required</sup> <a name="issuerMode" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.issuerMode"></a>

```java
public java.lang.String getIssuerMode();
```

- *Type:* java.lang.String

---

##### `maxClockSkew`<sup>Required</sup> <a name="maxClockSkew" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.maxClockSkew"></a>

```java
public java.lang.Number getMaxClockSkew();
```

- *Type:* java.lang.Number

---

##### `profileMaster`<sup>Required</sup> <a name="profileMaster" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.profileMaster"></a>

```java
public IResolvable getProfileMaster();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `protocolType`<sup>Required</sup> <a name="protocolType" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.protocolType"></a>

```java
public java.lang.String getProtocolType();
```

- *Type:* java.lang.String

---

##### `provisioningAction`<sup>Required</sup> <a name="provisioningAction" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.provisioningAction"></a>

```java
public java.lang.String getProvisioningAction();
```

- *Type:* java.lang.String

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.scopes"></a>

```java
public java.util.List<java.lang.String> getScopes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `subjectMatchAttribute`<sup>Required</sup> <a name="subjectMatchAttribute" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.subjectMatchAttribute"></a>

```java
public java.lang.String getSubjectMatchAttribute();
```

- *Type:* java.lang.String

---

##### `subjectMatchType`<sup>Required</sup> <a name="subjectMatchType" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.subjectMatchType"></a>

```java
public java.lang.String getSubjectMatchType();
```

- *Type:* java.lang.String

---

##### `suspendedAction`<sup>Required</sup> <a name="suspendedAction" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.suspendedAction"></a>

```java
public java.lang.String getSuspendedAction();
```

- *Type:* java.lang.String

---

##### `tokenBinding`<sup>Required</sup> <a name="tokenBinding" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.tokenBinding"></a>

```java
public java.lang.String getTokenBinding();
```

- *Type:* java.lang.String

---

##### `tokenUrl`<sup>Required</sup> <a name="tokenUrl" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.tokenUrl"></a>

```java
public java.lang.String getTokenUrl();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `usernameTemplate`<sup>Required</sup> <a name="usernameTemplate" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.usernameTemplate"></a>

```java
public java.lang.String getUsernameTemplate();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOktaIdpSocialConfig <a name="DataOktaIdpSocialConfig" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocialConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocialConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.data_okta_idp_social.DataOktaIdpSocialConfig;

DataOktaIdpSocialConfig.builder()
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
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocialConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocialConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocialConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocialConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocialConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocialConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocialConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocialConfig.property.id">id</a></code> | <code>java.lang.String</code> | ID of the IdP. |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocialConfig.property.name">name</a></code> | <code>java.lang.String</code> | name of the IdP. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocialConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocialConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocialConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocialConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocialConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocialConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocialConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocialConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

ID of the IdP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/data-sources/idp_social#id DataOktaIdpSocial#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocialConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

name of the IdP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/data-sources/idp_social#name DataOktaIdpSocial#name}

---



